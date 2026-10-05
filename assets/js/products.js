/* mādi – produkty.
   PRACOVNÉ NÁZVY A CENY: ceny nie sú finálne (podľa podkladov ešte nestanovené).
   Všetko sa mení len tu – web sa prispôsobí sám. */
window.MADI_PRODUCTS = [
  {
    id: "daily-hydrate",
    name: "Daily Hydrate",
    line: "Cheers, beautiful!",
    tagline: "Smart daily hydration – 1 stick do 500 ml vody",
    pack: "30 stickov · Strawberry Hibiscus",
    price: 29.9,
    oldPrice: null,
    rating: 4.9,
    reviews: 64,
    badge: "Novinka",
    theme: "day",
    image: "assets/img/hydrate-box.jpg",
    gallery: ["assets/img/hydrate-box.jpg", "assets/img/hydrate-bottle.jpg", "assets/img/hydrate-lifestyle.jpg"],
    available: true,
    tiers: true,
    description:
      "Každodenný hydratačný rituál pre ženy – do práce, na cesty aj do náročnejších dní. Voda zostáva základom, Daily Hydrate k nej pridáva presne definované minerály a starostlivo vybrané funkčné zložky.",
    bullets: [
      "Elektrolyty s transparentnými dávkami: 400 mg sodíka, 300 mg draslíka, 120 mg horčíka",
      "3 g prášku z kokosovej vody",
      "Vitamín C zo štandardizovanej aceroly a vitamín B6",
      "Skutočné lyofilizované ovocie",
      "Bez kofeínu, bez pridaného cukru"
    ],
    usage: "1 stick rozmiešaj v 500 ml vody. Primárne 1 dávka denne.",
    ingredients:
      "Sodík 400 mg · Draslík 300 mg · Horčík 120 mg · Coconut water powder · Vitamín C (acerola) 80 mg · Vitamín B6 · Lyofilizované ovocie · AA blend 1 740 mg. Pracovné zloženie – finálne podľa výrobcu."
  },
  {
    id: "more-and-more",
    name: "More and More",
    line: "Feel good. Want more.",
    tagline: "Female sexual wellness",
    pack: "60 kapsúl",
    price: 39.9,
    oldPrice: null,
    rating: 4.8,
    reviews: 41,
    badge: "Bestseller",
    theme: "night",
    image: "assets/img/more-dark.jpg",
    gallery: ["assets/img/more-dark.jpg", "assets/img/more-pink.jpg"],
    available: true,
    tiers: true,
    description:
      "Pre ženy naprieč vekom, ktoré chcú prežívať intimitu naplno – nielen o chuti, ale o celom zážitku od túžby až po spokojnosť.",
    bullets: ["Túžba", "Vzrušenie", "Prirodzená lubrikácia", "Spokojnosť", "Nálada a uvoľnenie"],
    usage: "2 kapsuly denne. Pracovné dávkovanie – finálne podľa výrobcu.",
    ingredients: "Zloženie doplníme po finalizácii receptúry."
  },
  {
    id: "cycle",
    name: "Cycle",
    line: "V každej fáze cyklu",
    tagline: "Daily women's cycle support",
    pack: "120 kapsúl · 30 dní",
    price: 34.9,
    oldPrice: null,
    rating: 4.9,
    reviews: 33,
    badge: null,
    theme: "rose",
    image: null,
    gallery: [],
    available: true,
    tiers: true,
    description:
      "Prémiová denná formula pre ženský cyklus. Botanické jadro z extraktu Vitex agnus-castus a ďumbiera, doplnené o nutričný základ.",
    bullets: ["Extrakt z plodov Vitex agnus-castus", "Ďumbier", "Damascénska ruža", "Horčík"],
    usage: "4 kapsuly denne, v náročnejších dňoch 6 kapsúl.",
    ingredients: "Receptúra vo vývoji – finálne dávky doplníme."
  },
  {
    id: "hydration-from-within",
    name: "Hydration from Within",
    line: "Hydratácia zvnútra",
    tagline: "Intímny komfort a hydratovaná pokožka",
    pack: "Pripravujeme",
    price: 36.9,
    oldPrice: null,
    rating: null,
    reviews: 0,
    badge: "Pripravujeme",
    theme: "sand",
    image: null,
    gallery: [],
    available: false,
    tiers: false,
    description:
      "Dlhodobá každodenná hydratácia zvnútra – pre intímny komfort aj pokožku. Hlavný smer: rakytníkový olej.",
    bullets: ["Rakytník", "Intímny komfort", "Hydratácia pokožky"],
    usage: "Doplníme.",
    ingredients: "Doplníme."
  },
  {
    id: "flasa-500",
    name: "Fľaša mādi 500 ml",
    line: "Na tvoj denný stick",
    tagline: "S ryskami na pitný režim",
    pack: "500 ml · bez BPA",
    price: 24.9,
    oldPrice: null,
    rating: 4.9,
    reviews: 18,
    badge: null,
    theme: "day",
    image: "assets/img/hydrate-bottle.jpg",
    gallery: ["assets/img/hydrate-bottle.jpg", "assets/img/hydrate-lifestyle.jpg"],
    available: true,
    tiers: false,
    description: "Ľahká fľaša s ryskami, otváranie jednou rukou. Presne na 1 stick Daily Hydrate.",
    bullets: ["Bez BPA", "Otváranie jednou rukou", "Ryska po 100 ml"],
    usage: "Naplň vodou a pridaj 1 stick Daily Hydrate.",
    ingredients: "—"
  },
  {
    id: "set-hydrate",
    name: "Set Hydrate + fľaša",
    line: "Začni rituál",
    tagline: "Daily Hydrate 30 stickov + fľaša 500 ml",
    pack: "Set",
    price: 47.9,
    oldPrice: 54.8,
    rating: 5.0,
    reviews: 27,
    badge: "Výhodný set",
    theme: "day",
    image: "assets/img/hydrate-lifestyle.jpg",
    gallery: ["assets/img/hydrate-lifestyle.jpg", "assets/img/hydrate-box.jpg", "assets/img/hydrate-bottle.jpg"],
    available: true,
    tiers: false,
    description: "Všetko na začiatok denného hydratačného rituálu v jednom balení.",
    bullets: ["Daily Hydrate – 30 stickov", "Fľaša mādi 500 ml", "Doprava zadarmo"],
    usage: "Podľa návodu Daily Hydrate.",
    ingredients: "Pozri Daily Hydrate."
  }
];

/* Množstevné balíčky (na detaile produktu) */
window.MADI_TIERS = [
  { qty: 1, label: "1 balenie", note: "na 1 mesiac", discount: 0 },
  { qty: 3, label: "3 balenia", note: "na 3 mesiace", discount: 0.2, popular: true },
  { qty: 6, label: "6 balení", note: "na 6 mesiacov", discount: 0.3 }
];
window.MADI_SUBSCRIBE_DISCOUNT = 0.1;
window.MADI_FREE_SHIPPING = 50;
