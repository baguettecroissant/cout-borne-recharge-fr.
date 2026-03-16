import { City } from '@/types';

/**
 * Simple string hash for deterministic selection.
 * Ensures the same city always gets the same variant (no duplicate content risk).
 */
function hashString(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
}

/**
 * Returns a deterministic string from the provided options based on a seed.
 * Same seed always produces the same result — Google-safe for pSEO.
 */
export function getDeterministicSpintax(options: string[], seed: string): string {
    const index = hashString(seed) % options.length;
    return options[index];
}

/**
 * @deprecated Use getDeterministicSpintax instead for Google-safe output
 */
export function getRandomSpintax(options: string[]): string {
    return options[Math.floor(Math.random() * options.length)];
}

/**
 * Generates an SEO-optimized intro for EV charging station pages, based on city population.
 */
export function getCityIntro(city: City): string {
    const pop = city.population || 0;

    // Tier 1: Major Cities (> 50k)
    if (pop > 50000) {
        const options = [
            `Rechargez chez vous, bien plus vite qu'en station publique. La métropole de ${city.name} dispose d'un réseau dense d'électriciens certifiés IRVE pour installer votre borne de recharge.`,
            `Le crédit d'impôt de 300€ rend l'investissement encore plus accessible. À ${city.name}, de nombreux installateurs IRVE sont disponibles pour une mise en service rapide.`,
            `En copropriété comme en maison individuelle, la solution existe. Les électriciens IRVE de ${city.name} accompagnent tous les types de projets dans le ${city.department_name}.`,
            `Les installateurs IRVE de ${city.name} assurent une mise en service en 48h. Profitez du réseau d'artisans qualifiés de cette grande agglomération de la région ${city.region}.`
        ];
        return getDeterministicSpintax(options, city.name);
    }

    // Tier 2: Cities (> 10k)
    if (pop > 10000) {
        const options = [
            `À ${city.name}, rechargez votre véhicule électrique directement chez vous grâce à une borne installée par un professionnel certifié IRVE du ${city.department_name}.`,
            `Ville dynamique du ${city.department_name}, ${city.name} bénéficie d'une excellente couverture par les installateurs IRVE de la région ${city.region}.`,
            `L'installation d'une borne de recharge à ${city.name} est simplifiée grâce aux aides ADVENIR et au crédit d'impôt. Nos partenaires IRVE interviennent rapidement.`,
            `Que vous habitiez en centre-ville ou en périphérie de ${city.name}, nos électriciens IRVE partenaires vous proposent un devis gratuit sous 48h.`
        ];
        return getDeterministicSpintax(options, city.name);
    }

    // Tier 3: Towns (> 2k)
    if (pop > 2000) {
        const options = [
            `Cadre de vie agréable à ${city.name}, où l'installation d'une borne de recharge est facilitée par les électriciens IRVE locaux du ${city.department_code}.`,
            `Située en ${city.region}, la commune de ${city.name} est bien desservie par les installateurs de bornes de recharge certifiés IRVE.`,
            `Profitez du calme de ${city.name} et rechargez votre véhicule électrique à domicile. Les aides ADVENIR couvrent une partie du coût dans le ${city.department_code}.`,
            `À ${city.name}, commune à taille humaine, bénéficiez d'un accompagnement personnalisé pour l'installation de votre borne de recharge IRVE.`
        ];
        return getDeterministicSpintax(options, city.name);
    }

    // Tier 4: Villages (> 0)
    if (pop > 0) {
        const options = [
            `Village paisible, ${city.name} est parfaitement couverte par les techniciens IRVE de la région ${city.region}, habitués à intervenir en zone rurale.`,
            `Au calme à ${city.name}, rechargez votre voiture électrique à domicile grâce à une borne installée par un pro certifié IRVE.`,
            `Vivre à ${city.name} n'empêche pas de profiter de la mobilité électrique. Nos artisans IRVE se déplacent partout dans le ${city.department_name}.`,
            `Charmante localité rurale, ${city.name} bénéficie des mêmes aides (ADVENIR, crédit d'impôt 300€) que les grandes villes pour l'installation de votre borne.`
        ];
        return getDeterministicSpintax(options, city.name);
    }

    // Tier 5: Fallback
    const options = [
        `Dans le département ${city.department_name}, ${city.name} est desservie par notre réseau d'installateurs IRVE certifiés.`,
        `Habiter à ${city.name} vous permet de bénéficier de devis gratuits pour l'installation de votre borne de recharge.`,
        `La commune de ${city.name} fait partie de notre zone d'intervention en région ${city.region} pour l'installation de bornes IRVE.`,
        `Pour votre projet de borne de recharge à ${city.name}, faites confiance aux électriciens IRVE intervenant dans le ${city.department_code}.`
    ];
    return getDeterministicSpintax(options, city.name);
}
