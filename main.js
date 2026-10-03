/* ==================================================
        AL KARRAM KEBAB - MONTILLA (CÓRDOBA)
        MAIN JAVASCRIPT - ONLINE ORDERING SYSTEM
================================================== */

/* ==========================================
            CENTRAL MENU DATA
========================================== */
const MENU_DATA = [
    // ------------------------------------
    // 1. KEBAB
    // ------------------------------------
    {
        id: "durum-kebab",
        name: "Durum Kebab",
        category: "kebab",
        categoryName: "Kebab",
        description: "Pollo, Ternera, Mixto o Falafel. Rollo de pan fino relleno de carne selecta, ensalada y salsas.",
        price: 5.00,
        image: "assets/images/durum.png",
        badge: "Popular",
        variantLabel: "Tipo de carne / relleno",
        variants: [
            { name: "Pollo", priceDiff: 0 },
            { name: "Ternera", priceDiff: 0 },
            { name: "Mixto", priceDiff: 0 },
            { name: "Falafel", priceDiff: 0 }
        ],
        supportedExtras: ["solo-carne", "sin-lechuga", "extra-queso", "extra-salsa"]
    },
    {
        id: "doner-pita",
        name: "Doner Pita",
        category: "kebab",
        categoryName: "Kebab",
        description: "Pollo, Ternera, Mixto o Falafel. Pan de pita tradicional relleno de carne crujiente y vegetales frescos.",
        price: 4.50,
        image: "assets/images/pita.png",
        variantLabel: "Tipo de carne / relleno",
        variants: [
            { name: "Pollo", priceDiff: 0 },
            { name: "Ternera", priceDiff: 0 },
            { name: "Mixto", priceDiff: 0 },
            { name: "Falafel", priceDiff: 0 }
        ],
        supportedExtras: ["solo-carne", "sin-lechuga", "extra-queso", "extra-salsa"]
    },
    {
        id: "pizza-turca",
        name: "Pizza Turca",
        category: "kebab",
        categoryName: "Kebab",
        description: "Pollo, Ternera, Mixto o Falafel. Base crujiente horneada con especias tradicionales, carne kebab y queso.",
        price: 6.50,
        image: "assets/images/pizza.png",
        variantLabel: "Tipo de carne / relleno",
        variants: [
            { name: "Pollo", priceDiff: 0 },
            { name: "Ternera", priceDiff: 0 },
            { name: "Mixto", priceDiff: 0 },
            { name: "Falafel", priceDiff: 0 }
        ],
        supportedExtras: ["solo-carne", "extra-queso", "extra-salsa"]
    },
    {
        id: "box-kebab",
        name: "Box Kebab",
        category: "kebab",
        categoryName: "Kebab",
        description: "Pollo, Ternera o Mixto con patatas fritas crujientes y salsas en caja para llevar.",
        price: 4.00,
        image: "assets/images/durum.png",
        variantLabel: "Tamaño",
        variants: [
            { name: "Pequeña", price: 4.00 },
            { name: "Mediana", price: 5.00 },
            { name: "Grande", price: 8.00 }
        ],
        meatOptionLabel: "Tipo de carne",
        meatOptions: ["Pollo", "Ternera", "Mixto"],
        supportedExtras: ["solo-carne", "extra-queso", "extra-salsa"]
    },
    {
        id: "french-taco-kebab",
        name: "French-Taco Kebab",
        category: "kebab",
        categoryName: "Kebab",
        description: "Pollo, Ternera, Mixto o Falafel. Taco prensado a la plancha con carne, patatas y salsa fundida.",
        price: 6.00,
        image: "assets/images/durum.png",
        variantLabel: "Tipo de carne / relleno",
        variants: [
            { name: "Pollo", priceDiff: 0 },
            { name: "Ternera", priceDiff: 0 },
            { name: "Mixto", priceDiff: 0 },
            { name: "Falafel", priceDiff: 0 }
        ],
        supportedExtras: ["solo-carne", "extra-queso", "extra-salsa"]
    },

    // ------------------------------------
    // 2. PLATOS
    // ------------------------------------
    {
        id: "plato-al-horno",
        name: "Plato Al Horno",
        category: "platos",
        categoryName: "Platos",
        description: "Pollo, Ternera o Mixto. Carne kebab gratinada al horno con queso fundido y salsa.",
        price: 5.00,
        image: "assets/images/plato.png",
        variantLabel: "Tamaño",
        variants: [
            { name: "Pequeña", price: 5.00 },
            { name: "Mediana", price: 6.00 },
            { name: "Grande", price: 8.50 }
        ],
        meatOptionLabel: "Tipo de carne",
        meatOptions: ["Pollo", "Ternera", "Mixto"],
        supportedExtras: ["extra-queso", "extra-salsa"]
    },
    {
        id: "plato-kebab",
        name: "Plato Kebab",
        category: "platos",
        categoryName: "Platos",
        description: "Carne Kebab, ensalada fresca del huerto y crujientes patatas fritas con salsas.",
        price: 7.50,
        image: "assets/images/plato.png",
        meatOptionLabel: "Tipo de carne",
        meatOptions: ["Pollo", "Ternera", "Mixto"],
        supportedExtras: ["extra-arroz", "extra-queso", "extra-salsa"]
    },
    {
        id: "plato-solo-carne",
        name: "Plato Solo Carne",
        category: "platos",
        categoryName: "Platos",
        description: "Pollo, Ternera o Mixto. Ración generosa de 100% carne kebab asada al punto.",
        price: 5.00,
        image: "assets/images/plato.png",
        variantLabel: "Tamaño",
        variants: [
            { name: "Pequeña", price: 5.00 },
            { name: "Mediana", price: 7.00 },
            { name: "Grande", price: 9.00 }
        ],
        meatOptionLabel: "Tipo de carne",
        meatOptions: ["Pollo", "Ternera", "Mixto"],
        supportedExtras: ["extra-queso", "extra-salsa"]
    },
    {
        id: "plato-eurobousillo",
        name: "Plato Eurobousillo",
        category: "platos",
        categoryName: "Platos",
        description: "Carne Kebab con tomate natural, cebolla pochada y abundante queso fundido.",
        price: 7.50,
        image: "assets/images/plato.png",
        meatOptionLabel: "Tipo de carne",
        meatOptions: ["Pollo", "Ternera", "Mixto"],
        supportedExtras: ["extra-queso", "extra-salsa"]
    },
    {
        id: "carne-con-arroz",
        name: "Carne con Arroz",
        category: "platos",
        categoryName: "Platos",
        description: "Carne kebab tierna servida sobre una aromática base de arroz condimentado con especias.",
        price: 6.00,
        image: "assets/images/plato.png",
        variantLabel: "Tamaño",
        variants: [
            { name: "Pequeña", price: 6.00 },
            { name: "Grande", price: 7.00 }
        ],
        meatOptionLabel: "Tipo de carne",
        meatOptions: ["Pollo", "Ternera", "Mixto"],
        supportedExtras: ["extra-arroz", "extra-salsa"]
    },

    // ------------------------------------
    // 3. HAMBURGUESAS
    // ------------------------------------
    {
        id: "hamburguesa-pollo",
        name: "Hamburguesa de Pollo",
        category: "hamburguesas",
        categoryName: "Hamburguesas",
        description: "De Pollo. Deliciosa hamburguesa de pollo con pan tierno, lechuga fresca y salsas.",
        price: 4.00,
        image: "assets/images/burger.png",
        variantLabel: "Tamaño de hamburguesa",
        variants: [
            { name: "Normal", price: 4.00 },
            { name: "Doble", price: 6.00 }
        ],
        supportedExtras: ["extra-queso", "extra-salsa"]
    },

    // ------------------------------------
    // 4. POLLO
    // ------------------------------------
    {
        id: "tiras-pollo",
        name: "Tiras de Pollo",
        category: "pollo",
        categoryName: "Pollo",
        description: "5 Unidades de crujientes tiras de pechuga de pollo rebozadas en punto dorado.",
        price: 5.00,
        image: "assets/images/nuggets.png",
        supportedExtras: ["extra-salsa"]
    },
    {
        id: "alitas-pollo",
        name: "Alitas de Pollo",
        category: "pollo",
        categoryName: "Pollo",
        description: "5 Unidades de alitas de pollo asadas y adobadas con especias sabrosas.",
        price: 4.50,
        image: "assets/images/wings.png",
        supportedExtras: ["extra-salsa"]
    },
    {
        id: "nuggets-pollo",
        name: "Nuggets de Pollo",
        category: "pollo",
        categoryName: "Pollo",
        description: "5 Unidades crujientes de nuggets de pollo con tu salsa favorita.",
        price: 4.00,
        image: "assets/images/nuggets.png",
        supportedExtras: ["extra-salsa"]
    },

    // ------------------------------------
    // 5. PATATAS
    // ------------------------------------
    {
        id: "patatas-cheddar",
        name: "Patatas Cheddar",
        category: "patatas",
        categoryName: "Patatas",
        description: "Con Carne Kebab y bañadas en abundante salsa de queso cheddar fundido.",
        price: 5.00,
        image: "assets/images/cheddar-fries.png",
        badge: "Recomendado",
        variantLabel: "Tamaño",
        variants: [
            { name: "Pequeña", price: 5.00 },
            { name: "Grande", price: 6.00 }
        ],
        meatOptionLabel: "Tipo de carne",
        meatOptions: ["Pollo", "Ternera", "Mixto"],
        supportedExtras: ["extra-queso", "extra-salsa"]
    },
    {
        id: "patatas-fritas",
        name: "Patatas Fritas Normal",
        category: "patatas",
        categoryName: "Patatas",
        description: "Patatas fritas clásicas recién hechas, crujientes por fuera y tiernas por dentro.",
        price: 2.00,
        image: "assets/images/fries.png",
        variantLabel: "Tamaño",
        variants: [
            { name: "Pequeña", price: 2.00 },
            { name: "Mediana", price: 3.00 },
            { name: "Grande", price: 4.00 }
        ],
        supportedExtras: ["extra-salsa"]
    },
    {
        id: "patatas-deluxe",
        name: "Patatas Fritas Deluxe",
        category: "patatas",
        categoryName: "Patatas",
        description: "Patatas en gajo rústicas sazonadas con hierbas aromáticas y especias.",
        price: 3.00,
        image: "assets/images/fries.png",
        variantLabel: "Tamaño",
        variants: [
            { name: "Pequeña", price: 3.00 },
            { name: "Grande", price: 4.00 }
        ],
        supportedExtras: ["extra-salsa"]
    },
    {
        id: "aros-cebolla",
        name: "Aros de Cebolla",
        category: "patatas",
        categoryName: "Patatas",
        description: "Crujientes aros de cebolla rebozados y dorados.",
        price: 3.00,
        image: "assets/images/fries.png",
        variantLabel: "Cantidad",
        variants: [
            { name: "7 unidades", price: 3.00 },
            { name: "14 unidades", price: 5.50 }
        ],
        supportedExtras: ["extra-salsa"]
    },

    // ------------------------------------
    // 6. MENÚS / COMBOS
    // ------------------------------------
    {
        id: "menu-durum",
        name: "Menú Durum Kebab",
        category: "combos",
        categoryName: "Menús / Combos",
        description: "Pollo, Ternera, Mixto o Falafel + Patatas Fritas + Bebida 33cl.",
        price: 7.00,
        image: "assets/images/combo.png",
        variantLabel: "Tipo de carne / relleno",
        variants: [
            { name: "Pollo", priceDiff: 0 },
            { name: "Ternera", priceDiff: 0 },
            { name: "Mixto", priceDiff: 0 },
            { name: "Falafel", priceDiff: 0 }
        ],
        drinkOptionLabel: "Elige tu bebida (33cl)",
        drinkOptions: ["Coca-Cola", "Fanta Naranja", "Fanta Limón", "Nestea", "Sprite", "Agua"],
        supportedExtras: ["solo-carne", "sin-lechuga", "extra-queso", "extra-salsa"]
    },
    {
        id: "menu-doner",
        name: "Menú Doner Pita",
        category: "combos",
        categoryName: "Menús / Combos",
        description: "Pollo, Ternera, Mixto o Falafel + Patatas Fritas + Bebida 33cl.",
        price: 6.50,
        image: "assets/images/combo.png",
        variantLabel: "Tipo de carne / relleno",
        variants: [
            { name: "Pollo", priceDiff: 0 },
            { name: "Ternera", priceDiff: 0 },
            { name: "Mixto", priceDiff: 0 },
            { name: "Falafel", priceDiff: 0 }
        ],
        drinkOptionLabel: "Elige tu bebida (33cl)",
        drinkOptions: ["Coca-Cola", "Fanta Naranja", "Fanta Limón", "Nestea", "Sprite", "Agua"],
        supportedExtras: ["solo-carne", "sin-lechuga", "extra-queso", "extra-salsa"]
    },
    {
        id: "menu-pizza-turca",
        name: "Menú Pizza Turca",
        category: "combos",
        categoryName: "Menús / Combos",
        description: "Pollo, Ternera, Mixto o Falafel + Patatas Fritas + Bebida 33cl.",
        price: 9.00,
        image: "assets/images/combo.png",
        variantLabel: "Tipo de carne / relleno",
        variants: [
            { name: "Pollo", priceDiff: 0 },
            { name: "Ternera", priceDiff: 0 },
            { name: "Mixto", priceDiff: 0 },
            { name: "Falafel", priceDiff: 0 }
        ],
        drinkOptionLabel: "Elige tu bebida (33cl)",
        drinkOptions: ["Coca-Cola", "Fanta Naranja", "Fanta Limón", "Nestea", "Sprite", "Agua"],
        supportedExtras: ["solo-carne", "extra-queso", "extra-salsa"]
    },
    {
        id: "menu-hamburguesa",
        name: "Menú Hamburguesa",
        category: "combos",
        categoryName: "Menús / Combos",
        description: "De Pollo + Patatas Fritas + Bebida 33cl.",
        price: 6.00,
        image: "assets/images/combo.png",
        variantLabel: "Tamaño",
        variants: [
            { name: "Normal", price: 6.00 },
            { name: "Doble", price: 8.00 }
        ],
        drinkOptionLabel: "Elige tu bebida (33cl)",
        drinkOptions: ["Coca-Cola", "Fanta Naranja", "Fanta Limón", "Nestea", "Sprite", "Agua"],
        supportedExtras: ["extra-queso", "extra-salsa"]
    },
    {
        id: "menu-french-kebab",
        name: "Menú French Kebab",
        category: "combos",
        categoryName: "Menús / Combos",
        description: "French-Taco Kebab + Patatas Fritas + Bebida 33cl.",
        price: 8.00,
        image: "assets/images/combo.png",
        variantLabel: "Tipo de carne / relleno",
        variants: [
            { name: "Pollo", priceDiff: 0 },
            { name: "Ternera", priceDiff: 0 },
            { name: "Mixto", priceDiff: 0 },
            { name: "Falafel", priceDiff: 0 }
        ],
        drinkOptionLabel: "Elige tu bebida (33cl)",
        drinkOptions: ["Coca-Cola", "Fanta Naranja", "Fanta Limón", "Nestea", "Sprite", "Agua"],
        supportedExtras: ["solo-carne", "extra-queso", "extra-salsa"]
    },
    {
        id: "menu-plato-kebab",
        name: "Plato Kebab Menú",
        category: "combos",
        categoryName: "Menús / Combos",
        description: "Carne Kebab, Ensalada y Patatas + Bebida 33cl.",
        price: 9.00,
        image: "assets/images/combo.png",
        meatOptionLabel: "Tipo de carne",
        meatOptions: ["Pollo", "Ternera", "Mixto"],
        drinkOptionLabel: "Elige tu bebida (33cl)",
        drinkOptions: ["Coca-Cola", "Fanta Naranja", "Fanta Limón", "Nestea", "Sprite", "Agua"],
        supportedExtras: ["extra-arroz", "extra-queso", "extra-salsa"]
    },
    {
        id: "menu-tiras-pollo",
        name: "Menú Tiras de Pollo",
        category: "combos",
        categoryName: "Menús / Combos",
        description: "5 Tiras de Pollo + Patatas Fritas + Bebida 33cl.",
        price: 7.50,
        image: "assets/images/combo.png",
        drinkOptionLabel: "Elige tu bebida (33cl)",
        drinkOptions: ["Coca-Cola", "Fanta Naranja", "Fanta Limón", "Nestea", "Sprite", "Agua"],
        supportedExtras: ["extra-salsa"]
    },
    {
        id: "menu-alitas-pollo",
        name: "Menú Alitas de Pollo",
        category: "combos",
        categoryName: "Menús / Combos",
        description: "5 Alitas de Pollo + Patatas Fritas + Bebida 33cl.",
        price: 6.50,
        image: "assets/images/combo.png",
        drinkOptionLabel: "Elige tu bebida (33cl)",
        drinkOptions: ["Coca-Cola", "Fanta Naranja", "Fanta Limón", "Nestea", "Sprite", "Agua"],
        supportedExtras: ["extra-salsa"]
    },
    {
        id: "menu-nuggets-pollo",
        name: "Menú Nuggets de Pollo",
        category: "combos",
        categoryName: "Menús / Combos",
        description: "5 Nuggets de Pollo + Patatas Fritas + Bebida 33cl.",
        price: 4.00,
        image: "assets/images/combo.png",
        drinkOptionLabel: "Elige tu bebida (33cl)",
        drinkOptions: ["Coca-Cola", "Fanta Naranja", "Fanta Limón", "Nestea", "Sprite", "Agua"],
        supportedExtras: ["extra-salsa"]
    },
    {
        id: "menu-para-2",
        name: "Menú Para 2",
        category: "combos",
        categoryName: "Menús / Combos",
        description: "2 Durum o Pita + Patatas Normal Mediana + 2 Bebidas 33cl.",
        price: 13.00,
        image: "assets/images/combo.png",
        variantLabel: "Elección de platos principales",
        variants: [
            { name: "2 Durum Kebab", priceDiff: 0 },
            { name: "2 Doner Pita", priceDiff: 0 },
            { name: "1 Durum + 1 Doner Pita", priceDiff: 0 }
        ],
        drinkOptionLabel: "Selección de 2 bebidas",
        drinkOptions: ["2 Coca-Cola", "1 Coca-Cola + 1 Fanta", "2 Fanta Naranja", "2 Agua"],
        supportedExtras: ["extra-queso", "extra-salsa"]
    },
    {
        id: "menu-familiar",
        name: "Menú Familiar",
        category: "combos",
        categoryName: "Menús / Combos",
        description: "4 Durum o Pita + 2 Patatas Normal Grandes + 2 Bebidas de 2 Litros.",
        price: 25.50,
        image: "assets/images/combo.png",
        badge: "Recomendado",
        variantLabel: "Elección de platos principales",
        variants: [
            { name: "4 Durum Kebab", priceDiff: 0 },
            { name: "4 Doner Pita", priceDiff: 0 },
            { name: "2 Durum + 2 Doner Pita", priceDiff: 0 }
        ],
        drinkOptionLabel: "Selección de 2 bebidas (2L)",
        drinkOptions: ["2 Coca-Cola 2L", "1 Coca-Cola 2L + 1 Fanta 2L", "2 Fanta 2L"],
        supportedExtras: ["extra-queso", "extra-salsa"]
    },

    // ------------------------------------
    // 7. BEBIDAS
    // ------------------------------------
    {
        id: "refresco-33cl",
        name: "Refresco 33cl",
        category: "bebidas",
        categoryName: "Bebidas",
        description: "Lata fría de 33cl a elegir.",
        price: 1.50,
        image: "assets/images/drink.png",
        variantLabel: "Sabor",
        variants: [
            { name: "Coca-Cola", priceDiff: 0 },
            { name: "Fanta Naranja", priceDiff: 0 },
            { name: "Fanta Limón", priceDiff: 0 },
            { name: "Nestea", priceDiff: 0 },
            { name: "Sprite", priceDiff: 0 },
            { name: "Agua Mineral", priceDiff: 0 }
        ]
    },
    {
        id: "refresco-2l",
        name: "Refresco 2 Litros",
        category: "bebidas",
        categoryName: "Bebidas",
        description: "Botella familiar de 2 Litros bien fría para compartir.",
        price: 2.50,
        image: "assets/images/drink.png",
        variantLabel: "Sabor",
        variants: [
            { name: "Coca-Cola 2L", priceDiff: 0 },
            { name: "Fanta Naranja 2L", priceDiff: 0 }
        ]
    },

    // ------------------------------------
    // 8. EXTRAS (Carta individual)
    // ------------------------------------
    {
        id: "extra-solo-carne",
        name: "Solo Carne",
        category: "extras",
        categoryName: "Extras",
        description: "Porción adicional de carne kebab asada al punto.",
        price: 1.00,
        image: "assets/images/plato.png"
    },
    {
        id: "extra-sin-lechuga",
        name: "Sin Lechuga (+ Carne)",
        category: "extras",
        categoryName: "Extras",
        description: "Sustituye la lechuga por ración extra de carne.",
        price: 1.00,
        image: "assets/images/durum.png"
    },
    {
        id: "extra-arroz",
        name: "Extra Arroz",
        category: "extras",
        categoryName: "Extras",
        description: "Ración extra de arroz aromático con especias orientales.",
        price: 1.00,
        image: "assets/images/plato.png"
    },
    {
        id: "extra-queso",
        name: "Extra Queso",
        category: "extras",
        categoryName: "Extras",
        description: "Porción extra de queso fundido para tu plato.",
        price: 1.00,
        image: "assets/images/cheddar-fries.png"
    },
    {
        id: "extra-salsa",
        name: "Extra Salsa",
        category: "extras",
        categoryName: "Extras",
        description: "Tarrina de salsa casera adicional.",
        price: 0.50,
        image: "assets/images/cheddar-fries.png",
        variantLabel: "Tipo de salsa",
        variants: [
            { name: "Salsa Blanca / Yogur", priceDiff: 0 },
            { name: "Salsa Picante", priceDiff: 0 },
            { name: "Salsa Barbacoa", priceDiff: 0 }
        ]
    }
];

// Master extras definition for product customization modal
const MASTER_EXTRAS = [
    { id: "solo-carne", name: "Solo Carne", price: 1.00 },
    { id: "sin-lechuga", name: "Sin Lechuga", price: 1.00 },
    { id: "extra-arroz", name: "Extra Arroz", price: 1.00 },
    { id: "extra-queso", name: "Extra Queso", price: 1.00 },
    { id: "extra-salsa", name: "Extra Salsa", price: 0.50 }
];


/* ==========================================
            MULTILINGUAL STATE & SYSTEM
========================================== */
let currentLang = (typeof localStorage !== "undefined" && localStorage.getItem("alkarram_language")) || "es";
if (typeof window !== "undefined") {
    if (!window.LANGUAGES || !window.LANGUAGES[currentLang]) {
        currentLang = "es";
    }
    window.currentLang = currentLang;
}

const LANG_SHORT_CODES = {
    es: "ES",
    en: "EN",
    fr: "FR",
    de: "DE",
    it: "IT",
    pt: "PT",
    ptBR: "BR",
    ar: "عربي",
    tr: "TR",
    ru: "RU",
    zhCN: "中文",
    ja: "JA",
    ko: "KO",
    hi: "HI",
    ur: "اردو",
    romanUrdu: "RO"
};

function updateLanguageButtonLabels(lang) {
    const desktopLabel = document.getElementById("currentLangLabel");
    const mobileLabel = document.getElementById("currentLangLabelMobile");
    const langInfo = window.LANGUAGES && window.LANGUAGES[lang];

    if (desktopLabel && langInfo) {
        desktopLabel.textContent = langInfo.name;
    }
    if (mobileLabel) {
        mobileLabel.textContent = LANG_SHORT_CODES[lang] || (langInfo ? langInfo.name.substring(0, 3).toUpperCase() : "ES");
    }

    const langBtn = document.getElementById("langSelectorBtn");
    if (langBtn && langInfo) {
        langBtn.setAttribute("aria-label", `Selector de idioma (${langInfo.name})`);
    }
}

function initMultilingualSystem() {
    try {
        const saved = localStorage.getItem("alkarram_language");
        if (saved && window.LANGUAGES && window.LANGUAGES[saved]) {
            currentLang = saved;
        } else {
            currentLang = "es";
        }
    } catch (e) {
        currentLang = "es";
    }
    window.currentLang = currentLang;

    if (window.LANGUAGES && window.LANGUAGES[currentLang]) {
        document.documentElement.lang = window.LANGUAGES[currentLang].code || currentLang;
        document.documentElement.dir = window.LANGUAGES[currentLang].dir || "ltr";
    }

    const dropdown = document.getElementById("langDropdown");
    const langBtn = document.getElementById("langSelectorBtn");

    updateLanguageButtonLabels(currentLang);

    if (dropdown && window.LANGUAGES) {
        dropdown.innerHTML = Object.keys(window.LANGUAGES).map(code => {
            const l = window.LANGUAGES[code];
            const isActive = code === currentLang;
            return `
                <button type="button" class="lang-option-item ${isActive ? 'active' : ''}" data-lang="${code}" role="menuitem">
                    <span class="lang-option-flag">${l.flag}</span>
                    <span class="lang-option-name">${l.name}</span>
                    ${isActive ? '<i class="fa-solid fa-check lang-check"></i>' : ''}
                </button>
            `;
        }).join("");

        dropdown.querySelectorAll(".lang-option-item").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                const selected = btn.getAttribute("data-lang");
                if (selected && selected !== currentLang) {
                    setLanguage(selected);
                }
                closeLanguageDropdown();
            });
        });
    }

    if (langBtn) {
        langBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleLanguageDropdown();
        });
    }

    document.addEventListener("click", (e) => {
        const wrapper = document.getElementById("langSelectorWrapper");
        if (wrapper && !wrapper.contains(e.target)) {
            closeLanguageDropdown();
        }
    });

    applyTranslations();
}

function toggleLanguageDropdown() {
    const dropdown = document.getElementById("langDropdown");
    const btn = document.getElementById("langSelectorBtn");
    if (!dropdown || !btn) return;

    const isOpen = dropdown.classList.contains("show");
    if (isOpen) {
        closeLanguageDropdown();
    } else {
        dropdown.classList.add("show");
        btn.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
    }
}

function closeLanguageDropdown() {
    const dropdown = document.getElementById("langDropdown");
    const btn = document.getElementById("langSelectorBtn");
    if (dropdown) dropdown.classList.remove("show");
    if (btn) {
        btn.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
    }
}

function setLanguage(lang) {
    if (!window.LANGUAGES || !window.LANGUAGES[lang]) return;

    currentLang = lang;
    window.currentLang = lang;

    try {
        localStorage.setItem("alkarram_language", lang);
    } catch (e) {
        console.warn("No se pudo guardar el idioma en localStorage", e);
    }

    const langInfo = window.LANGUAGES[lang];
    document.documentElement.lang = langInfo.code || lang;
    document.documentElement.dir = langInfo.dir || "ltr";

    updateLanguageButtonLabels(lang);

    document.querySelectorAll(".lang-option-item").forEach(item => {
        const itemCode = item.getAttribute("data-lang");
        if (itemCode === lang) {
            item.classList.add("active");
            if (!item.querySelector(".lang-check")) {
                const check = document.createElement("i");
                check.className = "fa-solid fa-check lang-check";
                item.appendChild(check);
            }
        } else {
            item.classList.remove("active");
            const check = item.querySelector(".lang-check");
            if (check) check.remove();
        }
    });

    applyTranslations();
}

function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const val = window.t ? window.t(key) : null;
        if (val) {
            const attr = el.getAttribute("data-i18n-attr");
            if (attr) {
                el.setAttribute(attr, val);
            } else if (val.includes("<") && val.includes(">")) {
                el.innerHTML = val;
            } else {
                el.textContent = val;
            }
        }
    });

    renderProducts();
    renderAllCombosShowcase();
    updateLiveRestaurantStatus();
    updateCartUI();

    if (currentProduct && document.getElementById("productModalOverlay")?.classList.contains("open")) {
        retranslateProductModal();
    }
}

function retranslateProductModal() {
    if (!currentProduct) return;
    const catTag = document.getElementById("modalCategoryTag");
    const nameEl = document.getElementById("modalProductName");
    const descEl = document.getElementById("modalProductDesc");
    const variantLabel = document.getElementById("modalVariantLabel");
    const meatLabel = document.getElementById("modalMeatLabel");
    const drinkLabel = document.getElementById("modalDrinkLabel");

    const tInfo = (window.tProduct && window.tProduct(currentProduct.id)) || { name: currentProduct.name, desc: currentProduct.description };
    if (catTag && window.tCategory) catTag.innerText = window.tCategory(currentProduct.category);
    if (nameEl) nameEl.innerText = tInfo.name;
    if (descEl) descEl.innerText = tInfo.desc;

    if (variantLabel && currentProduct.variantLabel && window.tOption) {
        variantLabel.innerText = window.tOption(currentProduct.variantLabel);
    }
    if (meatLabel && currentProduct.meatOptionLabel && window.tOption) {
        meatLabel.innerText = window.tOption(currentProduct.meatOptionLabel);
    }
    if (drinkLabel && currentProduct.drinkOptionLabel && window.tOption) {
        drinkLabel.innerText = window.tOption(currentProduct.drinkOptionLabel);
    }

    if (currentProduct.variants && window.tOption) {
        const variantChips = document.getElementById("modalVariantChips");
        if (variantChips) {
            variantChips.querySelectorAll(".chip-btn").forEach((btn, idx) => {
                const v = currentProduct.variants[idx];
                if (v) {
                    const vPrice = v.price !== undefined ? formatEuro(v.price) : (v.priceDiff > 0 ? `+${formatEuro(v.priceDiff)}` : '');
                    btn.innerText = `${window.tOption(v.name)} ${vPrice ? `(${vPrice})` : ''}`.trim();
                }
            });
        }
    }

    if (currentProduct.meatOptions && window.tOption) {
        const meatChips = document.getElementById("modalMeatChips");
        if (meatChips) {
            meatChips.querySelectorAll(".chip-btn").forEach((btn, idx) => {
                const meat = currentProduct.meatOptions[idx];
                if (meat) btn.innerText = window.tOption(meat);
            });
        }
    }

    if (currentProduct.drinkOptions && window.tOption) {
        const drinkChips = document.getElementById("modalDrinkChips");
        if (drinkChips) {
            drinkChips.querySelectorAll(".chip-btn").forEach((btn, idx) => {
                const drink = currentProduct.drinkOptions[idx];
                if (drink) btn.innerText = window.tOption(drink);
            });
        }
    }

    if (currentProduct.supportedExtras && window.tOption) {
        const extrasList = document.getElementById("modalExtrasList");
        if (extrasList) {
            extrasList.querySelectorAll(".extra-row").forEach(row => {
                const extId = row.getAttribute("data-id");
                const label = row.querySelector("label");
                if (label && extId) {
                    label.innerText = window.tOption(extId);
                }
            });
        }
    }

    const addBtn = document.getElementById("modalAddToCartBtn");
    if (addBtn && window.t) {
        const span = addBtn.querySelector("span");
        if (span) span.innerText = window.t("modal.addBtn", "Añadir al pedido • ");
    }
}


/* ==========================================
            STATE MANAGEMENT
========================================== */
let cart = [];
let currentOrderType = "delivery"; // "delivery" | "pickup"
let activeCategory = "all";
let searchKeyword = "";

// Modal selection state
let currentProduct = null;
let selectedVariant = null;
let selectedMeat = null;
let selectedDrink = null;
let selectedExtras = [];
let modalQuantity = 1;


/* ==========================================
        LOCAL STORAGE CART PERSISTENCE
========================================== */
function loadCartFromStorage() {
    try {
        const saved = localStorage.getItem("alkarram_cart");
        if (saved) {
            cart = JSON.parse(saved);
        }
    } catch (e) {
        console.warn("No se pudo cargar el carrito de localStorage", e);
        cart = [];
    }
}

function saveCartToStorage() {
    try {
        localStorage.setItem("alkarram_cart", JSON.stringify(cart));
    } catch (e) {
        console.warn("No se pudo guardar el carrito en localStorage", e);
    }
}


/* ==========================================
      RESTAURANT LIVE STATUS (Europe/Madrid)
========================================== */
function checkRestaurantOpenStatus(testDate = null) {
    try {
        const now = testDate ? new Date(testDate) : new Date();
        const dtf = new Intl.DateTimeFormat("en-US", {
            timeZone: "Europe/Madrid",
            weekday: "short", // 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            hourCycle: "h23" // Ensures clean 0-23 hour representation
        });

        const parts = dtf.formatToParts(now);
        const getPart = type => parts.find(p => p.type === type)?.value;

        const dayName = getPart("weekday") || "Fri";
        let hour = parseInt(getPart("hour"), 10);
        if (isNaN(hour)) hour = 0;
        if (hour === 24) hour = 0;
        let minute = parseInt(getPart("minute"), 10);
        if (isNaN(minute)) minute = 0;
        const totalMinutes = hour * 60 + minute;

        // Source of truth (Original Al Karram Kebab & Pizza Poster):
        // Monday:    20:00 - 00:00
        // Tuesday:   20:00 - 00:00
        // Wednesday: 20:00 - 00:00
        // Thursday:  20:00 - 00:00
        // Friday:    19:00 - 02:00
        // Saturday:  19:00 - 02:00
        // Sunday:    19:00 - 02:00
        //
        // Overnight schedule:
        // Friday/Saturday/Sunday service remains OPEN from 19:00 until 02:00 the following morning.
        // At any time inside the applicable service period: OPEN NOW.
        // At any time outside the applicable service period: CLOSED.
        let isOpen = false;

        if (dayName === "Fri") {
            // Friday service: 19:00 - 24:00 (remains open after midnight until Saturday 02:00)
            isOpen = (totalMinutes >= 1140 && totalMinutes < 1440);
        } else if (dayName === "Sat") {
            // Saturday:
            // - Overnight continuation of Friday night service: 00:00 - 02:00
            // - Saturday evening service: 19:00 - 24:00 (remains open after midnight until Sunday 02:00)
            isOpen = (totalMinutes < 120) || (totalMinutes >= 1140 && totalMinutes < 1440);
        } else if (dayName === "Sun") {
            // Sunday:
            // - Overnight continuation of Saturday night service: 00:00 - 02:00
            // - Sunday evening service: 19:00 - 24:00 (remains open after midnight until Monday 02:00)
            isOpen = (totalMinutes < 120) || (totalMinutes >= 1140 && totalMinutes < 1440);
        } else if (dayName === "Mon") {
            // Monday:
            // - Overnight continuation of Sunday night service: 00:00 - 02:00
            // - Monday evening service: 20:00 - 24:00
            isOpen = (totalMinutes < 120) || (totalMinutes >= 1200 && totalMinutes < 1440);
        } else {
            // Tuesday, Wednesday, Thursday:
            // Evening service: 20:00 - 24:00
            isOpen = (totalMinutes >= 1200 && totalMinutes < 1440);
        }

        const isDeliveryOpen = isOpen;

        // Current restaurant-local day grouping for delivery hours display:
        // Monday–Thursday: "Delivery: 20:00 to 00:00 Night"
        // Friday–Sunday:   "Delivery: 19:00 to 02:00 Night"
        const isWeekendDay = (dayName === "Fri" || dayName === "Sat" || dayName === "Sun");
        const dayGroup = isWeekendDay ? "Fri-Sun" : "Mon-Thu";
        const deliveryHoursEn = isWeekendDay ? "Delivery: 19:00 to 02:00 Night" : "Delivery: 20:00 to 00:00 Night";
        const deliveryHoursEs = isWeekendDay ? "Domicilio: 19:00 a 02:00 Noche" : "Domicilio: 20:00 a 00:00 Noche";

        return {
            isOpen,
            isDeliveryOpen,
            hour,
            minute,
            totalMinutes,
            dayName,
            dayGroup,
            isWeekendDay,
            deliveryHours: deliveryHoursEn,
            deliveryHoursEn,
            deliveryHoursEs,
            timeZone: "Europe/Madrid"
        };
    } catch (e) {
        console.warn("Error evaluando horario de Madrid:", e);
        return {
            isOpen: false,
            isDeliveryOpen: false,
            hour: 0,
            minute: 0,
            totalMinutes: 0,
            dayName: "Sun",
            dayGroup: "Fri-Sun",
            isWeekendDay: true,
            deliveryHours: "Delivery: 19:00 to 02:00 Night",
            deliveryHoursEn: "Delivery: 19:00 to 02:00 Night",
            deliveryHoursEs: "Domicilio: 19:00 a 02:00 Noche",
            timeZone: "Europe/Madrid"
        };
    }
}

function updateLiveRestaurantStatus(testDate = null) {
    const status = checkRestaurantOpenStatus(testDate);
    const topBadge = document.getElementById("topBarStatusBadge");
    const heroPill = document.getElementById("heroStatusPill");
    const heroTitle = document.getElementById("heroStatusTitle");
    const heroSub = document.getElementById("heroStatusSub");
    const topDelivery = document.getElementById("topBarDeliveryText");

    const statusClass = status.isOpen ? "is-open" : "is-closed";
    const statusText = status.isOpen 
        ? (window.t ? window.t("status.open", "Abierto ahora") : "Abierto ahora") 
        : (window.t ? window.t("status.closed", "Cerrado ahora") : "Cerrado ahora");
    
    let subText = "";
    if (status.isOpen) {
        subText = window.t ? window.t("status.openBoth", "Local y Reparto Activos") : "Local y Reparto Activos";
    } else {
        const nextTime = status.isWeekendDay ? "19:00" : "20:00";
        subText = window.t ? window.t("status.closedSub", `Próxima apertura a las ${nextTime}`) : `Próxima apertura a las ${nextTime}`;
    }

    if (topBadge) {
        topBadge.className = `live-status-badge ${statusClass}`;
        topBadge.innerHTML = `<span class="status-dot"></span> <span class="status-text">${statusText}</span>`;
    }

    if (heroPill) {
        heroPill.className = `info-pill status-pill ${statusClass}`;
    }

    if (heroTitle) {
        heroTitle.innerText = statusText;
    }

    if (heroSub) {
        heroSub.innerText = subText;
    }

    // Dynamic header delivery hours for current restaurant-local day
    if (topDelivery) {
        let deliveryHtml = "";
        if (window.t) {
            deliveryHtml = status.isWeekendDay 
                ? window.t("topBar.deliveryWeekend")
                : window.t("topBar.deliveryWeekday");
        }
        if (!deliveryHtml) {
            const isEnglish = (window.currentLang === "en");
            deliveryHtml = isEnglish
                ? (status.isWeekendDay ? "Delivery: <strong>19:00 to 02:00 Night</strong>" : "Delivery: <strong>20:00 to 00:00 Night</strong>")
                : (status.isWeekendDay ? "Domicilio: <strong>19:00 a 02:00 Noche</strong>" : "Domicilio: <strong>20:00 a 00:00 Noche</strong>");
        }
        topDelivery.innerHTML = deliveryHtml;
    }
}

// Expose for external calls and testing
window.checkRestaurantOpenStatus = checkRestaurantOpenStatus;
window.updateLiveRestaurantStatus = updateLiveRestaurantStatus;


/* ==========================================
            DOM INITIALIZATION
========================================== */
document.addEventListener("DOMContentLoaded", () => {
    initMultilingualSystem();
    loadCartFromStorage();
    renderProducts();
    renderAllCombosShowcase();
    updateLiveRestaurantStatus();
    setInterval(updateLiveRestaurantStatus, 30000); // Live status updates without page reload
    updateCartUI();
    setupEventListeners();
});


/* ==========================================
        RENDER ALL 11 COMBOS SHOWCASE
========================================== */
function renderAllCombosShowcase() {
    const grid = document.getElementById("allCombosGrid");
    if (!grid) return;

    const combos = MENU_DATA.filter(p => p.category === "combos");
    grid.innerHTML = combos.map(combo => {
        const tInfo = (window.tProduct && window.tProduct(combo.id)) || { name: combo.name, desc: combo.description };
        let priceStr = formatEuro(combo.price);
        if (combo.variants && combo.variants.some(v => v.price !== undefined && v.price !== combo.price)) {
            priceStr = `${window.t ? window.t("menu.fromPrefix", "Desde") : "Desde"} ${formatEuro(combo.price)}`;
        }

        const btnText = window.t ? window.t("combos.orderBtn", "Pedir") : "Pedir";

        return `
            <div class="combo-showcase-card" onclick="openProductModal('${combo.id}')" title="Personalizar ${tInfo.name}">
                <div class="combo-showcase-img">
                    <img src="${combo.image}" alt="${tInfo.name}" loading="lazy" onerror="this.src='assets/images/combo.png'">
                </div>
                <div class="combo-showcase-body">
                    <h4>${tInfo.name}</h4>
                    <p>${tInfo.desc}</p>
                    <div class="combo-showcase-footer">
                        <span class="combo-showcase-price">${priceStr}</span>
                        <button type="button" class="combo-showcase-btn" onclick="event.stopPropagation(); openProductModal('${combo.id}')">
                            <i class="fa-solid fa-cart-plus"></i> ${btnText}
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
}


/* ==========================================
        RENDER PRODUCTS GRID
========================================== */
function renderProducts() {
    const grid = document.getElementById("productsGrid");
    const countEl = document.getElementById("menuResultsCount");
    const noResults = document.getElementById("noResultsState");
    if (!grid) return;

    let filtered = MENU_DATA.filter(prod => {
        const matchesCategory = (activeCategory === "all") || (prod.category === activeCategory);
        const term = searchKeyword.toLowerCase().trim();
        if (!term) return matchesCategory;

        const tInfo = (window.tProduct && window.tProduct(prod.id)) || {};
        const trName = (tInfo.name || "").toLowerCase();
        const trDesc = (tInfo.desc || "").toLowerCase();
        const trCat = (window.tCategory && window.tCategory(prod.category) || "").toLowerCase();

        const matchesSearch =
            prod.name.toLowerCase().includes(term) ||
            prod.description.toLowerCase().includes(term) ||
            prod.categoryName.toLowerCase().includes(term) ||
            trName.includes(term) ||
            trDesc.includes(term) ||
            trCat.includes(term);

        return matchesCategory && matchesSearch;
    });

    if (countEl) {
        const dishWord = filtered.length === 1 ? (window.t ? window.t("menu.dishSingular", "plato") : "plato") : (window.t ? window.t("menu.dishPlural", "platos") : "platos");
        const showingWord = window.t ? window.t("menu.showing", "Mostrando") : "Mostrando";
        countEl.innerText = `${showingWord} ${filtered.length} ${dishWord}`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = "";
        if (noResults) noResults.style.display = "block";
        return;
    }

    if (noResults) noResults.style.display = "none";

    grid.innerHTML = filtered.map(prod => {
        const tInfo = (window.tProduct && window.tProduct(prod.id)) || { name: prod.name, desc: prod.description };
        const prodName = tInfo.name;
        const prodDesc = tInfo.desc;
        const catName = window.tCategory ? window.tCategory(prod.category) : prod.categoryName;
        const badgeName = (window.tBadge && prod.badge) ? window.tBadge(prod.badge) : (prod.badge || "");

        // Price display: Check if variants have different prices
        let priceStr = formatEuro(prod.price);
        if (prod.variants && prod.variants.some(v => v.price !== undefined && v.price !== prod.price)) {
            priceStr = `${window.t ? window.t("menu.fromPrefix", "Desde") : "Desde"} ${formatEuro(prod.price)}`;
        }

        const fallbackImg = prod.category === 'patatas' ? 'assets/images/fries.png' :
                            prod.category === 'pollo' ? 'assets/images/wings.png' :
                            prod.category === 'bebidas' ? 'assets/images/drink.png' :
                            prod.category === 'combos' ? 'assets/images/combo.png' :
                            'assets/images/durum.png';

        const badgeHtml = badgeName ? `<span class="product-badge-pill">${badgeName}</span>` : '';
        const pricePrefix = window.t ? window.t("menu.pricePrefix", "Precio") : "Precio";
        const orderBtnText = window.t ? window.t("menu.orderBtn", "Pedir") : "Pedir";

        return `
            <article class="product-card" data-id="${prod.id}" onclick="openProductModal('${prod.id}')" style="cursor: pointer;">
                <div class="card-img-container">
                    <img src="${prod.image}" alt="${prodName}" loading="lazy" onerror="this.src='${fallbackImg}'">
                    <span class="card-category-badge">${catName}</span>
                    ${badgeHtml}
                </div>
                <div class="card-content">
                    <h3 class="card-title">${prodName}</h3>
                    <p class="card-desc">${prodDesc}</p>
                    <div class="card-footer">
                        <div class="card-price-box">
                            <span class="price-prefix">${pricePrefix}</span>
                            <span class="card-price">${priceStr}</span>
                        </div>
                        <button type="button" class="card-btn" onclick="event.stopPropagation(); openProductModal('${prod.id}')" aria-label="Pedir ${prodName}">
                            <i class="fa-solid fa-plus"></i> ${orderBtnText}
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join("");
}

function filterByCategory(category) {
    activeCategory = category;

    // Update active category pill
    document.querySelectorAll(".cat-pill").forEach(pill => {
        if (pill.dataset.category === category) {
            pill.classList.add("active");
            pill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        } else {
            pill.classList.remove("active");
        }
    });

    renderProducts();
}


/* ==========================================
        PRODUCT CUSTOMIZATION MODAL
========================================== */
function openProductModal(productId) {
    const prod = MENU_DATA.find(p => p.id === productId);
    if (!prod) return;

    currentProduct = prod;
    modalQuantity = 1;
    selectedExtras = [];

    // Reset options
    selectedVariant = prod.variants ? prod.variants[0] : null;
    selectedMeat = prod.meatOptions ? prod.meatOptions[0] : null;
    selectedDrink = prod.drinkOptions ? prod.drinkOptions[0] : null;

    // Elements
    const modal = document.getElementById("productModal");
    const overlay = document.getElementById("productModalOverlay");
    const imgEl = document.getElementById("modalProductImg");
    const catTag = document.getElementById("modalCategoryTag");
    const nameEl = document.getElementById("modalProductName");
    const descEl = document.getElementById("modalProductDesc");
    const basePriceEl = document.getElementById("modalProductBasePrice");
    const qtyNum = document.getElementById("modalQtyNum");

    const tInfo = (window.tProduct && window.tProduct(prod.id)) || { name: prod.name, desc: prod.description };

    if (imgEl) imgEl.src = prod.image;
    if (catTag) catTag.innerText = window.tCategory ? window.tCategory(prod.category) : prod.categoryName;
    if (nameEl) nameEl.innerText = tInfo.name;
    if (descEl) descEl.innerText = tInfo.desc;
    if (basePriceEl) basePriceEl.innerText = formatEuro(prod.price);
    if (qtyNum) qtyNum.innerText = "1";

    // 1. Variant Group (Size, meat type, or single/double)
    const variantGroup = document.getElementById("modalVariantGroup");
    const variantLabel = document.getElementById("modalVariantLabel");
    const variantChips = document.getElementById("modalVariantChips");

    if (prod.variants && prod.variants.length > 0) {
        variantGroup.style.display = "block";
        const vLabelText = (window.tOption && prod.variantLabel) ? window.tOption(prod.variantLabel) : (window.t ? window.t("modal.variantLabelDefault", "Elige una opción:") : "Elige una opción:");
        variantLabel.innerText = vLabelText;
        variantChips.innerHTML = prod.variants.map((v, idx) => {
            const vPrice = v.price !== undefined ? formatEuro(v.price) : (v.priceDiff > 0 ? `+${formatEuro(v.priceDiff)}` : '');
            const vName = window.tOption ? window.tOption(v.name) : v.name;
            return `
                <button type="button" class="chip-btn ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
                    ${vName} ${vPrice ? `(${vPrice})` : ''}
                </button>
            `;
        }).join("");

        variantChips.querySelectorAll(".chip-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                variantChips.querySelectorAll(".chip-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                const idx = parseInt(btn.dataset.idx, 10);
                selectedVariant = prod.variants[idx];
                calculateModalTotal();
            });
        });
    } else {
        variantGroup.style.display = "none";
    }

    // 2. Meat Group (Pollo, Ternera, Mixto)
    const meatGroup = document.getElementById("modalMeatGroup");
    const meatLabel = document.getElementById("modalMeatLabel");
    const meatChips = document.getElementById("modalMeatChips");

    if (prod.meatOptions && prod.meatOptions.length > 0) {
        meatGroup.style.display = "block";
        const mLabelText = (window.tOption && prod.meatOptionLabel) ? window.tOption(prod.meatOptionLabel) : (window.t ? window.t("modal.meatLabelDefault", "Elige la carne:") : "Elige la carne:");
        meatLabel.innerText = mLabelText;
        meatChips.innerHTML = prod.meatOptions.map((meat, idx) => {
            const mName = window.tOption ? window.tOption(meat) : meat;
            return `
                <button type="button" class="chip-btn ${idx === 0 ? 'active' : ''}" data-meat="${meat}">
                    ${mName}
                </button>
            `;
        }).join("");

        meatChips.querySelectorAll(".chip-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                meatChips.querySelectorAll(".chip-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                selectedMeat = btn.dataset.meat;
            });
        });
    } else {
        meatGroup.style.display = "none";
    }

    // 3. Drink Group (for combos)
    const drinkGroup = document.getElementById("modalDrinkGroup");
    const drinkLabel = document.getElementById("modalDrinkLabel");
    const drinkChips = document.getElementById("modalDrinkChips");

    if (prod.drinkOptions && prod.drinkOptions.length > 0) {
        drinkGroup.style.display = "block";
        const dLabelText = (window.tOption && prod.drinkOptionLabel) ? window.tOption(prod.drinkOptionLabel) : (window.t ? window.t("modal.drinkLabelDefault", "Elige la bebida:") : "Elige la bebida:");
        drinkLabel.innerText = dLabelText;
        drinkChips.innerHTML = prod.drinkOptions.map((drink, idx) => {
            const dName = window.tOption ? window.tOption(drink) : drink;
            return `
                <button type="button" class="chip-btn ${idx === 0 ? 'active' : ''}" data-drink="${drink}">
                    ${dName}
                </button>
            `;
        }).join("");

        drinkChips.querySelectorAll(".chip-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                drinkChips.querySelectorAll(".chip-btn").forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                selectedDrink = btn.dataset.drink;
            });
        });
    } else {
        drinkGroup.style.display = "none";
    }

    // 4. Extras Group
    const extrasGroup = document.getElementById("modalExtrasGroup");
    const extrasList = document.getElementById("modalExtrasList");

    if (prod.supportedExtras && prod.supportedExtras.length > 0) {
        extrasGroup.style.display = "block";
        const extrasAvailable = MASTER_EXTRAS.filter(e => prod.supportedExtras.includes(e.id));

        extrasList.innerHTML = extrasAvailable.map(ext => {
            const extName = (window.tOption && window.tOption(ext.id)) || ext.name;
            return `
                <div class="extra-row" data-id="${ext.id}">
                    <div class="extra-checkbox-wrapper">
                        <input type="checkbox" id="ext_${ext.id}" value="${ext.id}">
                        <label for="ext_${ext.id}">${extName}</label>
                    </div>
                    <span class="extra-price">+${formatEuro(ext.price)}</span>
                </div>
            `;
        }).join("");

        extrasList.querySelectorAll(".extra-row").forEach(row => {
            const checkbox = row.querySelector('input[type="checkbox"]');
            checkbox.addEventListener("change", () => {
                row.classList.toggle("checked", checkbox.checked);
                updateSelectedExtras();
                calculateModalTotal();
            });
            row.addEventListener("click", (e) => {
                if (e.target.tagName !== "INPUT" && e.target.tagName !== "LABEL") {
                    checkbox.checked = !checkbox.checked;
                    checkbox.dispatchEvent(new Event("change"));
                }
            });
        });
    } else {
        extrasGroup.style.display = "none";
    }

    calculateModalTotal();

    // Show modal
    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function updateSelectedExtras() {
    selectedExtras = [];
    document.querySelectorAll('#modalExtrasList input[type="checkbox"]:checked').forEach(cb => {
        const found = MASTER_EXTRAS.find(e => e.id === cb.value);
        if (found) selectedExtras.push(found);
    });
}

function calculateModalTotal() {
    if (!currentProduct) return;

    let unitPrice = currentProduct.price;

    // If variant specifies a fixed total price (e.g. Pequeña: 4.00, Grande: 8.00)
    if (selectedVariant && selectedVariant.price !== undefined) {
        unitPrice = selectedVariant.price;
    } else if (selectedVariant && selectedVariant.priceDiff !== undefined) {
        unitPrice += selectedVariant.priceDiff;
    }

    // Sum extras
    const extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0);
    const finalUnitPrice = unitPrice + extrasTotal;
    const finalModalTotal = finalUnitPrice * modalQuantity;

    const totalEl = document.getElementById("modalTotalPrice");
    if (totalEl) totalEl.innerText = formatEuro(finalModalTotal);
}

function closeProductModal() {
    const overlay = document.getElementById("productModalOverlay");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
    currentProduct = null;
}


/* ==========================================
            CART SYSTEM
========================================== */
function addItemFromModalToCart() {
    if (!currentProduct) return;

    let unitPrice = currentProduct.price;
    if (selectedVariant && selectedVariant.price !== undefined) {
        unitPrice = selectedVariant.price;
    } else if (selectedVariant && selectedVariant.priceDiff !== undefined) {
        unitPrice += selectedVariant.priceDiff;
    }

    const extrasTotal = selectedExtras.reduce((sum, e) => sum + e.price, 0);
    const finalUnitPrice = unitPrice + extrasTotal;

    // Create detailed cart item
    const cartItem = {
        cartItemId: Date.now() + "-" + Math.random().toString(36).substr(2, 5),
        productId: currentProduct.id,
        name: currentProduct.name,
        image: currentProduct.image,
        variantName: selectedVariant ? selectedVariant.name : null,
        meatName: selectedMeat,
        drinkName: selectedDrink,
        extras: [...selectedExtras],
        unitPrice: finalUnitPrice,
        quantity: modalQuantity
    };

    // Check if an identical item is already in the cart
    const existingIndex = cart.findIndex(item => {
        if (item.productId !== currentProduct.id) return false;
        if (item.variantName !== (selectedVariant ? selectedVariant.name : null)) return false;
        if (item.meatName !== selectedMeat) return false;
        if (item.drinkName !== selectedDrink) return false;

        const itemExtras = (item.extras || []).map(e => e.id).sort().join(",");
        const newExtras = selectedExtras.map(e => e.id).sort().join(",");
        return itemExtras === newExtras;
    });

    if (existingIndex > -1) {
        cart[existingIndex].quantity += modalQuantity;
    } else {
        cart.push(cartItem);
    }

    saveCartToStorage();
    updateCartUI();

    // Trigger cart bump animation
    const cartBtn = document.getElementById("headerCartBtn");
    if (cartBtn) {
        cartBtn.classList.remove("cart-bump");
        void cartBtn.offsetWidth;
        cartBtn.classList.add("cart-bump");
    }

    showToast(`✓ ¡Añadido <strong>${currentProduct.name}</strong> al pedido!`);
    closeProductModal();

    // Open Cart Drawer automatically so user sees the addition (KFC style)
    openCartDrawer();
}

function setOrderType(type) {
    currentOrderType = type;

    // Update buttons in cart
    const delBtn = document.getElementById("btnTypeDelivery");
    const pickBtn = document.getElementById("btnTypePickup");
    if (delBtn && pickBtn) {
        delBtn.classList.toggle("active", type === "delivery");
        pickBtn.classList.toggle("active", type === "pickup");
    }

    // Update radio in checkout form
    const radioDel = document.getElementById("radioDelivery");
    const radioPick = document.getElementById("radioPickup");
    if (radioDel && radioPick) {
        radioDel.checked = (type === "delivery");
        radioPick.checked = (type === "pickup");
    }

    // Toggle address section in checkout
    const addrSec = document.getElementById("addressSection");
    if (addrSec) {
        addrSec.style.display = (type === "delivery") ? "block" : "none";
    }

    updateCartUI();
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

    const deliveryCost = 0.00;
    const finalTotal = subtotal + deliveryCost;

    const badgeCount = document.getElementById("cartBadgeCount");
    const badgePrice = document.getElementById("cartBadgePrice");
    if (badgeCount) badgeCount.innerText = totalItems;
    if (badgePrice) badgePrice.innerText = formatEuro(finalTotal);

    const drawerCount = document.getElementById("cartDrawerItemCount");
    if (drawerCount) drawerCount.innerText = `(${totalItems})`;

    const subtotalEl = document.getElementById("cartSubtotalText");
    const deliveryEl = document.getElementById("cartDeliveryText");
    const totalEl = document.getElementById("cartTotalText");
    const btnTotal = document.getElementById("checkoutBtnTotal");

    if (subtotalEl) subtotalEl.innerText = formatEuro(subtotal);
    if (deliveryEl) {
        deliveryEl.innerText = currentOrderType === "delivery" 
            ? (window.t ? window.t("cart.deliveryFree", "Gratis") : "Gratis") 
            : (window.t ? window.t("cart.deliveryNotApp", "No aplica (Local)") : "No aplica (Local)");
    }
    if (totalEl) totalEl.innerText = formatEuro(finalTotal);
    if (btnTotal) btnTotal.innerText = formatEuro(finalTotal);

    const mobileCartBar = document.getElementById("mobileBottomCartBar");
    const mobileQty = document.getElementById("mobileCartBarQty");
    const mobileTotal = document.getElementById("mobileCartBarTotal");

    if (mobileCartBar) {
        if (totalItems > 0) {
            mobileCartBar.classList.add("is-visible");
            document.body.classList.add("has-mobile-cart-bar");
            if (mobileQty) {
                const itemWord = totalItems === 1 ? (window.t ? window.t("cart.itemSingular", "artículo") : "artículo") : (window.t ? window.t("cart.itemPlural", "artículos") : "artículos");
                mobileQty.innerText = `${totalItems} ${itemWord}`;
            }
            if (mobileTotal) {
                mobileTotal.innerText = formatEuro(finalTotal);
            }
        } else {
            mobileCartBar.classList.remove("is-visible");
            document.body.classList.remove("has-mobile-cart-bar");
        }
    }

    const cartList = document.getElementById("cartItemsList");
    if (!cartList) return;

    if (cart.length === 0) {
        const emptyTitle = window.t ? window.t("cart.emptyTitle", "Tu pedido está vacío") : "Tu pedido está vacío";
        const emptyDesc = window.t ? window.t("cart.emptyDesc", "Añade tus platos kebab favoritos y los prepararemos al momento.") : "Añade tus platos kebab favoritos y los prepararemos al momento.";
        const browseBtn = window.t ? window.t("cart.browseBtn", "Explorar la Carta") : "Explorar la Carta";

        cartList.innerHTML = `
            <div class="empty-cart-view">
                <i class="fa-solid fa-basket-shopping"></i>
                <h4>${emptyTitle}</h4>
                <p>${emptyDesc}</p>
                <a href="#menu" class="btn btn-primary" onclick="closeCartDrawer()">
                    <i class="fa-solid fa-utensils"></i> ${browseBtn}
                </a>
            </div>
        `;
        return;
    }

    cartList.innerHTML = cart.map(item => {
        const tInfo = (window.tProduct && window.tProduct(item.productId)) || { name: item.name };
        const itemName = tInfo.name || item.name;

        const tags = [];
        if (item.variantName) tags.push(window.tOption ? window.tOption(item.variantName) : item.variantName);
        if (item.meatName) {
            const meatPrefix = window.t ? window.t("cart.meatPrefix", "Carne:") : "Carne:";
            tags.push(`${meatPrefix} ${window.tOption ? window.tOption(item.meatName) : item.meatName}`);
        }
        if (item.drinkName) {
            const drinkPrefix = window.t ? window.t("cart.drinkPrefix", "Bebida:") : "Bebida:";
            tags.push(`${drinkPrefix} ${window.tOption ? window.tOption(item.drinkName) : item.drinkName}`);
        }
        if (item.extras && item.extras.length > 0) {
            item.extras.forEach(e => {
                const extName = (window.tOption && window.tOption(e.id)) || e.name;
                tags.push(`+ ${extName}`);
            });
        }

        const tagsHtml = tags.map(t => `<span class="cart-item-tag-chip">${t}</span>`).join("");
        const itemLineTotal = item.unitPrice * item.quantity;

        return `
            <div class="cart-item" data-cart-id="${item.cartItemId}">
                <img src="${item.image}" alt="${itemName}" onerror="this.src='assets/images/durum.png'">
                <div class="cart-item-details">
                    <h4 class="cart-item-title">${itemName}</h4>
                    <div class="cart-item-tags">${tagsHtml}</div>
                    <div class="cart-item-bottom">
                        <span class="cart-item-price">${formatEuro(itemLineTotal)}</span>
                        <div class="cart-item-qty">
                            <button type="button" class="cart-qty-btn dec-qty-btn" data-cart-id="${item.cartItemId}" aria-label="Reducir">">−</button>
                            <span class="cart-qty-val">${item.quantity}</span>
                            <button type="button" class="cart-qty-btn inc-qty-btn" data-cart-id="${item.cartItemId}" aria-label="Aumentar">+</button>
                        </div>
                    </div>
                </div>
                <button type="button" class="cart-item-remove" data-cart-id="${item.cartItemId}" title="Eliminar del pedido">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `;
    }).join("");
}

function openCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (drawer && overlay) {
        drawer.classList.add("open");
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
    }
}

function closeCartDrawer() {
    const drawer = document.getElementById("cartDrawer");
    const overlay = document.getElementById("cartOverlay");
    if (drawer && overlay) {
        drawer.classList.remove("open");
        overlay.classList.remove("open");
        document.body.style.overflow = "";
    }
}


/* ==========================================
            CHECKOUT MODAL
========================================== */
function openCheckoutModal() {
    if (cart.length === 0) {
        showToast("Tu pedido está vacío. Elige tus platos primero.");
        return;
    }

    closeCartDrawer();

    const overlay = document.getElementById("checkoutModalOverlay");
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

    const itemsCountEl = document.getElementById("checkoutItemsCount");
    const finalTotalEl = document.getElementById("checkoutFinalTotal");
    const submitBtnTotal = document.getElementById("submitOrderTotal");

    if (itemsCountEl) itemsCountEl.innerText = `${totalItems} producto${totalItems === 1 ? '' : 's'}`;
    if (finalTotalEl) finalTotalEl.innerText = formatEuro(subtotal);
    if (submitBtnTotal) submitBtnTotal.innerText = formatEuro(subtotal);

    // Sync order type
    const addrSec = document.getElementById("addressSection");
    if (addrSec) {
        addrSec.style.display = (currentOrderType === "delivery") ? "block" : "none";
    }

    if (overlay) {
        overlay.classList.add("open");
        document.body.style.overflow = "hidden";
    }
}

function closeCheckoutModal() {
    const overlay = document.getElementById("checkoutModalOverlay");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
}

function handleCheckoutSubmit(e) {
    e.preventDefault();

    const confirmBtn = document.getElementById("confirmOrderBtn");
    const originalBtnHtml = confirmBtn ? confirmBtn.innerHTML : "";

    // Immediate button disable and loading state to prevent double clicks
    if (confirmBtn) {
        confirmBtn.disabled = true;
        confirmBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> ' + (window.t ? window.t("checkout.processing", "Procesando...") : "Procesando...");
    }

    const restoreBtn = () => {
        if (confirmBtn) {
            confirmBtn.disabled = false;
            confirmBtn.innerHTML = originalBtnHtml;
        }
    };

    const nameInput = document.getElementById("custName");
    const phoneInput = document.getElementById("custPhone");
    const addressInput = document.getElementById("custAddress");
    const notesInput = document.getElementById("custNotes");
    const orderTypeRadio = document.querySelector('input[name="orderType"]:checked');
    const paymentRadio = document.querySelector('input[name="paymentMethod"]:checked');

    let isValid = true;

    // Validate Name
    if (!nameInput.value.trim()) {
        nameInput.closest(".form-group").classList.add("has-error");
        isValid = false;
    } else {
        nameInput.closest(".form-group").classList.remove("has-error");
    }

    // Validate Phone
    const phoneClean = phoneInput.value.replace(/\s+/g, "");
    if (!phoneClean || phoneClean.length < 9) {
        phoneInput.closest(".form-group").classList.add("has-error");
        isValid = false;
    } else {
        phoneInput.closest(".form-group").classList.remove("has-error");
    }

    // Validate Address if Delivery
    const orderType = orderTypeRadio ? orderTypeRadio.value : "delivery";
    if (orderType === "delivery" && !addressInput.value.trim()) {
        addressInput.closest(".form-group").classList.add("has-error");
        isValid = false;
    } else if (addressInput) {
        addressInput.closest(".form-group").classList.remove("has-error");
    }

    if (!isValid) {
        restoreBtn();
        showToast(window.t ? window.t("toasts.fillRequired", "Por favor, completa los campos requeridos marcados en rojo.") : "Por favor, completa los campos requeridos marcados en rojo.");
        return;
    }

    // Processing feedback delay before confirmation modal
    setTimeout(() => {
        // Create Order Object
        const orderNumber = "AK-" + Math.floor(10000 + Math.random() * 90000);
        const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);

        const orderData = {
            orderNumber,
            customerName: nameInput.value.trim(),
            customerSurname: document.getElementById("custSurname")?.value.trim() || "",
            phone: phoneInput.value.trim(),
            orderType: orderType === "delivery" ? "A Domicilio (Montilla)" : "Recoger en el Local (Calle Corredera 46)",
            address: orderType === "delivery" ? addressInput.value.trim() : "Recogida en local",
            paymentMethod: paymentRadio && paymentRadio.value === "card" ? "Pago con Tarjeta (Datáfono)" : "Pago en Efectivo",
            notes: notesInput ? notesInput.value.trim() : "",
            items: [...cart],
            total: subtotal,
            date: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        restoreBtn();
        closeCheckoutModal();
        showConfirmationModal(orderData);

        // Clear cart after order is placed
        cart = [];
        saveCartToStorage();
        updateCartUI();
    }, 500);
}

function sendOrderViaWhatsApp() {
    if (cart.length === 0) {
        showToast(window.t ? window.t("toasts.emptyCart", "Tu pedido está vacío. Elige tus platos primero.") : "Tu pedido está vacío. Elige tus platos primero.");
        return;
    }

    const nameInput = document.getElementById("custName");
    const phoneInput = document.getElementById("custPhone");
    const addressInput = document.getElementById("custAddress");
    const notesInput = document.getElementById("custNotes");
    const orderTypeRadio = document.querySelector('input[name="orderType"]:checked');
    const paymentRadio = document.querySelector('input[name="paymentMethod"]:checked');

    let name = nameInput ? nameInput.value.trim() : "";
    let phone = phoneInput ? phoneInput.value.trim() : "";
    let address = addressInput ? addressInput.value.trim() : "";
    const orderType = orderTypeRadio ? orderTypeRadio.value : currentOrderType;

    let isValid = true;
    if (!name) {
        if (nameInput) nameInput.closest(".form-group").classList.add("has-error");
        isValid = false;
    } else if (nameInput) {
        nameInput.closest(".form-group").classList.remove("has-error");
    }

    const phoneClean = phone.replace(/\s+/g, "");
    if (!phoneClean || phoneClean.length < 9) {
        if (phoneInput) phoneInput.closest(".form-group").classList.add("has-error");
        isValid = false;
    } else if (phoneInput) {
        phoneInput.closest(".form-group").classList.remove("has-error");
    }

    if (orderType === "delivery" && !address) {
        if (addressInput) addressInput.closest(".form-group").classList.add("has-error");
        isValid = false;
    } else if (addressInput) {
        addressInput.closest(".form-group").classList.remove("has-error");
    }

    if (!isValid) {
        showToast(window.t ? window.t("toasts.fillRequiredWa", "Por favor, introduce tu nombre, teléfono y dirección antes de enviar por WhatsApp.") : "Por favor, introduce tu nombre, teléfono y dirección antes de enviar por WhatsApp.");
        return;
    }

    const orderNumber = "AK-" + Math.floor(10000 + Math.random() * 90000);
    const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    const notes = notesInput ? notesInput.value.trim() : "";

    const waTr = (window.TRANSLATIONS && window.TRANSLATIONS[currentLang] && window.TRANSLATIONS[currentLang].whatsapp) || (window.TRANSLATIONS && window.TRANSLATIONS["es"].whatsapp) || {};

    const orderTypeStr = orderType === "delivery" ? (waTr.deliveryHome || "A Domicilio (Montilla)") : (waTr.deliveryPickup || "Recoger en el Local (Calle Corredera 46)");
    const paymentStr = paymentRadio && paymentRadio.value === "card" ? (waTr.card || "Pago con Tarjeta (Datáfono)") : (waTr.cash || "Pago en Efectivo");

    let msg = `${waTr.orderHeader || '*NUEVO PEDIDO - AL KARRAM KEBAB*'}\n`;
    msg += `---------------------------------\n`;
    msg += `${waTr.orderNum || '*Pedido:*'} #${orderNumber}\n`;
    msg += `${waTr.customer || '*Cliente:*'} ${name}\n`;
    msg += `${waTr.phone || '*Teléfono:*'} ${phone}\n`;
    msg += `${waTr.deliveryType || '*Tipo de Entrega:*'} ${orderTypeStr}\n`;
    if (orderType === "delivery") {
        msg += `${waTr.address || '*Dirección:*'} ${address}, Montilla (Córdoba)\n`;
    }
    msg += `${waTr.paymentMethod || '*Método de Pago:*'} ${paymentStr}\n`;
    msg += `${waTr.deliveryHours || '*Horario Reparto:* 20:00 - 00:00 Noche'}\n`;
    msg += `---------------------------------\n`;
    msg += `${waTr.productsList || '*PRODUCTOS:*'}\n`;

    cart.forEach(item => {
        let details = [];
        if (item.variantName) details.push(window.tOption ? window.tOption(item.variantName) : item.variantName);
        if (item.meatName) details.push(`${waTr.meatPrefix || 'Carne'}: ${window.tOption ? window.tOption(item.meatName) : item.meatName}`);
        if (item.drinkName) details.push(`${waTr.drinkPrefix || 'Bebida'}: ${window.tOption ? window.tOption(item.drinkName) : item.drinkName}`);
        if (item.extras && item.extras.length > 0) {
            item.extras.forEach(e => {
                const extName = (window.tOption && window.tOption(e.id)) || e.name;
                details.push(`+${extName}`);
            });
        }
        const optStr = details.length > 0 ? ` (${details.join(", ")})` : "";
        const tInfo = (window.tProduct && window.tProduct(item.productId)) || {};
        const prodName = tInfo.name || item.name;
        msg += `• ${item.quantity}x ${prodName}${optStr} - ${formatEuro(item.unitPrice * item.quantity)}\n`;
    });

    msg += `---------------------------------\n`;
    msg += `${waTr.totalToPay || '*TOTAL A PAGAR:*'} ${formatEuro(subtotal)}\n`;
    if (notes) {
        msg += `${waTr.notes || '*Notas:*'} ${notes}\n`;
    }
    msg += `---------------------------------\n`;
    msg += `${waTr.footerMsg || '_Pedido realizado desde la web de Al Karram Kebab_'}`;

    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/34611168163?text=${encoded}`;
    window.open(waUrl, "_blank");

    const orderData = {
        orderNumber,
        customerName: name,
        customerSurname: document.getElementById("custSurname")?.value.trim() || "",
        phone: phone,
        orderType: orderTypeStr,
        address: orderType === "delivery" ? address : "Recogida en local",
        paymentMethod: paymentStr,
        notes: notes,
        items: [...cart],
        total: subtotal
    };

    closeCheckoutModal();
    showConfirmationModal(orderData);

    cart = [];
    saveCartToStorage();
    updateCartUI();
}


/* ==========================================
        ORDER CONFIRMATION MODAL
========================================== */
function showConfirmationModal(order) {
    const overlay = document.getElementById("confirmationModalOverlay");
    if (!overlay) return;

    // Fill elements
    const numEl = document.getElementById("confOrderNumber");
    const nameEl = document.getElementById("confCustomerName");
    const phoneEl = document.getElementById("confCustomerPhone");
    const typeEl = document.getElementById("confOrderType");
    const addrRow = document.getElementById("confAddressRow");
    const addrEl = document.getElementById("confCustomerAddress");
    const payEl = document.getElementById("confPaymentMethod");
    const totalEl = document.getElementById("confOrderTotal");
    const itemsListEl = document.getElementById("confItemsList");

    if (numEl) numEl.innerText = `#${order.orderNumber}`;
    if (nameEl) nameEl.innerText = `${order.customerName} ${order.customerSurname}`.trim();
    if (phoneEl) phoneEl.innerText = order.phone;
    if (typeEl) typeEl.innerText = order.orderType;

    if (addrRow && addrEl) {
        if (order.address && order.address !== "Recogida en local") {
            addrRow.style.display = "flex";
            addrEl.innerText = order.address;
        } else {
            addrRow.style.display = "none";
        }
    }

    if (payEl) payEl.innerText = order.paymentMethod;
    if (totalEl) totalEl.innerText = formatEuro(order.total);

    if (itemsListEl) {
        itemsListEl.innerHTML = order.items.map(item => {
            const tInfo = (window.tProduct && window.tProduct(item.productId)) || { name: item.name };
            return `
                <div class="receipt-item-line">
                    <span>${item.quantity}x ${tInfo.name}</span>
                    <strong>${formatEuro(item.unitPrice * item.quantity)}</strong>
                </div>
            `;
        }).join("");
    }

    // Setup WhatsApp button in confirmation
    const waBtn = document.getElementById("confSendWhatsAppBtn");
    if (waBtn) {
        waBtn.onclick = () => {
            const template = window.t ? window.t("whatsapp.confirmCopy", "Hola Al Karram Kebab, confirmo mi pedido *#{orderNumber}* a nombre de {name} por valor de {total}. ¡Muchas gracias!") : "Hola Al Karram Kebab, confirmo mi pedido *#{orderNumber}* a nombre de {name} por valor de {total}. ¡Muchas gracias!";
            let msg = template.replace('{orderNumber}', order.orderNumber).replace('{name}', order.customerName).replace('{total}', formatEuro(order.total));
            window.open(`https://wa.me/34611168163?text=${encodeURIComponent(msg)}`, "_blank");
        };
    }

    overlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeConfirmationModal() {
    const overlay = document.getElementById("confirmationModalOverlay");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
}


/* ==========================================
            GLOBAL EVENT LISTENERS
========================================== */
function setupEventListeners() {
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");
    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("mobile-open");
            const icon = menuToggle.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });

        // Close on link click
        navbar.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navbar.classList.remove("mobile-open");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }

    // 2. Search Bar
    const searchInput = document.getElementById("menuSearchInput");
    const clearSearch = document.getElementById("clearSearchBtn");
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchKeyword = e.target.value.trim();
            if (clearSearch) clearSearch.style.display = searchKeyword ? "block" : "none";

            // If user types a search term, reset category filter to 'all' so search is global
            if (searchKeyword && activeCategory !== "all") {
                activeCategory = "all";
                document.querySelectorAll(".cat-pill").forEach(pill => {
                    pill.classList.toggle("active", pill.dataset.category === "all");
                });
            }

            renderProducts();
        });
    }

    if (clearSearch) {
        clearSearch.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = "";
                searchKeyword = "";
                clearSearch.style.display = "none";
                searchInput.focus();
                renderProducts();
            }
        });
    }

    // 3. Header search button scrolls to search input
    const headerSearch = document.getElementById("headerSearchBtn");
    if (headerSearch) {
        headerSearch.addEventListener("click", () => {
            const menuSec = document.getElementById("menu");
            if (menuSec) {
                menuSec.scrollIntoView({ behavior: "smooth" });
                setTimeout(() => {
                    if (searchInput) searchInput.focus();
                }, 500);
            }
        });
    }

    // 4. Category Pills
    document.querySelectorAll(".cat-pill").forEach(pill => {
        pill.addEventListener("click", () => {
            filterByCategory(pill.dataset.category);
        });
    });

    const resetBtn = document.getElementById("resetFiltersBtn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            searchKeyword = "";
            filterByCategory("all");
        });
    }

    // 5. Cart Drawer Triggers
    const cartBtn = document.getElementById("headerCartBtn");
    const cartClose = document.getElementById("cartCloseBtn");
    const cartOverlay = document.getElementById("cartOverlay");
    const mobileCartBar = document.getElementById("mobileBottomCartBar");

    if (cartBtn) cartBtn.addEventListener("click", openCartDrawer);
    if (cartClose) cartClose.addEventListener("click", closeCartDrawer);
    if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);
    if (mobileCartBar) mobileCartBar.addEventListener("click", openCartDrawer);

    // Cart list interactions (+ / - / delete)
    const cartList = document.getElementById("cartItemsList");
    if (cartList) {
        cartList.addEventListener("click", (e) => {
            const inc = e.target.closest(".inc-qty-btn");
            const dec = e.target.closest(".dec-qty-btn");
            const remove = e.target.closest(".cart-item-remove");

            if (inc) {
                const id = inc.dataset.cartId;
                const item = cart.find(i => i.cartItemId === id);
                if (item) {
                    item.quantity++;
                    saveCartToStorage();
                    updateCartUI();
                }
            } else if (dec) {
                const id = dec.dataset.cartId;
                const item = cart.find(i => i.cartItemId === id);
                if (item) {
                    item.quantity--;
                    if (item.quantity <= 0) {
                        cart = cart.filter(i => i.cartItemId !== id);
                    }
                    saveCartToStorage();
                    updateCartUI();
                }
            } else if (remove) {
                const id = remove.dataset.cartId;
                cart = cart.filter(i => i.cartItemId !== id);
                saveCartToStorage();
                updateCartUI();
                showToast("Artículo eliminado del pedido");
            }
        });
    }

    // Clear cart
    const clearCart = document.getElementById("clearCartBtn");
    if (clearCart) {
        clearCart.addEventListener("click", () => {
            if (cart.length === 0) return;
            cart = [];
            saveCartToStorage();
            updateCartUI();
            showToast("Se ha vaciado tu pedido");
        });
    }

    // Checkout Triggers
    const openCheckout = document.getElementById("openCheckoutBtn");
    const checkoutClose = document.getElementById("checkoutCloseBtn");
    const checkoutOverlay = document.getElementById("checkoutModalOverlay");

    if (openCheckout) openCheckout.addEventListener("click", openCheckoutModal);
    if (checkoutClose) checkoutClose.addEventListener("click", closeCheckoutModal);

    // Radio changes in checkout form for delivery/pickup
    document.querySelectorAll('input[name="orderType"]').forEach(r => {
        r.addEventListener("change", (e) => {
            setOrderType(e.target.value);
        });
    });

    const checkoutForm = document.getElementById("checkoutForm");
    if (checkoutForm) checkoutForm.addEventListener("submit", handleCheckoutSubmit);

    const waOrderBtn = document.getElementById("orderViaWhatsAppBtn");
    if (waOrderBtn) waOrderBtn.addEventListener("click", sendOrderViaWhatsApp);

    // Confirmation Modal triggers
    const confClose = document.getElementById("confCloseBtn");
    if (confClose) confClose.addEventListener("click", closeConfirmationModal);

    // Product Modal Triggers
    const modalClose = document.getElementById("modalCloseBtn");
    const modalOverlay = document.getElementById("productModalOverlay");
    const modalAdd = document.getElementById("modalAddToCartBtn");
    const qtyInc = document.getElementById("modalQtyInc");
    const qtyDec = document.getElementById("modalQtyDec");

    if (modalClose) modalClose.addEventListener("click", closeProductModal);
    if (modalAdd) modalAdd.addEventListener("click", addItemFromModalToCart);

    if (modalOverlay) {
        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) closeProductModal();
        });
    }

    if (checkoutOverlay) {
        checkoutOverlay.addEventListener("click", (e) => {
            if (e.target === checkoutOverlay) closeCheckoutModal();
        });
    }

    const confOverlay = document.getElementById("confirmationModalOverlay");
    if (confOverlay) {
        confOverlay.addEventListener("click", (e) => {
            if (e.target === confOverlay) closeConfirmationModal();
        });
    }

    if (qtyInc) {
        qtyInc.addEventListener("click", () => {
            modalQuantity++;
            const num = document.getElementById("modalQtyNum");
            if (num) num.innerText = modalQuantity;
            calculateModalTotal();
        });
    }

    if (qtyDec) {
        qtyDec.addEventListener("click", () => {
            if (modalQuantity > 1) {
                modalQuantity--;
                const num = document.getElementById("modalQtyNum");
                if (num) num.innerText = modalQuantity;
                calculateModalTotal();
            }
        });
    }

    // Escape Key Handler
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeProductModal();
            closeCartDrawer();
            closeCheckoutModal();
            closeConfirmationModal();
        }
    });

    // Scroll to Top
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 350) {
                scrollBtn.style.display = "flex";
            } else {
                scrollBtn.style.display = "none";
            }
        });
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}


/* ==========================================
            TOAST NOTIFICATIONS
========================================== */
function showToast(message) {
    document.querySelectorAll(".toast").forEach(t => t.remove());

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = message;
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 350);
    }, 2800);
}


/* ==========================================
            HELPER FUNCTIONS
========================================== */
function formatEuro(amount) {
    if (typeof amount !== "number" || isNaN(amount)) return "0,00€";
    return amount.toFixed(2).replace(".", ",") + "€";
}

console.log("🔥 Al Karram Kebab - Sistema de pedidos online cargado correctamente.");