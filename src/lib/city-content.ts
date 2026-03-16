import { City } from '@/types';
import { getDeterministicSpintax } from './text-utils';

/**
 * Generates a city-specific unique content block for enrich pSEO pages.
 * Uses deterministic selection based on city name for Google consistency.
 */

/** Regional price adjustment factor — simulates real market differences */
function getRegionalPriceFactor(region: string): { factor: number; label: string } {
    const map: Record<string, { factor: number; label: string }> = {
        'Île-de-France': { factor: 1.15, label: 'supérieur à la moyenne nationale (+15%)' },
        'Provence-Alpes-Côte d\'Azur': { factor: 1.10, label: 'légèrement supérieur à la moyenne (+10%)' },
        'Auvergne-Rhône-Alpes': { factor: 1.05, label: 'proche de la moyenne nationale (+5%)' },
        'Occitanie': { factor: 0.95, label: 'légèrement inférieur à la moyenne (-5%)' },
        'Nouvelle-Aquitaine': { factor: 0.95, label: 'légèrement inférieur à la moyenne (-5%)' },
        'Bretagne': { factor: 0.92, label: 'inférieur à la moyenne nationale (-8%)' },
        'Normandie': { factor: 0.93, label: 'inférieur à la moyenne nationale (-7%)' },
        'Hauts-de-France': { factor: 0.95, label: 'légèrement inférieur à la moyenne (-5%)' },
        'Grand Est': { factor: 0.97, label: 'dans la moyenne nationale' },
        'Pays de la Loire': { factor: 0.95, label: 'légèrement inférieur à la moyenne (-5%)' },
        'Centre-Val de Loire': { factor: 0.93, label: 'inférieur à la moyenne nationale (-7%)' },
        'Bourgogne-Franche-Comté': { factor: 0.93, label: 'inférieur à la moyenne nationale (-7%)' },
        'Corse': { factor: 1.20, label: 'supérieur à la moyenne nationale (+20%)' },
    };
    return map[region] || { factor: 1.0, label: 'dans la moyenne nationale' };
}

/** Get city-specific price ranges */
export function getCityPrices(city: City) {
    const { factor } = getRegionalPriceFactor(city.region);
    return {
        min7: Math.round(1200 * factor / 50) * 50,
        max7: Math.round(1600 * factor / 50) * 50,
        min11: Math.round(1400 * factor / 50) * 50,
        max11: Math.round(1800 * factor / 50) * 50,
        min22: Math.round(1800 * factor / 50) * 50,
        max22: Math.round(2500 * factor / 50) * 50,
        label: getRegionalPriceFactor(city.region).label,
    };
}

/** Population tier for content adaptation */
export function getPopTier(city: City): 'metropole' | 'grande-ville' | 'ville' | 'bourg' | 'village' {
    const pop = city.population || 0;
    if (pop > 100000) return 'metropole';
    if (pop > 50000) return 'grande-ville';
    if (pop > 10000) return 'ville';
    if (pop > 2000) return 'bourg';
    return 'village';
}

/** Gets an EV adoption context sentence based on city population */
export function getEvAdoptionContext(city: City): string {
    const pop = city.population || 0;
    const tier = getPopTier(city);
    
    const contextMap: Record<string, string[]> = {
        'metropole': [
            `Avec plus de ${Math.round(pop / 1000)}k habitants, ${city.name} fait partie des villes françaises les plus dynamiques en matière de mobilité électrique. Le nombre de bornes publiques est en forte croissance, mais la recharge à domicile reste la solution la plus économique.`,
            `Les ${Math.round(pop / 1000)}k habitants de ${city.name} bénéficient d'un réseau croissant de bornes publiques, mais recharger chez soi coûte 3 à 5 fois moins cher qu'en station rapide.`,
            `À ${city.name}, grande métropole du ${city.department_name}, l'adoption du véhicule électrique s'accélère. En 2026, plus de 12% des immatriculations neuves dans la région ${city.region} concernent des véhicules 100% électriques.`,
        ],
        'grande-ville': [
            `Agglomération dynamique de la région ${city.region}, ${city.name} voit la demande d'installation de bornes IRVE croître de plus de 30% par an. Les installateurs certifiés du ${city.department_code} proposent des interventions rapides.`,
            `Avec une population de ${(pop / 1000).toFixed(0)}k habitants, ${city.name} dispose d'un bon réseau d'installateurs IRVE qualifiés. La concurrence entre les professionnels du ${city.department_name} vous permet d'obtenir des tarifs compétitifs.`,
            `${city.name}, ville importante du ${city.department_name}, compte de plus en plus de résidents équipés d'une borne à domicile. L'économie par rapport à la recharge publique peut atteindre 150€ par mois.`,
        ],
        'ville': [
            `À ${city.name}, commune de ${(pop / 1000).toFixed(0)}k habitants dans le ${city.department_name}, les installateurs IRVE de la région ${city.region} interviennent régulièrement. La forte proportion de maisons individuelles facilite les installations.`,
            `Dans une ville comme ${city.name}, la majorité des installations se font en maison individuelle avec garage, ce qui simplifie la pose et réduit le coût du câblage. Le département ${city.department_code} bénéficie d'une bonne couverture en installateurs IRVE.`,
            `${city.name} (${city.department_name}) combine cadre de vie agréable et proximité des installateurs qualifiés. Les résidents du ${city.department_code} profitent des mêmes aides nationales que les grandes métropoles.`,
        ],
        'bourg': [
            `Commune à taille humaine, ${city.name} offre un environnement idéal pour la recharge à domicile : la plupart des logements disposent d'un garage ou d'un stationnement privatif. Les électriciens IRVE du ${city.department_name} se déplacent dans toute la zone.`,
            `À ${city.name}, commune du ${city.department_name}, l'installation d'une borne de recharge est souvent plus simple qu'en centre-ville : garage disponible, tableau électrique accessible, distance de câblage réduite.`,
            `Les habitants de ${city.name} (${city.department_code}) bénéficient d'un cadre favorable à l'installation de bornes IRVE. La proximité des parcs d'activités de la région ${city.region} assure un accès rapide aux installateurs certifiés.`,
        ],
        'village': [
            `Village du ${city.department_name}, ${city.name} est parfaitement couverte par les installateurs IRVE intervenant en zone rurale dans la région ${city.region}. La recharge à domicile est d'autant plus pertinente que les bornes publiques sont rares hors agglomération.`,
            `À ${city.name}, en dehors des grandes agglomérations du ${city.department_code}, la borne à domicile est quasiment indispensable pour rouler en électrique au quotidien. Les artisans IRVE se déplacent partout dans le département.`,
            `Charmante localité du ${city.department_name}, ${city.name} bénéficie des mêmes aides (crédit d'impôt 300€, TVA 5,5%) que les grandes villes. L'installation en maison individuelle y est généralement plus simple et moins coûteuse.`,
        ],
    };

    return getDeterministicSpintax(contextMap[tier] || contextMap['village'], city.name + '_context');
}

/** Gets a housing type insight based on population */
export function getHousingInsight(city: City): string {
    const tier = getPopTier(city);
    
    const insightMap: Record<string, string[]> = {
        'metropole': [
            `À ${city.name}, les installations en copropriété représentent environ 55% des demandes. Le « droit à la prise » facilite les démarches, et le programme ADVENIR peut couvrir jusqu'à 50% du coût.`,
            `En centre-ville de ${city.name}, la majorité des installations se font en copropriété. Les installateurs IRVE du ${city.department_code} maîtrisent parfaitement les démarches administratives (AG, droit à la prise).`,
        ],
        'grande-ville': [
            `À ${city.name}, on observe un bon équilibre entre installations en maison individuelle et en copropriété. Les deux types de projets bénéficient des mêmes aides financières.`,
            `Dans l'agglomération de ${city.name}, les copropriétés récentes sont souvent pré-équipées (loi LOM). L'installation y est donc plus rapide et moins coûteuse que dans l'ancien.`,
        ],
        'ville': [
            `À ${city.name}, la majorité des installations sont réalisées en maison individuelle. Le budget moyen est de 1 300€ à 1 500€ TTC pour une borne 7 kW, avant déduction des aides.`,
            `Les propriétaires de maisons individuelles à ${city.name} représentent la majorité des demandes de devis pour l'installation de bornes de recharge. L'accès au garage simplifie le projet.`,
        ],
        'bourg': [
            `À ${city.name}, les installations en maison avec garage fermé sont les plus courantes. Le cable court (< 10m) permet de contenir le budget entre 1 200€ et 1 400€.`,
            `La plupart des habitations à ${city.name} disposent d'un garage ou d'un carport, ce qui rend l'installation de borne particulièrement accessible et économique.`,
        ],
        'village': [
            `Dans un village comme ${city.name}, l'installation se fait quasi-exclusivement en maison individuelle. Le garage privatif rend la pose simple : souvent moins de 3 heures de travail.`,
            `L'avantage à ${city.name} : garages spacieux, tableaux électriques proches, pas de contraintes de copropriété. L'installation typique coûte entre 1 200€ et 1 500€.`,
        ],
    };

    return getDeterministicSpintax(insightMap[tier] || insightMap['village'], city.name + '_housing');
}

/** Generates a unique "why install at home?" paragraph */
export function getWhyHomeCharge(city: City): string {
    const options = [
        `Recharger à domicile à ${city.name} coûte en moyenne 2€ pour 100 km contre 8 à 12€ en borne publique rapide. Sur un an (15 000 km), c'est une économie de 900€ à 1 500€.`,
        `Avec une borne à domicile à ${city.name}, vous rechargez la nuit en heures creuses (0,20€/kWh) au lieu de payer le plein tarif en station publique. L'économie mensuelle moyenne est de 80 à 120€.`,
        `À ${city.name}, la recharge à domicile via une borne IRVE représente le meilleur rapport confort/prix : branchez le soir, repartez le matin avec 100% d'autonomie pour environ 3€ de courant.`,
        `Installer une borne chez vous à ${city.name} (${city.zip}), c'est supprimer les trajets vers les bornes publiques et diviser votre budget recharge par 3 à 5.`,
    ];
    return getDeterministicSpintax(options, city.name + '_why');
}

/** Generates city-specific pro tip */
export function getCityProTip(city: City): string {
    const pop = city.population || 0;
    const options = pop > 50000 ? [
        `En grande agglomération comme ${city.name}, comparez au moins 3 devis. La concurrence entre installateurs IRVE du ${city.department_code} est forte, et les écarts de prix peuvent atteindre 40%.`,
        `Conseil pour ${city.name} : vérifiez si votre copropriété est pré-équipée (loi LOM, bâtiments post-2017). Si oui, l'installation est plus rapide et moins chère.`,
        `À ${city.name}, les installateurs IRVE sont nombreux. Profitez-en pour négocier : demandez si la visite technique est offerte et si la borne est garantie 5 ans.`,
    ] : [
        `À ${city.name}, les installateurs IRVE de la région ${city.region} proposent souvent la visite technique gratuite. Profitez-en pour obtenir un devis précis sans engagement.`,
        `Conseil pour les habitants de ${city.name} : optez pour une borne 7 kW, amplement suffisante pour un usage quotidien, et investissez les économies dans un modèle avec pilotage intelligent (heures creuses automatiques).`,
        `En zone rurale comme ${city.name}, la borne à domicile est quasi-indispensable. Les bornes publiques les plus proches sont souvent à ${Math.max(5, Math.round(pop / 500))} km. Installez chez vous !`,
    ];
    return getDeterministicSpintax(options, city.name + '_tip');
}
