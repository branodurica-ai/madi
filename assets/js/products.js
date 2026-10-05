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
    image: "assets/img/more-plum.jpg",
    gallery: ["assets/img/more-plum.jpg", "assets/img/more-dark.jpg", "assets/img/more-pink.jpg"],
    available: true,
    tiers: true,
    description:
      "Pre ženy naprieč vekom, ktoré chcú prežívať intimitu naplno – nielen o chuti, ale o celom zážitku od túžby až po spokojnosť.",
    bullets: ["Túžba", "Vzrušenie", "Prirodzená lubrikácia", "Spokojnosť", "Nálada a uvoľnenie"],
    usage: "2 kapsuly denne. Balenie na 30 dní.",
    ingredients: "Shatavari (extrakt z koreňa) · Ashwagandha (extrakt z koreňa) · Rhodiola rosea · L-citrulín 250 mg · L-arginín 250 mg · Senovka grécka / Libifem®. Pracovné zloženie – finálne dávky podľa výrobcu."
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
    image: "assets/img/cycle.jpg",
    gallery: ["assets/img/cycle.jpg"],
    available: true,
    tiers: true,
    description:
      "Prémiová denná formula pre ženský cyklus. Botanické jadro z extraktu Vitex agnus-castus a ďumbiera, doplnené o nutričný základ.",
    bullets: ["Extrakt z plodov Vitex agnus-castus", "Ďumbier", "Damascénska ruža", "Horčík"],
    usage: "4 kapsuly denne, v náročnejších dňoch 6 kapsúl.",
    ingredients: "Receptúra vo vývoji – finálne dávky doplníme."
  },
  {
    id: "her-drive-35",
    name: "Primetime",
    subtitle: "Woman 35+",
    line: "Cíť sa lepšie dnes",
    tagline: "Podpor to, ako chceš starnúť zajtra",
    pack: "Kapsuly · 30 dní",
    price: 44.9,
    oldPrice: null,
    rating: 4.9,
    reviews: 19,
    badge: "Novinka",
    theme: "plum",
    image: "assets/img/her-drive.jpg",
    gallery: ["assets/img/her-drive.jpg"],
    available: true,
    tiers: true,
    description:
      "Po 35-ke sa veci menia potichu: energia vydrží kratšie, chute sú silnejšie a regenerácia trvá dlhšie. Primetime nie je o tom, že starneš – je o tom, ako sa chceš cítiť dnes a o 10 rokov. Päť látok, štyri jasné úlohy, žiadne skryté zmesi a žiadne stimulanty.",
    bullets: [
      "Energia – Alpinia galanga, sviežosť bez kofeínu",
      "Kontrola chutí – OEA, prirodzený signál „som sýta“",
      "Komfort – PEA a HydroCurc® pre regeneráciu a pohodu",
      "Zdravé starnutie – L-ergotioneín na ochranu buniek",
      "Nie je to fat burner, stimulant ani hormonálna formula"
    ],
    usage: "3–4 kapsuly denne s jedlom, ideálne ráno. Účinky bylinných a funkčných zložiek sa budujú postupne – daj im aspoň 8 týždňov. Pracovné dávkovanie – finálne podľa výrobcu.",
    ingredients: "PEA 600 mg · OEA 250 mg · L-ergotioneín 5–10 mg · HydroCurc® 250–500 mg · Alpinia galanga 200–300 mg. Pracovné zloženie – finálne dávky podľa výrobcu.",
    composition: {
      title: "Čo je vo vnútri a prečo",
      intro: "Žiadna „proprietárna zmes“. Každá látka má presnú dávku a jednu jasnú úlohu – tu je, čo robí, povedané ľudsky.",
      pillars: [
        {
          key: "Energy", name: "Energia", feel: "Sviežejšia hlava cez deň – bez kofeínu a bez útlmu poobede.",
          items: [
            { name: "Alpinia galanga", sub: "extrakt z koreňa galangalu", dose: "200–300 mg",
              plain: "Príbuzný zázvoru, ktorý sa skúmal ako alternatíva ku káve. Pomáha cítiť sa bdelšie a menej unavene – ale bez nervozity a „prepadu“, ktorý poznáš po treťom espresse." }
          ]
        },
        {
          key: "Weight control", name: "Kontrola chutí", feel: "Menej večerného „niečo by som si dala“.",
          items: [
            { name: "OEA", sub: "oleoyletanolamid", dose: "250 mg",
              plain: "Tvoje telo si ho samo vyrába v čreve po jedle. Funguje ako prirodzený signál „som sýta“ – pomáha mozgu dostať správu, že energia už prišla. Nie je to stimulant ani spaľovač tukov, len podpora sýtosti a kontroly chutí." }
          ]
        },
        {
          key: "Comfort", name: "Komfort a regenerácia", feel: "Telo, ktoré sa po náročnom dni rýchlejšie vráti do pohody.",
          items: [
            { name: "PEA", sub: "palmitoyletanolamid", dose: "600 mg",
              plain: "Ďalšia látka, ktorú telo pozná – vlastná signálna molekula, ktorá pomáha udržať zdravú odpoveď tela na záťaž. Ak je deň náročný, PEA pomáha telu „stíšiť hlasitosť“ a vrátiť sa do rovnováhy." },
            { name: "HydroCurc®", sub: "kurkumín s lepšou vstrebateľnosťou", dose: "250–500 mg",
              plain: "Bežný kurkumín sa vo vode skoro nerozpustí, a tak z neho telo veľa nevyužije. HydroCurc® je patentovaná forma, ktorá sa rozptýli oveľa lepšie – kurkumín sa tak naozaj dostane tam, kde má pomáhať pri regenerácii." }
          ]
        },
        {
          key: "Age well", name: "Zdravé starnutie", feel: "Investícia, ktorú necítiš hneď – ale tvoje bunky áno.",
          items: [
            { name: "L-ergotioneín", sub: "z húb", dose: "5–10 mg",
              plain: "Telo si ho nevie vyrobiť, no má pre neho vlastný „vchod“ do buniek (transportér OCTN1) – akoby si ho výslovne pýtalo. Prispieva k ochrane buniek pred oxidačným stresom, ktorý s pribúdajúcimi rokmi pribúda tiež." }
          ]
        }
      ],
      not: ["Nie je to fat burner", "Žiadny kofeín ani stimulanty", "Bez hormónov", "Nie je to multivitamín"],
      note: "Pracovné zloženie a dávky – finálne podľa výrobcu. Doplnok výživy nie je náhradou pestrej stravy a zdravého životného štýlu."
    }
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
