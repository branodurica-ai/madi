/* mādi – spoločný skript: hlavička, pätička, košík, stierací los */
(function () {
  const P = window.MADI_PRODUCTS || [];
  const byId = (id) => P.find((p) => p.id === id);
  const eur = (n) => n.toFixed(2).replace(".", ",") + " €";
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  window.MADI = { byId, eur, store };

  /* ---------- packshot (pre produkty bez fotky) ---------- */
  window.MADI.media = function (p, cls) {
    if (p.image) return `<img src="${p.image}" alt="${p.name} – ${p.pack}" loading="lazy" ${cls ? `class="${cls}"` : ""}>`;
    return `<div class="packshot ${p.theme}" role="img" aria-label="${p.name} – ilustračný obal"><div class="jar"><span class="wm">mādi</span><span class="nm">${p.name}</span></div></div>`;
  };

  /* ---------- header + footer ---------- */
  const header = `
  <div class="announce">Doprava zadarmo pri nákupe nad <b>${window.MADI_FREE_SHIPPING} €</b> · Navrhnuté farmaceutkou</div>
  <header class="site-header">
    <div class="wrap">
      <a href="index.html" class="wordmark" aria-label="mādi – domov">mādi</a>
      <nav class="nav" id="nav" aria-label="Hlavné menu">
        <a href="index.html#produkty">Produkty</a>
        <a href="produkt.html?p=daily-hydrate">Daily Hydrate</a>
        <a href="o-nas.html">O nás</a>
        <a href="partneri.html">Pre partnerov</a>
        <a href="index.html#klub">mādi klub</a>
      </nav>
      <div style="display:flex;gap:8px;align-items:center">
        <button class="cart-btn" id="cartBtn" aria-label="Otvoriť košík">Košík <span class="cart-count" id="cartCount">0</span></button>
        <button class="menu-btn" id="menuBtn" aria-label="Menu" aria-expanded="false">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
        </button>
      </div>
    </div>
  </header>`;
  const footer = `
  <footer class="site-footer">
    <div class="wrap">
      <div class="footer-grid">
        <div><a href="index.html" class="wordmark">mādi</a><p style="margin:0;max-width:22em">Doplnky výživy pre ženy. Formulated by Pharmacist M.</p></div>
        <div><h4>Obchod</h4><ul><li><a href="produkt.html?p=daily-hydrate">Daily Hydrate</a></li><li><a href="produkt.html?p=more-and-more">More and More</a></li><li><a href="produkt.html?p=cycle">Cycle</a></li><li><a href="produkt.html?p=her-drive-35">Her Drive 35+</a></li><li><a href="produkt.html?p=flasa-500">Fľaša 500 ml</a></li></ul></div>
        <div><h4>Pomoc</h4><ul><li><a href="#">Doprava a platba</a></li><li><a href="#">Vrátenie tovaru</a></li><li><a href="faq.html">Časté otázky</a></li><li><a href="mailto:info@madi.sk">info@madi.sk</a></li><li><a href="o-nas.html">O nás</a></li><li><a href="partneri.html">Pre partnerov</a></li></ul></div>
        <div><h4>Právne</h4><ul><li><a href="#">Obchodné podmienky</a></li><li><a href="#">Ochrana osobných údajov</a></li><li><a href="#">Cookies</a></li></ul></div>
      </div>
      <div class="legal"><span>© ${new Date().getFullYear()} mādi. Výživový doplnok nie je náhradou pestrej stravy.</span><span>Pracovná verzia webu – ceny a texty nie sú finálne.</span></div>
    </div>
  </footer>`;
  const drawer = `
  <div class="drawer-backdrop" id="backdrop"></div>
  <aside class="drawer" id="drawer" aria-label="Košík" aria-hidden="true">
    <div class="drawer-head"><h2>Košík</h2><button class="icon-btn" id="closeCart" aria-label="Zavrieť košík">×</button></div>
    <div class="ship-bar" id="shipBar"></div>
    <div class="drawer-items" id="cartItems"></div>
    <div class="drawer-foot" id="cartFoot"></div>
  </aside>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer + drawer);

  const menuBtn = document.getElementById("menuBtn");
  menuBtn.addEventListener("click", () => {
    const nav = document.getElementById("nav");
    nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", nav.classList.contains("open"));
  });

  /* ---------- cart ---------- */
  let cart = store.get("madi_cart", []);
  const save = () => { store.set("madi_cart", cart); render(); };
  const key = (i) => i.id + "|" + i.tier + "|" + (i.sub ? 1 : 0);

  window.MADI.addToCart = function (item) {
    const existing = cart.find((c) => key(c) === key(item));
    if (existing) existing.count += item.count || 1;
    else cart.push({ ...item, count: item.count || 1 });
    save();
    toast(`Pridané do košíka: ${byId(item.id).name}`);
    openCart();
  };

  function lineTotal(i) { return i.unit * i.count; }
  function total() { return cart.reduce((s, i) => s + lineTotal(i), 0); }

  function render() {
    const count = cart.reduce((s, i) => s + i.count, 0);
    document.getElementById("cartCount").textContent = count;
    const t = total();
    const free = window.MADI_FREE_SHIPPING;
    const ship = document.getElementById("shipBar");
    ship.innerHTML = t >= free
      ? `Máš dopravu <b>zadarmo</b>.<div class="bar"><i style="width:100%"></i></div>`
      : `Do dopravy zadarmo ti chýba <b>${eur(free - t)}</b>.<div class="bar"><i style="width:${Math.min(100, (t / free) * 100)}%"></i></div>`;
    const items = document.getElementById("cartItems");
    const foot = document.getElementById("cartFoot");
    if (!cart.length) {
      items.innerHTML = `<div class="drawer-empty"><p>Košík je prázdny.</p><a class="btn btn-ink" href="index.html#produkty">Pozrieť produkty</a></div>`;
      foot.innerHTML = "";
      return;
    }
    items.innerHTML = cart.map((i, idx) => {
      const p = byId(i.id);
      return `<div class="ci">
        <div class="ci-img">${window.MADI.media(p)}</div>
        <div><div class="ci-name">${p.name}</div>
          <div class="ci-meta">${i.label}${i.sub ? " · predplatné" : ""}</div>
          <div class="qty"><button aria-label="Menej" data-dec="${idx}">−</button><span>${i.count}</span><button aria-label="Viac" data-inc="${idx}">+</button></div></div>
        <div class="ci-price">${eur(lineTotal(i))}<button class="ci-remove" data-rm="${idx}">Odstrániť</button></div>
      </div>`;
    }).join("");
    foot.innerHTML = `<div class="sum"><span>Spolu</span><span>${eur(t)}</span></div>
      <small>Vrátane DPH. Doprava sa vypočíta v pokladni.</small>
      <a class="btn btn-primary" href="pokladna.html">Pokračovať k pokladni</a>`;
  }

  document.getElementById("cartItems").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.inc) cart[b.dataset.inc].count++;
    if (b.dataset.dec) { const i = cart[b.dataset.dec]; i.count--; if (i.count < 1) cart.splice(b.dataset.dec, 1); }
    if (b.dataset.rm) cart.splice(b.dataset.rm, 1);
    save();
  });

  const drawerEl = document.getElementById("drawer");
  function openCart() { document.body.classList.add("cart-open"); drawerEl.setAttribute("aria-hidden", "false"); document.getElementById("closeCart").focus(); }
  function closeCart() { document.body.classList.remove("cart-open"); drawerEl.setAttribute("aria-hidden", "true"); }
  document.getElementById("cartBtn").addEventListener("click", openCart);
  document.getElementById("closeCart").addEventListener("click", closeCart);
  document.getElementById("backdrop").addEventListener("click", closeCart);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeCart(); closeScratch(); } });
  window.MADI.getCart = () => cart;
  window.MADI.clearCart = () => { cart = []; save(); };

  let toastT;
  function toast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2400);
  }
  window.MADI.toast = toast;
  render();

  /* ---------- stierací los (raz za návštevu) ---------- */
  const scratchHTML = `
  <div class="scratch-wrap" id="scratchWrap" role="dialog" aria-modal="true" aria-labelledby="scratchTitle">
    <div class="scratch" id="scratch">
      <button class="icon-btn x" id="scratchClose" aria-label="Zavrieť">×</button>
      <div class="wordmark" style="font-size:26px">mādi</div>
      <h2 id="scratchTitle">Zotri a vyhraj</h2>
      <p>Prstom alebo myšou zotri políčko a odhaľ svoju zľavu.</p>
      <div class="ticket"><div><div class="prize">−15 %</div><div class="code">KÓD: CHEERS15</div></div><canvas id="scratchCanvas"></canvas></div>
      <div class="after"><button class="btn btn-primary" id="scratchUse">Použiť zľavu</button></div>
    </div>
  </div>`;
  document.body.insertAdjacentHTML("beforeend", scratchHTML);
  const wrap = document.getElementById("scratchWrap");
  function closeScratch() { wrap.classList.remove("show"); store.set("madi_scratch_seen", true); }
  document.getElementById("scratchClose").addEventListener("click", closeScratch);
  document.getElementById("scratchUse").addEventListener("click", () => { store.set("madi_coupon", "CHEERS15"); closeScratch(); toast("Zľava CHEERS15 sa uplatní v pokladni"); });

  function initScratch() {
    const c = document.getElementById("scratchCanvas");
    const r = c.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    c.width = r.width * dpr; c.height = r.height * dpr;
    const ctx = c.getContext("2d");
    ctx.scale(dpr, dpr);
    const g = ctx.createLinearGradient(0, 0, r.width, r.height);
    g.addColorStop(0, "#D3195B"); g.addColorStop(1, "#F08DAE");
    ctx.fillStyle = g; ctx.fillRect(0, 0, r.width, r.height);
    ctx.fillStyle = "rgba(255,255,255,.9)"; ctx.font = "300 30px Jost, sans-serif"; ctx.textAlign = "center";
    ctx.fillText("mādi", r.width / 2, r.height / 2 - 4);
    ctx.font = "400 14px Jost, sans-serif"; ctx.fillText("zotri tu", r.width / 2, r.height / 2 + 22);
    ctx.globalCompositeOperation = "destination-out";
    let down = false, done = false;
    const scratchAt = (e) => {
      const b = c.getBoundingClientRect();
      const x = e.clientX - b.left, y = e.clientY - b.top;
      ctx.beginPath(); ctx.arc(x, y, 22, 0, Math.PI * 2); ctx.fill();
    };
    const check = () => {
      if (done) return;
      const d = ctx.getImageData(0, 0, c.width, c.height).data;
      let clear = 0; for (let i = 3; i < d.length; i += 64) if (d[i] === 0) clear++;
      if (clear / (d.length / 64) > 0.45) { done = true; c.style.transition = "opacity .4s"; c.style.opacity = 0; document.getElementById("scratch").classList.add("done"); }
    };
    c.addEventListener("pointerdown", (e) => { down = true; c.setPointerCapture(e.pointerId); scratchAt(e); });
    c.addEventListener("pointermove", (e) => { if (down) scratchAt(e); });
    c.addEventListener("pointerup", () => { down = false; check(); });
  }
  if (!store.get("madi_scratch_seen", false) && !/pokladna/.test(location.pathname)) {
    setTimeout(() => { wrap.classList.add("show"); initScratch(); }, 5000);
  }
})();
