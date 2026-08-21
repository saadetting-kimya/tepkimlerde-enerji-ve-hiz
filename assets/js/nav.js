/* ============================================================
   nav.js — paylaşılan üst menü + "sonraki modül" geçişi
   ============================================================ */

const LINKS = [
  { key: "m1", href: "moduller/01-enerji-degisimi.html", title: "Enerji Değişimi", short: "1. Enerji Değişimi" },
  { key: "m2", href: "moduller/02-enerji-kaynagi.html", title: "Enerji Kaynağı Olma Potansiyeli", short: "2. Enerji Kaynağı" },
  { key: "m3", href: "moduller/03-bag-enerjisi.html", title: "Bağ Enerjisiyle Tepkime Entalpisi", short: "3. Bağ Enerjisi" },
  { key: "m4", href: "moduller/04-olusum-entalpisi.html", title: "Standart Oluşum Entalpisi", short: "4. Oluşum Entalpisi" },
  { key: "m5", href: "moduller/05-carpisma-teorisi.html", title: "Tepkimenin Gerçekleşme Şartları", short: "5. Çarpışma Teorisi" },
  { key: "m6", href: "moduller/06-tepkime-hizi-hesaplama.html", title: "Ortalama Tepkime Hızının Hesaplanması", short: "6. Hız Hesaplama" },
  { key: "m7", href: "moduller/07-hiza-etki-eden-faktorler.html", title: "Tepkime Hızına Etki Eden Faktörler", short: "7. Etki Eden Faktörler" },
  { key: "m8", href: "moduller/08-hiz-denklemi.html", title: "Kimyasal Tepkimelerin Hız Denklemi", short: "8. Hız Denklemi" },
];

function el2(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else node.setAttribute(k, v);
  }
  for (const c of [].concat(children)) {
    if (c == null) continue;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  }
  return node;
}

function rootPrefix() {
  return location.pathname.includes("/moduller/") ? "../" : "";
}

function mountNav(activeKey) {
  const root = document.getElementById("nav-root");
  if (!root) return;
  const visited = typeof getVisited === "function" ? getVisited() : [];
  const prefix = rootPrefix();

  const bar = el2("div", { class: "topbar" });
  const inner = el2("div", { class: "topbar-inner" });
  inner.appendChild(el2("a", { href: prefix + "index.html", class: "topbar-brand" }, ["Kimya 11 · ", el2("span", {}, "Enerji ve Hız")]));

  const linksWrap = el2("div", { class: "topbar-links" });
  LINKS.forEach((l) => {
    const classes = ["a" + (l.key === activeKey ? " active" : "") + (visited.includes(l.key) ? " visited" : "")].join("");
    linksWrap.appendChild(el2("a", { href: prefix + l.href, class: classes }, l.short));
  });
  inner.appendChild(linksWrap);
  inner.appendChild(el2("a", { href: prefix + "defter/index.html", class: "btn" }, "📘 Ders Defteri"));
  inner.appendChild(el2("a", { href: prefix + "soru-bankasi.html", class: "btn" }, "📚 Soru Bankası"));
  inner.appendChild(el2("a", { href: prefix + "yanlislarim.html", class: "btn" }, "🔁 Yanlışlarım"));

  bar.appendChild(inner);
  root.appendChild(bar);
}

function mountNextModule(activeKey) {
  const root = document.getElementById("next-module-root");
  if (!root) return;
  const idx = LINKS.findIndex((l) => l.key === activeKey);
  const next = LINKS[idx + 1];
  const wrap = el2("div", { class: "container", style: "padding:30px 20px;text-align:center" });
  if (next) {
    wrap.appendChild(
      el2("a", { href: next.href, class: "btn primary", style: "font-size:1rem;padding:14px 26px" }, `Sonraki Modül: ${next.title} →`)
    );
  } else {
    wrap.appendChild(el2("a", { href: rootPrefix() + "index.html", class: "btn primary", style: "font-size:1rem;padding:14px 26px" }, "🎉 Tüm modülleri tamamladın — Ana sayfaya dön"));
  }
  root.appendChild(wrap);
}
