/* ============================================================
   quiz-engine.js — jenerik motor: render bileşenleri + quiz mantığı
   Konudan bağımsız. Kütüphanesiz, saf DOM/SVG.
   ============================================================ */

const LETTERS = ["A", "B", "C", "D", "E"];

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else node.setAttribute(k, v);
  }
  for (const c of [].concat(children)) {
    if (c == null) continue;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  }
  return node;
}

function svg(tag, attrs = {}) {
  const node = document.createElementNS("http://www.w3.org/2000/svg", tag);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
  return node;
}

/* ---------------- renderDataTable ---------------- */
function renderDataTable(spec) {
  // spec: { headers: [...], rows: [[...], ...] }
  const table = el("table", { class: "viz-table" });
  const thead = el("thead", {}, el("tr", {}, spec.headers.map((h) => el("th", {}, h))));
  const tbody = el(
    "tbody",
    {},
    spec.rows.map((r) => el("tr", {}, r.map((c) => el("td", {}, String(c)))))
  );
  table.appendChild(thead);
  table.appendChild(tbody);
  return table;
}

/* ---------------- renderChart (bar) ---------------- */
function renderChart(spec) {
  // spec: { labels: [...], values: [...], unit: "kJ/g", kind: "bar", tone: [...] optional }
  const W = 520, H = 260, padL = 46, padB = 40, padT = 16, padR = 16;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const maxV = Math.max(...spec.values.map(Math.abs)) * 1.15 || 1;
  const zeroHasNeg = spec.values.some((v) => v < 0);
  const s = svg("svg", { viewBox: `0 0 ${W} ${H}`, class: "viz-chart", role: "img" });

  const zeroY = zeroHasNeg ? padT + (plotH * maxV) / (2 * maxV) : padT + plotH;
  for (let i = 0; i <= 4; i++) {
    const y = padT + (plotH * i) / 4;
    s.appendChild(svg("line", { class: "gridline", x1: padL, x2: W - padR, y1: y, y2: y }));
  }
  s.appendChild(svg("line", { class: "axis", x1: padL, x2: padL, y1: padT, y2: H - padB }));
  s.appendChild(svg("line", { class: "axis", x1: padL, x2: W - padR, y1: zeroY, y2: zeroY }));

  const n = spec.values.length;
  const bw = (plotW / n) * 0.55;
  spec.values.forEach((v, i) => {
    const cx = padL + (plotW * (i + 0.5)) / n;
    const scale = zeroHasNeg ? plotH / (2 * maxV) : plotH / maxV;
    const barH = Math.abs(v) * scale;
    const y = v >= 0 ? zeroY - barH : zeroY;
    const tone = spec.tone && spec.tone[i] ? spec.tone[i] : "";
    s.appendChild(svg("rect", { class: `bar ${tone}`, x: cx - bw / 2, y, width: bw, height: Math.max(barH, 1.5), rx: 3 }));
    const t = svg("text", { x: cx, y: v >= 0 ? y - 6 : y + barH + 14, "text-anchor": "middle", class: "label" });
    t.textContent = v;
    s.appendChild(t);
    const lbl = svg("text", { x: cx, y: H - padB + 16, "text-anchor": "middle" });
    lbl.textContent = spec.labels[i];
    s.appendChild(lbl);
  });
  if (spec.unit) {
    const u = svg("text", { x: 6, y: 12 });
    u.textContent = spec.unit;
    s.appendChild(u);
  }
  return s;
}

/* ---------------- renderCompareLineChart ---------------- */
function renderCompareLineChart(spec) {
  // spec: { xLabels: [...], series: [{name, values, color}], xTitle, yTitle }
  const W = 560, H = 300, padL = 52, padB = 44, padT = 26, padR = 20;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const allVals = spec.series.flatMap((s) => s.values);
  const maxV = Math.max(...allVals) * 1.1 || 1;
  const minV = Math.min(0, ...allVals);
  const n = spec.xLabels.length;
  const s = svg("svg", { viewBox: `0 0 ${W} ${H}`, class: "viz-chart", role: "img" });

  for (let i = 0; i <= 4; i++) {
    const y = padT + (plotH * i) / 4;
    s.appendChild(svg("line", { class: "gridline", x1: padL, x2: W - padR, y1: y, y2: y }));
  }
  s.appendChild(svg("line", { class: "axis", x1: padL, x2: padL, y1: padT, y2: H - padB }));
  s.appendChild(svg("line", { class: "axis", x1: padL, x2: W - padR, y1: H - padB, y2: H - padB }));

  const xAt = (i) => padL + (n === 1 ? plotW / 2 : (plotW * i) / (n - 1));
  const yAt = (v) => padT + plotH - ((v - minV) / (maxV - minV)) * plotH;

  spec.xLabels.forEach((lab, i) => {
    const t = svg("text", { x: xAt(i), y: H - padB + 18, "text-anchor": "middle" });
    t.textContent = lab;
    s.appendChild(t);
  });

  spec.series.forEach((ser) => {
    const pts = ser.values.map((v, i) => `${xAt(i)},${yAt(v)}`).join(" ");
    s.appendChild(svg("polyline", { class: "line", points: pts, style: `stroke:${ser.color || "var(--rate)"}` }));
    ser.values.forEach((v, i) => {
      s.appendChild(svg("circle", { class: "point", cx: xAt(i), cy: yAt(v), r: 3.6, style: `fill:${ser.color || "var(--rate)"}` }));
    });
  });

  if (spec.series.length > 1) {
    let lx = padL + 6;
    spec.series.forEach((ser) => {
      s.appendChild(svg("circle", { cx: lx, cy: 14, r: 4, style: `fill:${ser.color || "var(--rate)"}` }));
      const t = svg("text", { x: lx + 9, y: 18 });
      t.textContent = ser.name;
      s.appendChild(t);
      lx += ser.name.length * 6.4 + 26;
    });
  }
  return s;
}

/* ---------------- renderStatementList (I/II/III) ---------------- */
function renderStatementList(spec) {
  // spec: { items: ["...", "...", "..."] }  (roma numarası otomatik)
  const roman = ["I", "II", "III", "IV", "V"];
  const ul = el("ul", { class: "viz-statements" });
  spec.items.forEach((txt, i) => {
    ul.appendChild(el("li", {}, [el("span", { class: "roman" }, `${roman[i]}.`), el("span", {}, txt)]));
  });
  return ul;
}

/* ---------------- renderDialogue ---------------- */
function renderDialogue(spec) {
  // spec: { turns: [{who, text}] }
  const wrap = el("div", { class: "viz-dialogue" });
  spec.turns.forEach((t, i) => {
    wrap.appendChild(
      el("div", { class: "bubble" + (i % 2 === 1 ? " right" : "") }, [el("b", {}, t.who), el("span", {}, t.text)])
    );
  });
  return wrap;
}

/* ---------------- renderMatchTable ---------------- */
function renderMatchTable(spec) {
  // spec: { leftHeader, rightHeader, pairs: [[left, right], ...] }
  const wrap = el("div", { class: "viz-match" });
  const table = el("table");
  table.appendChild(el("thead", {}, el("tr", {}, [el("th", {}, spec.leftHeader), el("th", {}, spec.rightHeader)])));
  const tbody = el("tbody", {}, spec.pairs.map((p) => el("tr", {}, [el("td", {}, p[0]), el("td", {}, p[1])])));
  table.appendChild(tbody);
  wrap.appendChild(table);
  return wrap;
}

/* ---------------- renderChecklist ---------------- */
function renderChecklist(spec) {
  // spec: { items: ["...", ...] }
  const ul = el("ul", { class: "viz-checklist" });
  spec.items.forEach((txt) => ul.appendChild(el("li", {}, [el("span", { class: "box" }), el("span", {}, txt)])));
  return ul;
}

/* ---------------- renderPEDiagram (potansiyel enerji-tepkime koordinatı) ---------------- */
function renderPEDiagram(spec) {
  // spec: { reactant, peak, product, unit, reactantLabel, productLabel, second: { peak, label } }
  const W = 480, H = 260, padL = 50, padR = 18, padT = 20, padB = 40;
  const plotW = W - padL - padR, plotH = H - padT - padB;
  const allV = [spec.reactant, spec.peak, spec.product, spec.second ? spec.second.peak : spec.peak];
  const maxV = Math.max(...allV) * 1.12;
  const minV = Math.min(0, ...allV) * (Math.min(...allV) < 0 ? 1.12 : 1);
  const yAt = (v) => padT + plotH - ((v - minV) / (maxV - minV)) * plotH;
  const x0 = padL, x1 = padL + plotW * 0.24, x2 = padL + plotW * 0.62, x3 = padL + plotW;

  const s = svg("svg", { viewBox: `0 0 ${W} ${H}`, class: "viz-chart", role: "img" });
  for (let i = 0; i <= 4; i++) {
    const y = padT + (plotH * i) / 4;
    s.appendChild(svg("line", { class: "gridline", x1: padL, x2: W - padR, y1: y, y2: y }));
    const val = maxV - ((maxV - minV) * i) / 4;
    const t = svg("text", { x: padL - 6, y: y + 3, "text-anchor": "end" });
    t.textContent = Math.round(val);
    s.appendChild(t);
  }
  s.appendChild(svg("line", { class: "axis", x1: padL, x2: padL, y1: padT, y2: H - padB }));
  s.appendChild(svg("line", { class: "axis", x1: padL, x2: W - padR, y1: H - padB, y2: H - padB }));

  function curve(peakV, color) {
    const p0 = [x1, yAt(spec.reactant)], p1 = [(x1 + x2) / 2, yAt(peakV)], p2 = [x2, yAt(spec.product)];
    const d = `M ${p0[0]},${p0[1]} Q ${p1[0]},${p1[1]} ${p2[0]},${p2[1]}`;
    return svg("path", { d, fill: "none", class: "line", style: `stroke:${color}` });
  }
  if (spec.second) s.appendChild(curve(spec.second.peak, "var(--rate)"));
  s.appendChild(curve(spec.peak, "var(--energy)"));

  s.appendChild(svg("line", { x1: x0, x2: x1, y1: yAt(spec.reactant), y2: yAt(spec.reactant), stroke: "var(--ink)", "stroke-width": 2.4 }));
  s.appendChild(svg("line", { x1: x2, x2: x3, y1: yAt(spec.product), y2: yAt(spec.product), stroke: "var(--ink)", "stroke-width": 2.4 }));
  const rl = svg("text", { x: (x0 + x1) / 2, y: yAt(spec.reactant) + 16, "text-anchor": "middle", class: "label" });
  rl.textContent = spec.reactantLabel || "Tepkenler";
  s.appendChild(rl);
  const pl = svg("text", { x: (x2 + x3) / 2, y: yAt(spec.product) + (spec.product >= spec.reactant ? -8 : 16), "text-anchor": "middle", class: "label" });
  pl.textContent = spec.productLabel || "Ürünler";
  s.appendChild(pl);

  if (spec.second) {
    const legend = svg("text", { x: padL + 4, y: padT + 10, class: "label", style: "fill:var(--rate)" });
    legend.textContent = spec.second.label || "Katalizörlü";
    s.appendChild(legend);
    const legend2 = svg("text", { x: padL + 4, y: padT + 24, class: "label", style: "fill:var(--energy)" });
    legend2.textContent = spec.firstLabel || "Katalizörsüz";
    s.appendChild(legend2);
  }

  const axisLbl = svg("text", { x: padL + plotW - 90, y: H - 8 });
  axisLbl.textContent = "Tepkime Koordinatı →";
  s.appendChild(axisLbl);
  if (spec.unit) {
    const u = svg("text", { x: 6, y: 12 });
    u.textContent = spec.unit;
    s.appendChild(u);
  }
  return s;
}

/* ---------------- renderParticleBox (kapalı kaplarda tanecik yoğunluğu) ---------------- */
function renderParticleBox(spec) {
  // spec: { vessels: [{ label, particles: [{color,count}, ...] }, ...], legend: [{color,name}], note }
  const n = spec.vessels.length;
  const W = Math.max(320, n * 150), H = 190;
  const cx0 = W / n / 2, spacing = W / n, r = Math.min(58, spacing * 0.36);
  const s = svg("svg", { viewBox: `0 0 ${W} ${H}`, class: "viz-chart", role: "img" });

  spec.vessels.forEach((v, vi) => {
    const cx = cx0 + vi * spacing, cy = 78;
    s.appendChild(svg("circle", { cx, cy, r, fill: "var(--bg-panel)", stroke: "var(--ink-soft)", "stroke-width": 2 }));
    let seed = vi * 97 + 13;
    const rand = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    v.particles.forEach((sp) => {
      for (let i = 0; i < sp.count; i++) {
        const ang = rand() * Math.PI * 2, dist = rand() * (r - 10);
        const px = cx + Math.cos(ang) * dist, py = cy + Math.sin(ang) * dist;
        s.appendChild(svg("circle", { cx: px, cy: py, r: 4.4, fill: sp.color }));
      }
    });
    const lbl = svg("text", { x: cx, y: cy + r + 18, "text-anchor": "middle", class: "label" });
    lbl.textContent = v.label;
    s.appendChild(lbl);
  });

  if (spec.legend) {
    let lx = 6;
    spec.legend.forEach((lg) => {
      s.appendChild(svg("circle", { cx: lx, cy: 14, r: 4.4, fill: lg.color }));
      const t = svg("text", { x: lx + 9, y: 18 });
      t.textContent = lg.name;
      s.appendChild(t);
      lx += lg.name.length * 6.4 + 26;
    });
  }
  if (spec.note) {
    const nt = svg("text", { x: W / 2, y: H - 6, "text-anchor": "middle" });
    nt.textContent = spec.note;
    s.appendChild(nt);
  }
  return s;
}

/* ---------------- renderIllustration (elle çizilmiş, bağlamı somutlaştıran sahne) ---------------- */
function renderIllustration(spec) {
  // spec: { svg: "<...>", viewBox: "0 0 W H" } — sabit, geliştirici tarafından yazılmış SVG içeriği
  const s = svg("svg", { viewBox: spec.viewBox || "0 0 300 140", class: "viz-chart viz-illustration", role: "img" });
  s.innerHTML = spec.svg;
  return s;
}

const RENDERERS = {
  table: renderDataTable,
  chart: renderChart,
  compareChart: renderCompareLineChart,
  statements: renderStatementList,
  dialogue: renderDialogue,
  matchPairs: renderMatchTable,
  checklist: renderChecklist,
  peDiagram: renderPEDiagram,
  particleBox: renderParticleBox,
  illustration: renderIllustration,
};

/* ============================================================
   Quiz mantığı
   ============================================================ */
function shuffle(arr) {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/* Her ziyarette havuzdan QUESTION_COUNT kadar soru gösterilir (bkz.
   "Benzerini Çöz" mantığı aşağıda); geri kalanı yalnızca bir soru
   yanlış yapılıp pekiştirme istendiğinde sırayla devreye girer.
   Zorluk (kolay/orta/zor) mümkün olduğunca dengeli seçilir. */
function selectInitialIndices(questions, count) {
  const byDifficulty = { kolay: [], orta: [], zor: [] };
  questions.forEach((q, i) => {
    (byDifficulty[q.difficulty] || byDifficulty.kolay).push(i);
  });
  const buckets = shuffle(Object.values(byDifficulty).filter((b) => b.length));
  buckets.forEach((b, i) => (buckets[i] = shuffle(b)));
  const picked = [];
  let round = 0;
  while (picked.length < count && buckets.some((b) => b.length)) {
    const bucket = buckets[round % buckets.length];
    if (bucket.length) picked.push(bucket.pop());
    round++;
  }
  return picked;
}

/* ---------------- kazanım / öğrenme analizi verisi ---------------- */
/* Bu proje her modülü tam olarak bir kazanıma karşılık getirir
   (bkz. CLAUDE.md madde 14); bu yüzden kazanım kodu, modül anahtarına
   bakılarak sabit bir tablodan okunur. */
const MODULE_KAZANIM = {
  m1: "KİM.11.1.1",
  m2: "KİM.11.1.2",
  m3: "KİM.11.1.3",
  m4: "KİM.11.1.4",
  m5: "KİM.11.1.5",
  m6: "KİM.11.1.6",
  m7: "KİM.11.1.7",
  m8: "KİM.11.1.8",
};

const ERROR_KEY = "khiz_errors";
const LEARNING_KEY = "khiz_learning";
const HISTORY_KEY = "khiz_learning_history";

function safeParse(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}
function safeSave(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function readErrors() {
  return safeParse(ERROR_KEY, {});
}

function saveWrongQuestion(moduleKey, question, questionIndex) {
  const errors = readErrors();
  if (!errors[moduleKey]) errors[moduleKey] = {};
  const key = `${moduleKey}_${questionIndex}`;
  if (!errors[moduleKey][key]) {
    errors[moduleKey][key] = {
      questionIndex,
      context: question.context || "",
      kazanim: MODULE_KAZANIM[moduleKey] || "",
      text: question.text || "",
      options: question.options || [],
      correct: question.correct,
      explain: question.explain || "",
      wrongCount: 1,
      lastWrong: Date.now(),
    };
  } else {
    errors[moduleKey][key].wrongCount = (errors[moduleKey][key].wrongCount || 0) + 1;
    errors[moduleKey][key].lastWrong = Date.now();
  }
  safeSave(ERROR_KEY, errors);
}

function readLearning() {
  return safeParse(LEARNING_KEY, {});
}
function saveLearning(learning) {
  safeSave(LEARNING_KEY, learning);
}
function readHistory() {
  return safeParse(HISTORY_KEY, []);
}
function saveHistory(history) {
  safeSave(HISTORY_KEY, history);
}

function registerAnswer(question, isCorrect, moduleKey) {
  const kazanim = MODULE_KAZANIM[moduleKey] || "Kazanım belirtilmemiş";
  const learning = readLearning();
  if (!learning[kazanim]) {
    learning[kazanim] = { kazanim, attempts: 0, correct: 0, wrong: 0, modules: {} };
  }
  const data = learning[kazanim];
  data.attempts++;
  if (isCorrect) data.correct++;
  else data.wrong++;

  if (!data.modules[moduleKey]) data.modules[moduleKey] = { attempts: 0, correct: 0, wrong: 0 };
  data.modules[moduleKey].attempts++;
  if (isCorrect) data.modules[moduleKey].correct++;
  else data.modules[moduleKey].wrong++;

  saveLearning(learning);

  const history = readHistory();
  history.push({ time: Date.now(), moduleKey, kazanim, correct: isCorrect, question: question.text || "" });
  if (history.length > 500) history.splice(0, history.length - 500);
  saveHistory(history);
}

function buildQuestionCard(q, idx, moduleKey, position, onAnswered, onWantSimilar) {
  const card = el("div", { class: "qcard", id: `q-${idx}` });
  const diffTag = el("span", { class: `tag ${q.difficulty}` }, q.difficulty === "kolay" ? "Kolay" : q.difficulty === "orta" ? "Orta" : "Zor");
  card.appendChild(el("div", { class: "qcard-head" }, [el("span", { class: "qno" }, `Soru ${position + 1}`), diffTag]));

  if (q.context) card.appendChild(el("div", { class: "context" }, q.context));

  for (const [field, fn] of Object.entries(RENDERERS)) {
    if (q[field]) card.appendChild(fn(q[field]));
  }

  card.appendChild(el("div", { class: "qtext" }, q.text));

  const opts = el("div", { class: "options" });
  q.options.forEach((optText, i) => {
    const row = el("div", { class: "opt" }, [el("span", { class: "letter" }, LETTERS[i]), el("span", {}, optText)]);
    row.addEventListener("click", () => {
      if (row.dataset.locked) return;
      [...opts.children].forEach((c) => (c.dataset.locked = "1"));
      const correctIdx = q.correct;
      [...opts.children][correctIdx].classList.add("correct");
      if (i !== correctIdx) row.classList.add("wrong");
      [...opts.children].forEach((c) => c.classList.add("disabled"));
      const exp = card.querySelector(".explain");
      exp.classList.add("show");
      const wasCorrect = i === correctIdx;
      registerAnswer(q, wasCorrect, moduleKey);
      if (!wasCorrect) {
        saveWrongQuestion(moduleKey, q, idx);
        const similarBtn = el("button", { class: "btn similar-btn" }, "🔄 Benzerini Çöz");
        similarBtn.addEventListener("click", () => onWantSimilar(position));
        exp.appendChild(similarBtn);
      }
      onAnswered(position, wasCorrect);
    });
    opts.appendChild(row);
  });
  card.appendChild(opts);
  card.appendChild(el("div", { class: "explain" }, [el("b", {}, "Açıklama: "), el("span", {}, q.explain)]));
  return card;
}

function renderQuiz(moduleKey, questions, hostId = "quiz-host") {
  const host = document.getElementById(hostId);
  if (!host) return;
  host.innerHTML = "";

  const QUESTION_COUNT = Math.min(5, questions.length);
  const usedIndices = new Set();
  const activeIndices = selectInitialIndices(questions, QUESTION_COUNT);
  activeIndices.forEach((i) => usedIndices.add(i));

  let answered = 0;

  const bar = el("div", { class: "progress-mini" });
  for (let i = 0; i < QUESTION_COUNT; i++) bar.appendChild(el("i"));
  host.appendChild(bar);
  const status = el("p", { style: "color:var(--ink-soft);font-size:.9rem" }, `0/${QUESTION_COUNT} soru tamamlandı`);
  host.appendChild(status);

  const cardsWrap = el("div");
  host.appendChild(cardsWrap);

  function pickUnusedIndex() {
    const pool = questions.map((_, i) => i).filter((i) => !usedIndices.has(i));
    if (pool.length === 0) return -1;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function mount(position, replaceEl) {
    const idx = activeIndices[position];
    const card = buildQuestionCard(
      questions[idx],
      idx,
      moduleKey,
      position,
      (pos, wasCorrect) => {
        const bars = bar.children;
        if (bars[pos].className !== "done") {
          bars[pos].className = "done";
          answered++;
        }
        status.textContent = `${answered}/${QUESTION_COUNT} soru tamamlandı`;
      },
      (pos) => {
        const newIdx = pickUnusedIndex();
        if (newIdx === -1) {
          const note = el("div", { class: "similar-none" }, "Bu modül için havuzda başka soru kalmadı.");
          card.querySelector(".explain").appendChild(note);
          return;
        }
        usedIndices.add(newIdx);
        activeIndices[pos] = newIdx;
        if (bar.children[pos].className === "done") {
          bar.children[pos].className = "";
          answered--;
          status.textContent = `${answered}/${QUESTION_COUNT} soru tamamlandı`;
        }
        mount(pos, card);
      }
    );
    if (replaceEl) replaceEl.replaceWith(card);
    else cardsWrap.appendChild(card);
  }

  for (let position = 0; position < QUESTION_COUNT; position++) mount(position);
}

function markVisited(moduleKey) {
  let v = [];
  try {
    v = JSON.parse(localStorage.getItem("khiz_visited")) || [];
  } catch {
    v = [];
  }
  if (!v.includes(moduleKey)) {
    v.push(moduleKey);
    localStorage.setItem("khiz_visited", JSON.stringify(v));
  }
}
function getVisited() {
  try {
    return JSON.parse(localStorage.getItem("khiz_visited")) || [];
  } catch {
    return [];
  }
}

function mountFooter() {
  const f = document.getElementById("footer-root");
  if (!f) return;
  f.innerHTML = "";
  f.appendChild(el("p", {}, "Kimya 11 · Enerji ve Tepkime Hızı — bağımlılıksız, çevrimdışı çalışan öğrenme uygulaması."));
}

function bindJournal() {
  /* modül sayfalarındaki "notlarım" kutuları localStorage'a otomatik yazılır */
  document.querySelectorAll("[data-journal]").forEach((node) => {
    const key = "khiz_journal_" + node.dataset.journal;
    node.value = localStorage.getItem(key) || "";
    node.addEventListener("input", () => localStorage.setItem(key, node.value));
  });
}
