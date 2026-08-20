#!/usr/bin/env node
/* ============================================================
   verify-quiz-data.mjs — soru bankası QA script'i
   Kullanım: node scripts/verify-quiz-data.mjs assets/js/quiz-data.js --count=50
   ============================================================ */
import { createRequire } from "module";
import path from "path";
import { fileURLToPath } from "url";

const args = process.argv.slice(2);
const filePathArg = args.find((a) => !a.startsWith("--"));
const countArg = args.find((a) => a.startsWith("--count="));
const EXPECTED_COUNT = countArg ? parseInt(countArg.split("=")[1], 10) : 50;
const EXPECTED_DIFF = { kolay: Math.round(EXPECTED_COUNT * 0.34), orta: Math.round(EXPECTED_COUNT * 0.34) };
EXPECTED_DIFF.zor = EXPECTED_COUNT - EXPECTED_DIFF.kolay - EXPECTED_DIFF.orta;

if (!filePathArg) {
  console.error("Kullanım: node scripts/verify-quiz-data.mjs <quiz-data.js yolu> [--count=50]");
  process.exit(1);
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const absPath = path.resolve(process.cwd(), filePathArg);
const mod = require(absPath);
const QUIZ = mod.QUIZ || mod;

const LAZY_PATTERNS = [/\bbir öğrenci\b/i, /\bbir kişi\b/i, /\bAli\b/, /\bAyşe\b/, /\bMehmet\b/, /\bZeynep\b/];
const LAZY_THRESHOLD = 0.08; // dialogue formatı hariç, sorunun >%8'i bu kalıpları içeriyorsa uyar

let totalProblems = 0;
const moduleKeys = Object.keys(QUIZ);

for (const key of moduleKeys) {
  const questions = QUIZ[key];
  const problems = [];

  // 1. Sayı
  if (questions.length !== EXPECTED_COUNT) {
    problems.push(`Soru sayısı ${questions.length}, beklenen ${EXPECTED_COUNT}`);
  }

  // 2. Zorluk dağılımı
  const diffCount = { kolay: 0, orta: 0, zor: 0 };
  questions.forEach((q) => {
    if (diffCount[q.difficulty] === undefined) problems.push(`Geçersiz difficulty: "${q.difficulty}" (soru: ${q.text?.slice(0, 40)}...)`);
    else diffCount[q.difficulty]++;
  });
  for (const d of ["kolay", "orta", "zor"]) {
    if (Math.abs(diffCount[d] - EXPECTED_DIFF[d]) > 1) {
      problems.push(`Zorluk dağılımı dengesiz: ${d}=${diffCount[d]} (beklenen ~${EXPECTED_DIFF[d]})`);
    }
  }

  // 3. Tekrar (dup) kontrolü
  const seenTexts = new Map();
  questions.forEach((q, i) => {
    const norm = (q.text || "").trim().toLowerCase();
    if (seenTexts.has(norm)) {
      problems.push(`Tekrar eden soru metni: #${seenTexts.get(norm) + 1} ile #${i + 1}`);
    } else {
      seenTexts.set(norm, i);
    }
  });

  // 4. Cevap harfi dağılımı — dengeli VE karışık (bloklar hâlinde değil)
  const letters = questions.map((q) => q.correct);
  const letterCount = [0, 0, 0, 0, 0];
  letters.forEach((l) => {
    if (l == null || l < 0 || l > 4) problems.push(`Geçersiz correct index: ${l}`);
    else letterCount[l]++;
  });
  const avg = questions.length / 5;
  letterCount.forEach((c, i) => {
    if (Math.abs(c - avg) > avg * 0.6 + 2) {
      problems.push(`Cevap harfi dağılımı dengesiz: ${"ABCDE"[i]}=${c} (ortalama ~${avg.toFixed(1)})`);
    }
  });
  // blok kontrolü: art arda aynı harf 4+ kez
  let run = 1;
  for (let i = 1; i < letters.length; i++) {
    if (letters[i] === letters[i - 1]) {
      run++;
      if (run >= 4) problems.push(`Cevap harfi bloğu: soru #${i - run + 2}–#${i + 1} hepsi "${"ABCDE"[letters[i]]}"`);
    } else {
      run = 1;
    }
  }

  // 5. İsim/kalıp taraması
  let lazyHits = 0;
  questions.forEach((q) => {
    const isDialogue = !!q.dialogue;
    if (isDialogue) return;
    const hay = `${q.context || ""} ${q.text || ""}`;
    if (LAZY_PATTERNS.some((p) => p.test(hay))) lazyHits++;
  });
  if (lazyHits / questions.length > LAZY_THRESHOLD) {
    problems.push(`Tembel anlatıcı kalıbı oranı yüksek: ${lazyHits}/${questions.length}`);
  }

  // 6. Beş seçenek kontrolü
  questions.forEach((q, i) => {
    if (!Array.isArray(q.options) || q.options.length !== 5) {
      problems.push(`Soru #${i + 1}: 5 seçenek yok (${q.options?.length})`);
    }
    if (!q.explain || q.explain.length < 20) {
      problems.push(`Soru #${i + 1}: explain eksik/çok kısa`);
    }
  });

  if (problems.length === 0) {
    console.log(`✅ [${key}] TEMİZ — ${questions.length} soru (kolay:${diffCount.kolay} orta:${diffCount.orta} zor:${diffCount.zor})`);
  } else {
    console.log(`❌ [${key}] ${problems.length} sorun bulundu:`);
    problems.forEach((p) => console.log(`   - ${p}`));
    totalProblems += problems.length;
  }
}

process.exit(totalProblems > 0 ? 1 : 0);
