/* Nákupný box – použitý na úvode (Daily Hydrate) aj na detaile produktu */
window.MADI_BUYBOX = function (el, id, isPage) {
  const { byId, eur, media } = window.MADI;
  const p = byId(id);
  if (!p) { el.innerHTML = `<p>Produkt sa nenašiel. <a href="index.html#produkty">Späť na produkty</a></p>`; return; }
  const tiers = p.tiers ? window.MADI_TIERS : [{ qty: 1, label: "1 kus", note: p.pack, discount: 0 }];
  const subD = window.MADI_SUBSCRIBE_DISCOUNT;
  let sub = false, tierIdx = p.tiers ? 1 : 0, imgIdx = 0;
  const gallery = p.gallery.length ? p.gallery : [null];
  const H = isPage ? "h1" : "h2";

  function unitPrice(t) { return +(p.price * (1 - t.discount) * (sub ? 1 - subD : 1)).toFixed(2); }

  function draw() {
    const g = gallery[imgIdx];
    el.innerHTML = `
    <div class="buy">
      <div>
        <div class="gallery-main">${g ? `<img src="${g}" alt="${p.name}">` : media(p)}</div>
        ${gallery.length > 1 ? `<div class="thumbs">${gallery.map((s, i) => `<button aria-label="Fotka ${i + 1}" aria-current="${i === imgIdx}" data-img="${i}"><img src="${s}" alt=""></button>`).join("")}</div>` : ""}
      </div>
      <div class="buy-info">
        <p class="line">${p.line}</p>
        <${H}>${p.name}</${H}>${p.subtitle ? `<p class="subtitle">${p.subtitle}</p>` : ""}
        <div class="stars">${p.rating ? `<b>★★★★★</b> ${p.rating.toFixed(1)} · ${p.reviews} hodnotení` : "Novinka v príprave"}</div>
        <p class="desc">${p.description}</p>
        ${p.available ? `
          ${p.tiers ? `<div class="mode" role="group" aria-label="Spôsob nákupu">
            <button type="button" aria-pressed="${!sub}" data-sub="0">Jednorazový nákup</button>
            <button type="button" aria-pressed="${sub}" data-sub="1">Predplatné −${Math.round(subD * 100)} %</button>
          </div>` : ""}
          <fieldset class="tiers" style="border:0;padding:0;margin:${p.tiers ? 0 : "20px 0 0"}">
            <legend class="sr">Veľkosť balenia</legend>
            ${tiers.map((t, i) => {
              const u = unitPrice(t);
              return `<label class="tier">
                ${t.popular ? `<span class="pop">Najobľúbenejšie</span>` : ""}
                <input type="radio" name="tier-${p.id}" value="${i}" ${i === tierIdx ? "checked" : ""}>
                <span><span class="t-label">${t.label}</span><br><span class="t-note">${t.note}${t.discount ? ` · ušetríš ${Math.round(t.discount * 100)} %` : ""}</span></span>
                <span class="t-price"><b>${eur(u)}</b>${t.qty > 1 ? `<small>/ ks · spolu ${eur(u * t.qty)}</small>` : ""}${(t.discount || sub) ? `<small><s>${eur(p.price)}</s></small>` : ""}</span>
              </label>`;
            }).join("")}
          </fieldset>
          <div class="add-row"><button class="btn btn-primary" id="add-${p.id}">Pridať do košíka · ${eur(unitPrice(tiers[tierIdx]) * tiers[tierIdx].qty)}</button></div>
          <p class="ship-note">${sub ? "Predplatné môžeš kedykoľvek zrušiť alebo posunúť. " : ""}Doprava zadarmo nad ${window.MADI_FREE_SHIPPING} €. Odosielame do 2 pracovných dní.</p>
        ` : `
          <div class="notice">Tento produkt pripravujeme. Nechaj nám e-mail a dáme ti vedieť ako prvej.</div>
          <form class="nl-form" style="margin:16px 0 0;max-width:none" id="wait-${p.id}"><label class="sr" for="we-${p.id}">E-mail</label><input id="we-${p.id}" type="email" placeholder="tvoj@email.sk" required style="border:1px solid var(--line)"><button class="btn btn-ink" type="submit">Dať mi vedieť</button></form>
          <p class="ship-note" id="wm-${p.id}" role="status"></p>
        `}
        <div class="facts">
          <details ${isPage ? "open" : ""}><summary>Prečo ${p.name}</summary><ul>${p.bullets.map((b) => `<li>${b}</li>`).join("")}</ul></details>
          <details><summary>Ako používať</summary><p>${p.usage}</p></details>
          <details><summary>Zloženie</summary><p>${p.ingredients}</p></details>
        </div>
        ${!isPage ? `<p style="margin-top:20px"><a class="link-more" href="produkt.html?p=${p.id}">Detail produktu</a></p>` : ""}
      </div>
    </div>`;
  }

  el.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    if (b.dataset.sub !== undefined) { sub = b.dataset.sub === "1"; draw(); }
    if (b.dataset.img !== undefined) { imgIdx = +b.dataset.img; draw(); }
    if (b.id === "add-" + p.id) {
      const t = tiers[tierIdx];
      window.MADI.addToCart({ id: p.id, tier: tierIdx, sub, unit: +(unitPrice(t) * t.qty).toFixed(2), label: t.label, count: 1 });
    }
  });
  el.addEventListener("change", (e) => {
    if (e.target.name === "tier-" + p.id) { tierIdx = +e.target.value; draw(); }
  });
  el.addEventListener("submit", (e) => {
    if (e.target.id !== "wait-" + p.id) return;
    e.preventDefault();
    const v = document.getElementById("we-" + p.id).value.trim();
    document.getElementById("wm-" + p.id).textContent = /^\S+@\S+\.\S+$/.test(v) ? "Hotovo, ozveme sa ti hneď, ako bude produkt dostupný." : "Zadaj e-mail v tvare meno@domena.sk.";
  });
  draw();
};
