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
      "Sodík 400 mg · Draslík 300 mg · Horčík 120 mg · Coconut water powder · Vitamín C (acerola) 80 mg · Vitamín B6 0,7 mg · Lyofilizované ovocie · AA blend 1 740 mg. Pracovné zloženie – finálne podľa výrobcu.",
    composition: {
      title: "Čo je v jednom sticku a prečo",
      intro: "Voda zostáva základom. Daily Hydrate k nej pridáva len to, čo má jasný dôvod – s presnou dávkou na každej zložke.",
      pillars: [
        { key: "Hydration", name: "Elektrolyty", feel: "Minerály, ktoré telo stráca potom a ktoré obyčajná voda nedoplní.",
          items: [
            { name: "Sodík", sub: "elementárny", dose: "400 mg",
              plain: "Pomáha telu vodu naozaj udržať, namiesto toho, aby ňou len „pretiekla“. Dávka je nastavená na bežný deň – nie na maratón, preto to nie je slaný športový nápoj." },
            { name: "Draslík", sub: "aj z kokosovej vody", dose: "300 mg",
              plain: "Parťák sodíka – spolu udržiavajú rovnováhu tekutín v tele. Časť pochádza priamo z kokosovej vody." },
            { name: "Horčík", sub: "elementárny", dose: "120 mg",
              plain: "Minerál, ktorý prispieva k zníženiu únavy a k normálnej funkcii svalov. V mnohých hydratačných produktoch chýba alebo je ho len symbolicky." }
          ] },
        { key: "Plant hydration", name: "Kokosová voda a ovocie", feel: "Skutočné suroviny namiesto aróm a farbív.",
          items: [
            { name: "Kokosová voda", sub: "prášok, Covico® alebo BIO", dose: "3 g",
              plain: "Prirodzený zdroj minerálov s jemnou chuťou. Nie je tam „pre etiketu“ – 3 g je skutočné množstvo, nie pár miligramov." },
            { name: "Lyofilizované ovocie", sub: "šetrne vysušené mrazom", dose: "250–500 mg",
              plain: "Ovocie, z ktorého sa pri nízkej teplote odstránila voda. Zostane mu chuť aj prirodzená farba – preto nápoj chutí ako ovocie, nie ako chémia." }
          ] },
        { key: "Amino support", name: "Aminokyseliny", feel: "Naša tajná prísada – inšpirovaná najnovším výskumom hydratácie.",
          items: [
            { name: "AA blend", sub: "5 aminokyselín: kys. asparágová, serín, valín, treonín, tyrozín", dose: "1 740 mg",
              plain: "Niektoré aminokyseliny sa v čreve vstrebávajú spolu so sodíkom – a voda ich nasleduje. Dávka je zámerne nízka: štúdie ukázali, že pri hydratácii viac neznamená lepšie. Nie sú to športové BCAA, ide o šetrný, každodenný blend." }
          ] },
        { key: "Daily nutrition", name: "Vitamíny", feel: "Malá denná podpora navyše.",
          items: [
            { name: "Vitamín C", sub: "z aceroly", dose: "80 mg",
              plain: "Acerola je tropická čerešňa s vysokým obsahom vitamínu C. Prispieva k zníženiu únavy a k ochrane buniek pred oxidačným stresom." },
            { name: "Vitamín B6", sub: "", dose: "0,7 mg",
              plain: "Prispieva k normálnemu energetickému metabolizmu a k zníženiu únavy – presne do dní, keď ťa toho čaká veľa." }
          ] }
      ],
      not: ["Bez kofeínu", "Bez pridaného cukru", "Nie je to športový iontový nápoj", "Žiadne zbytočné prísady"],
      note: "Pracovné zloženie – finálne dávky podľa výrobcu. Doplnok výživy nie je náhradou pestrej stravy a zdravého životného štýlu."
    }
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
    image: "assets/img/more-strawberry.jpg",
    gallery: ["assets/img/more-strawberry.jpg", "assets/img/more-red.jpg"],
    available: true,
    tiers: true,
    description:
      "Pre ženy naprieč vekom, ktoré chcú prežívať intimitu naplno – nielen o chuti, ale o celom zážitku od túžby až po spokojnosť.",
    bullets: ["Túžba", "Vzrušenie", "Prirodzená lubrikácia", "Spokojnosť", "Nálada a uvoľnenie"],
    usage: "2 kapsuly denne. Balenie na 30 dní.",
    ingredients: "Shatavari 200–300 mg · Ashwagandha 200–250 mg · Rhodiola rosea 200–300 mg · L-citrulín 250 mg · L-arginín 250 mg · Senovka grécka Libifem® 600 mg. Pracovné zloženie – finálne dávky podľa výrobcu.",
    composition: {
      title: "Čo je vo vnútri a prečo",
      intro: "Ženská chuť nie je len o hormónoch. Ovplyvňuje ju stres, únava, nálada aj prekrvenie. Preto More and More pracuje vo viacerých vrstvách naraz.",
      pillars: [
        { key: "Mood", name: "Hlava a stres", feel: "Keď je hlava plná povinností, na chuť nezostane miesto.",
          items: [
            { name: "Ashwagandha", sub: "extrakt z koreňa", dose: "200–250 mg",
              plain: "Adaptogén – bylina, ktorá pomáha telu lepšie zvládať stres. V štúdiách so ženami sa skúmala práve v kombinácii so Shatavari." },
            { name: "Rhodiola rosea", sub: "rozchodnica ružová", dose: "200–300 mg",
              plain: "Bylina zo severských hôr, tradične používaná pri únave a vyčerpaní. Keď máš viac energie, máš viac chuti aj na seba." }
          ] },
        { key: "Desire", name: "Túžba", feel: "Prirodzená chuť, ktorá sa vracia postupne.",
          items: [
            { name: "Shatavari", sub: "extrakt z koreňa, „kráľovná ženských bylín“", dose: "200–300 mg",
              plain: "V ajurvéde sa ženám odporúča celé stáročia. Novšie štúdie u žien ju skúmali v súvislosti so sexuálnou pohodou, náladou aj únavou." },
            { name: "Senovka grécka", sub: "Libifem® – patentovaný extrakt zo semien", dose: "600 mg",
              plain: "Extrakt, ktorý bol skúmaný u zdravých žien v súvislosti s túžbou a vzrušením. Patentovaná forma znamená overenú kvalitu a stálu dávku v každej kapsule." }
          ] },
        { key: "Blood flow", name: "Prekrvenie", feel: "Telo, ktoré reaguje.",
          items: [
            { name: "L-citrulín + L-arginín", sub: "aminokyseliny", dose: "250 + 250 mg",
              plain: "Telo z nich vyrába oxid dusnatý – molekulu, ktorá pomáha cievam uvoľniť sa. Lepšie prekrvenie je jedným z dôvodov, prečo sa tieto aminokyseliny skúmajú pri ženskej sexuálnej pohode." }
          ] }
      ],
      not: ["Nie je to liek", "Nie je to „tabletka na jednu noc“", "Účinok sa buduje týždňami"],
      note: "Pracovné zloženie – finálne dávky podľa výrobcu. Nevhodné počas tehotenstva, pri snažení o otehotnenie a počas dojčenia. Ak užívaš lieky (napr. na štítnu žľazu alebo antidepresíva), poraď sa pred užívaním s lekárom alebo nás kontaktuj."
    }
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
    image: "assets/img/cycle-pink.jpg",
    gallery: ["assets/img/cycle-pink.jpg"],
    available: true,
    tiers: true,
    description:
      "Prémiová denná formula pre ženský cyklus. Botanické jadro z extraktu Vitex agnus-castus a ďumbiera, doplnené o nutričný základ.",
    bullets: ["Vitex agnus-castus – rovnováha cyklu", "Zázvor a harmanček – komfort počas menštruácie", "Šafran a damascénska ruža – nálada", "Horčík, vápnik, zinok a vitamíny B – nutričný základ"],
    usage: "4 kapsuly denne, v náročnejších dňoch 6 kapsúl.",
    ingredients: "Vitex agnus-castus 20 mg · Zázvor Ginfort® 133 mg · Šafran 25 mg · Harmanček 100 mg · Damascénska ruža 50–100 mg · Vápnik 400 mg · Horčík 120 mg · Zinok 8 mg · B1, B2, B6, folát, B12, D3, E, C. Pracovné zloženie (4 kapsuly) – finálne podľa výrobcu.",
    composition: {
      title: "Čo je vo vnútri a prečo",
      intro: "Cyklus nie je len pár dní v mesiaci. Cycle ťa podporuje počas celého mesiaca – bylinami s dlhou tradíciou a nutričným základom, ktorý telo potrebuje.",
      pillars: [
        { key: "Cycle balance", name: "Rovnováha cyklu", feel: "Pokojnejšie dni pred menštruáciou.",
          items: [
            { name: "Vitex agnus-castus", sub: "extrakt z plodov, drmek obyčajný", dose: "20 mg",
              plain: "Najznámejšia bylina pre ženský cyklus. Tradične sa používa na dni pred menštruáciou, keď sa telo aj nálada menia. Volíme extrakt s parametrami podobnými tým, ktoré sa skúmali v štúdiách." },
            { name: "Vitamín B6", sub: "aktívna forma P-5-P", dose: "2–5 mg",
              plain: "Prispieva k regulácii hormonálnej činnosti. Volíme aktívnu formu, ktorú telo nemusí ďalej premieňať." }
          ] },
        { key: "Comfort", name: "Komfort počas menštruácie", feel: "Ľahšie zvládnuté prvé dni.",
          items: [
            { name: "Zázvor", sub: "Ginfort® – koncentrovaný extrakt", dose: "133 mg",
              plain: "Zázvor, ktorý poznáš z čaju, ale v koncentrovanej forme. Pri zvýšenej dávke (6 kapsúl) dostaneš rovnaké množstvo, aké sa používalo v štúdii o menštruačnom komforte." },
            { name: "Harmanček", sub: "extrakt z kvetu", dose: "100 mg",
              plain: "Upokojujúca bylina našich babičiek – pomáha telu uvoľniť sa." }
          ] },
        { key: "Mood", name: "Nálada", feel: "Menej výkyvov, viac seba.",
          items: [
            { name: "Šafran", sub: "štandardizovaný extrakt z bliznov", dose: "25 mg",
              plain: "Najvzácnejšie korenie sveta. Jeho extrakt sa skúmal v súvislosti s náladou a pohodou žien. Stačí malá, presne štandardizovaná dávka." },
            { name: "Damascénska ruža", sub: "extrakt z kvetu", dose: "50–100 mg",
              plain: "Kvet s tisícročnou tradíciou v perzskom bylinkárstve. Dotvára jemnú, ženskú stránku receptúry." }
          ] },
        { key: "Nutrition", name: "Nutričný základ", feel: "To, čo telu počas cyklu často chýba.",
          items: [
            { name: "Horčík + vápnik", sub: "vápnik z vaječných škrupín OVOVITAL®", dose: "120 + 400 mg",
              plain: "Horčík prispieva k zníženiu únavy a k normálnej funkcii svalov, vápnik k normálnej svalovej činnosti. OVOVITAL® je prírodný vápnik s dobrou využiteľnosťou." },
            { name: "Zinok + vitamíny", sub: "zinok, B1, B2, folát, B12, D3, E, C", dose: "8 mg Zn",
              plain: "Nutričný základ v kvalitných, telu blízkych formách – napríklad metylfolát a metylkobalamín namiesto lacných syntetických foriem." }
          ] }
      ],
      not: ["Bez hormónov", "Nie je to antikoncepcia", "Nie je to liek"],
      note: "Pracovné zloženie – finálne dávky podľa výrobcu. Uvedené dávky sú pre 4 kapsuly denne, v náročnejších dňoch 6 kapsúl (1,5× viac). Nevhodné počas tehotenstva a dojčenia. Pri hormonálnej antikoncepcii alebo liečbe neplodnosti sa pred užívaním poraď s lekárom."
    }
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
    image: "assets/img/her-drive.jpg?v=2",
    gallery: ["assets/img/her-drive.jpg?v=2"],
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
    id: "digestive",
    name: "Have Your Cake",
    subtitle: "Femme Digestive Optimizer",
    line: "Ľahkosť po každom jedle",
    tagline: "Pre pohodlné trávenie bez nadúvania",
    pack: "60 kapsúl · 30 dní",
    price: 34.9,
    oldPrice: null,
    rating: 4.9,
    reviews: 12,
    badge: "Novinka",
    theme: "sand",
    image: "assets/img/have-your-cake.jpg",
    gallery: ["assets/img/have-your-cake.jpg"],
    available: true,
    tiers: true,
    description:
      "Poznáš ten pocit, keď si po obede musíš povoliť gombík? Nadúvanie, ťažoba a plnosť nie sú „normálna súčasť“ ženského dňa. Have Your Cake spája tráviace enzýmy, osvedčené byliny, kiwi a probiotikum – aby jedlo bolo radosť, nie záťaž.",
    bullets: [
      "Tráviace enzýmy – pomoc s bielkovinami, tukmi, škrobmi aj mliečnym cukrom",
      "Mäta, rasca, artičok a kurkuma – byliny na pohodlné trávenie",
      "Actazin® – patentovaný prášok zo zeleného kiwi pre pravidelnosť",
      "Probiotikum Bacillus subtilis, ktoré prežije cestu žalúdkom",
      "Bez preháňadiel, 2 kapsuly denne"
    ],
    usage: "2 kapsuly denne s hlavným jedlom. Balenie na 30 dní.",
    ingredients: "Tráviaci enzýmový komplex 90–250 mg · Artičok 150 mg · Mäta pieporná 100 mg · Rasca 75 mg · Kurkuma 75 mg · Actazin® zelené kiwi 600 mg · Bacillus subtilis (BS50® alebo DE111®) 1–2 mld. CFU. Pracovné zloženie – finálne podľa výrobcu.",
    composition: {
      title: "Čo je vo vnútri a prečo",
      intro: "Trávenie je reťaz: najprv sa jedlo musí rozložiť, potom pohodlne prejsť a nakoniec odísť. Have Your Cake pomáha v každom kroku – jemne a bez preháňadiel.",
      pillars: [
        { key: "Digest", name: "Rozloženie jedla", feel: "Aby sa jedlo nezdržiavalo v žalúdku.",
          items: [
            { name: "Tráviace enzýmy", sub: "proteáza, amyláza, lipáza, laktáza, celuláza, α-galaktozidáza", dose: "90–250 mg",
              plain: "Enzýmy sú „nožničky“, ktoré jedlo strihajú na malé kúsky: proteáza bielkoviny, lipáza tuky, amyláza škroby a laktáza mliečny cukor. α-galaktozidáza pomáha so strukovinami a zeleninou, po ktorých vznikajú plyny." }
          ] },
        { key: "Bloating", name: "Menej nadúvania", feel: "Plochšie brucho aj po väčšom jedle.",
          items: [
            { name: "Mäta pieporná", sub: "extrakt z listov", dose: "100 mg",
              plain: "Bylina, ktorú poznáš z čaju po jedle. Tradične sa používa na upokojenie brucha a pri pocite nafúknutia." },
            { name: "Rasca", sub: "extrakt z plodov", dose: "75 mg",
              plain: "Babičky ju pridávali do kapusty a chleba nie náhodou – tradične pomáha telu zbaviť sa plynov." }
          ] },
        { key: "Lightness", name: "Ľahkosť po jedle", feel: "Žiadna ťažoba po mastnejšom obede.",
          items: [
            { name: "Artičok", sub: "extrakt z listov", dose: "150 mg",
              plain: "Tradične podporuje tvorbu žlče – tej, ktorá pomáha stráviť tuky. Preto sa po ňom siaha po ťažších jedlách." },
            { name: "Kurkuma", sub: "štandardizovaný extrakt, bez piperínu", dose: "75 mg",
              plain: "Žlté korenie, ktoré dopĺňa artičok pri trávení. Zámerne bez piperínu (čierneho korenia), ktorý niektorým ženám dráždi žalúdok." }
          ] },
        { key: "Regularity", name: "Pravidelnosť", feel: "Brucho, ktoré funguje ako hodinky.",
          items: [
            { name: "Actazin®", sub: "patentovaný prášok zo zeleného kiwi", dose: "600 mg",
              plain: "Zelené kiwi obsahuje vlákninu a vlastný enzým aktinidín. Actazin® sa skúmal pri občasnej zápche – funguje jemne, nie ako preháňadlo." },
            { name: "Bacillus subtilis", sub: "probiotikum BS50® alebo DE111®", dose: "1–2 mld. CFU",
              plain: "Mnohé probiotiká žalúdočná kyselina zničí skôr, ako sa dostanú do čreva. Tento kmeň vytvára ochranný „obal“ (spóru), takže cestu žalúdkom prežije a dorazí tam, kde má." }
          ] }
      ],
      not: ["Bez preháňadiel", "Bez piperínu", "Nie je to liek"],
      note: "Pracovné zloženie – finálny probiotický kmeň a dávka enzýmov podľa výrobcu. Počas tehotenstva, dojčenia a pri užívaní liekov sa pred užívaním poraď s lekárom. Ak máš dlhodobé alebo silné tráviace ťažkosti, navštív lekára."
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
