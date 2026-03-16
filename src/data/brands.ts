export interface Brand {
    name: string;
    slug: string;
    tagline: string;
    countryFlag: string;
    founded: string;
    qualityRating: number;
    savRating: number;
    priceRating: number;
    warranty: string;
    priceRange: {
        wallbox7: string;
        wallbox22: string;
    };
    pros: string[];
    cons: string[];
    description: string;
    models: string[];
    connectivity: string;
}

export const BRANDS: Brand[] = [
    {
        name: "Wallbox",
        slug: "wallbox",
        tagline: "La référence connectée, design et intelligente",
        countryFlag: "🇪🇸",
        founded: "2015",
        qualityRating: 5,
        savRating: 4,
        priceRating: 3,
        warranty: "2 ans (ext. 5 ans)",
        priceRange: { wallbox7: "800 € – 1 100 €", wallbox22: "1 200 € – 1 600 €" },
        pros: [
            "Design compact et élégant (Pulsar Plus)",
            "App mobile complète (suivi conso, programmation)",
            "Compatible tous véhicules (Type 2)",
            "Charge solaire intelligente avec myWallbox",
        ],
        cons: [
            "Prix plus élevé que la concurrence",
            "SAV parfois lent en France",
        ],
        description: "Wallbox est le leader mondial des bornes de recharge résidentielles. Le Pulsar Plus est le modèle le plus vendu en Europe grâce à sa taille compacte (mini-PC), sa connectivité Wi-Fi/Bluetooth et son app mobile ultra-complète. Idéal pour les propriétaires tech-savvy.",
        models: ["Pulsar Plus 7,4kW", "Pulsar Plus 22kW", "Copper SB (bidirectionnel)"],
        connectivity: "Wi-Fi + Bluetooth + App myWallbox",
    },
    {
        name: "Schneider Electric",
        slug: "schneider-evlink",
        tagline: "La robustesse industrielle française",
        countryFlag: "🇫🇷",
        founded: "1836",
        qualityRating: 5,
        savRating: 5,
        priceRating: 3,
        warranty: "3 ans",
        priceRange: { wallbox7: "900 € – 1 200 €", wallbox22: "1 400 € – 1 800 €" },
        pros: [
            "Fiabilité industrielle (expert mondial de l'électricité)",
            "Excellente résistance intempéries (IP54)",
            "SAV français réactif",
            "Compatible OCPP pour la gestion multi-bornes",
        ],
        cons: [
            "Design moins moderne que Wallbox",
            "App mobile basique",
        ],
        description: "Schneider Electric, géant français de la gestion de l'énergie, propose la gamme EVlink. Construites pour durer, ces bornes sont prisées des installateurs IRVE pour leur fiabilité et leur compatibilité avec les standards ouverts (OCPP).",
        models: ["EVlink Home 7,4kW", "EVlink Wallbox 11kW", "EVlink Pro AC 22kW"],
        connectivity: "Wi-Fi + OCPP",
    },
    {
        name: "Legrand",
        slug: "legrand-greenup",
        tagline: "Du prêt-à-brancher à la wallbox premium",
        countryFlag: "🇫🇷",
        founded: "1860",
        qualityRating: 4,
        savRating: 5,
        priceRating: 5,
        warranty: "2 ans",
        priceRange: { wallbox7: "400 € – 800 €", wallbox22: "1 000 € – 1 400 €" },
        pros: [
            "Gamme Green'up très accessible (dès 400€)",
            "Prise renforcée idéale pour les petits budgets",
            "Marque de confiance (leader de l'appareillage en France)",
            "Installation simple et rapide",
        ],
        cons: [
            "Connectivité limitée sur les modèles d'entrée",
            "Moins de puissance max que la concurrence",
        ],
        description: "Legrand, N°1 français de l'appareillage électrique, propose la gamme Green'up allant de la simple prise renforcée (idéale en dépannage) à la wallbox complète. Le meilleur rapport qualité-prix du marché. Parfait pour un premier investissement.",
        models: ["Green'up Prise renforcée 3,7kW", "Green'up Premium 7,4kW", "Green'up Premium 22kW"],
        connectivity: "Basique (certains modèles Wi-Fi)",
    },
    {
        name: "Hager",
        slug: "hager-witty",
        tagline: "La connectivité au service de l'énergie",
        countryFlag: "🇩🇪",
        founded: "1955",
        qualityRating: 4,
        savRating: 4,
        priceRating: 4,
        warranty: "3 ans",
        priceRange: { wallbox7: "700 € – 1 000 €", wallbox22: "1 100 € – 1 500 €" },
        pros: [
            "Gestion dynamique de l'énergie (évite le dépassement)",
            "Design discret et soigné",
            "Configuration via app Hager Witty",
            "Compatible charge solaire avec compteur d'énergie",
        ],
        cons: [
            "Moins connue du grand public",
            "Distribution moins large que Legrand/Schneider",
        ],
        description: "Hager, spécialiste allemand des solutions électriques, propose la gamme Witty. Son point fort : la gestion dynamique de la charge qui ajuste automatiquement la puissance pour éviter de faire disjoncter votre installation. Parfait en rénovation.",
        models: ["Witty Start 7,4kW", "Witty Share 22kW", "Witty Park (copro)"],
        connectivity: "Wi-Fi + Bluetooth + App Hager Witty",
    },
    {
        name: "ABB",
        slug: "abb-terra",
        tagline: "La puissance suisse pour les pros et les particuliers",
        countryFlag: "🇨🇭",
        founded: "1988",
        qualityRating: 5,
        savRating: 4,
        priceRating: 2,
        warranty: "3 ans",
        priceRange: { wallbox7: "900 € – 1 300 €", wallbox22: "1 500 € – 2 000 €" },
        pros: [
            "Qualité de construction premium (IP55)",
            "Idéale aussi pour usage professionnel",
            "Large gamme DC (charge rapide)",
            "Conformité OCPP 1.6 / 2.0",
        ],
        cons: [
            "Prix le plus élevé du comparatif",
            "Surdimensionnée pour un usage purement domestique",
        ],
        description: "ABB, géant suisse de l'ingénierie, conçoit la gamme Terra. Conçues pour résister à un usage intensif, ces bornes sont populaires en entreprise et en copropriété. La Terra AC Wallbox peut aussi convenir aux particuliers exigeants.",
        models: ["Terra AC Wallbox 7,4kW", "Terra AC Wallbox 22kW", "Terra DC (50-150kW)"],
        connectivity: "Wi-Fi + 4G + OCPP 1.6/2.0",
    },
];
