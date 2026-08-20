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

const RENDERERS = {
  table: renderDataTable,
  chart: renderChart,
  compareChart: renderCompareLineChart,
  statements: renderStatementList,
  dialogue: renderDialogue,
  matchPairs: renderMatchTable,
  checklist: renderChecklist,
};

/* ============================================================
   Quiz mantığı
   ============================================================ */
function progressKey(moduleKey) {
  return `khiz_progress_${moduleKey}`;
}
function wrongKey() {
  return "khiz_wrong_list";
}

function loadProgress(moduleKey) {
  try {
    return JSON.parse(localStorage.getItem(progressKey(moduleKey))) || {};
  } catch {
    return {};
  }
}
function saveProgress(moduleKey, data) {
  localStorage.setItem(progressKey(moduleKey), JSON.stringify(data));
}

function recordWrong(moduleKey, q, idx) {
  let list = [];
  try {
    list = JSON.parse(localStorage.getItem(wrongKey())) || [];
  } catch {
    list = [];
  }
  list.push({ moduleKey, qid: idx, text: q.text, correct: q.correct });
  localStorage.setItem(wrongKey(), JSON.stringify(list.slice(-300)));
}

function buildQuestionCard(q, idx, moduleKey, onAnswered) {
  const card = el("div", { class: "qcard", id: `q-${idx}` });
  const diffTag = el("span", { class: `tag ${q.difficulty}` }, q.difficulty === "kolay" ? "Kolay" : q.difficulty === "orta" ? "Orta" : "Zor");
  card.appendChild(el("div", { class: "qcard-head" }, [el("span", { class: "qno" }, `Soru ${idx + 1}`), diffTag]));

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
      if (!wasCorrect) recordWrong(moduleKey, q, idx);
      onAnswered(idx, wasCorrect);
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
  const progress = loadProgress(moduleKey);
  let answered = Object.keys(progress).length;

  const bar = el("div", { class: "progress-mini" });
  questions.forEach((_, i) => bar.appendChild(el("i", { class: progress[i] != null ? "done" : "" })));
  host.appendChild(bar);
  const status = el("p", { style: "color:var(--ink-soft);font-size:.9rem" }, `${answered}/${questions.length} soru tamamlandı`);
  host.appendChild(status);

  questions.forEach((q, idx) => {
    const card = buildQuestionCard(q, idx, moduleKey, (i, wasCorrect) => {
      progress[i] = wasCorrect ? "correct" : "wrong";
      saveProgress(moduleKey, progress);
      const bars = bar.children;
      bars[i].className = "done";
      answered = Object.keys(progress).length;
      status.textContent = `${answered}/${questions.length} soru tamamlandı`;
    });
    if (progress[idx] != null) {
      // önceden cevaplanmışsa kilitli göster
      const optsDiv = card.querySelector(".options");
      [...optsDiv.children].forEach((c, i) => {
        c.dataset.locked = "1";
        c.classList.add("disabled");
        if (i === q.correct) c.classList.add("correct");
      });
      card.querySelector(".explain").classList.add("show");
    }
    host.appendChild(card);
  });
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
