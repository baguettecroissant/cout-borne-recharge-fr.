/**
 * Données pour le calculateur de temps de charge — Bornes de recharge VE
 * Sources : constructeurs, AVERE France, 2026
 */

/* ─────────────── Véhicules électriques populaires ─────────────── */

export interface VehiculeEV {
  key: string;
  marque: string;
  modele: string;
  batterie_kwh: number;         // Capacité batterie kWh
  chargeur_ac_kw: number;       // Puissance max AC embarquée (kW)
  conso_kwh_100km: number;      // Consommation mixte (kWh/100km)
  autonomie_km: number;         // Autonomie WLTP (km)
  categorie: "citadine" | "compacte" | "suv" | "berline" | "utilitaire";
  emoji: string;
}

export const VEHICULES_EV: VehiculeEV[] = [
  // Citadines
  { key: "renault-5", marque: "Renault", modele: "5 E-Tech", batterie_kwh: 52, chargeur_ac_kw: 11, conso_kwh_100km: 14.9, autonomie_km: 410, categorie: "citadine", emoji: "🚗" },
  { key: "peugeot-e208", marque: "Peugeot", modele: "e-208", batterie_kwh: 51, chargeur_ac_kw: 11, conso_kwh_100km: 15.2, autonomie_km: 400, categorie: "citadine", emoji: "🚗" },
  { key: "fiat-500e", marque: "Fiat", modele: "500 Électrique", batterie_kwh: 42, chargeur_ac_kw: 11, conso_kwh_100km: 14.8, autonomie_km: 320, categorie: "citadine", emoji: "🚗" },
  { key: "dacia-spring", marque: "Dacia", modele: "Spring", batterie_kwh: 26.8, chargeur_ac_kw: 7, conso_kwh_100km: 13.5, autonomie_km: 230, categorie: "citadine", emoji: "🚗" },
  { key: "mini-cooper-e", marque: "Mini", modele: "Cooper SE", batterie_kwh: 54.2, chargeur_ac_kw: 11, conso_kwh_100km: 15.4, autonomie_km: 402, categorie: "citadine", emoji: "🚗" },
  { key: "citroen-ec3", marque: "Citroën", modele: "ë-C3", batterie_kwh: 44, chargeur_ac_kw: 7, conso_kwh_100km: 15.5, autonomie_km: 326, categorie: "citadine", emoji: "🚗" },

  // Compactes
  { key: "tesla-model3", marque: "Tesla", modele: "Model 3", batterie_kwh: 60, chargeur_ac_kw: 11, conso_kwh_100km: 14.4, autonomie_km: 513, categorie: "compacte", emoji: "⚡" },
  { key: "tesla-model3-lr", marque: "Tesla", modele: "Model 3 Grande Autonomie", batterie_kwh: 79, chargeur_ac_kw: 11, conso_kwh_100km: 14.0, autonomie_km: 629, categorie: "compacte", emoji: "⚡" },
  { key: "mg4", marque: "MG", modele: "MG4", batterie_kwh: 64, chargeur_ac_kw: 11, conso_kwh_100km: 15.8, autonomie_km: 450, categorie: "compacte", emoji: "⚡" },
  { key: "volkswagen-id3", marque: "Volkswagen", modele: "ID.3", batterie_kwh: 77, chargeur_ac_kw: 11, conso_kwh_100km: 15.5, autonomie_km: 559, categorie: "compacte", emoji: "⚡" },
  { key: "hyundai-ioniq5", marque: "Hyundai", modele: "IONIQ 5", batterie_kwh: 77.4, chargeur_ac_kw: 11, conso_kwh_100km: 16.7, autonomie_km: 507, categorie: "compacte", emoji: "⚡" },
  { key: "byd-dolphin", marque: "BYD", modele: "Dolphin", batterie_kwh: 60.4, chargeur_ac_kw: 11, conso_kwh_100km: 14.3, autonomie_km: 427, categorie: "compacte", emoji: "⚡" },

  // SUV
  { key: "tesla-modely", marque: "Tesla", modele: "Model Y", batterie_kwh: 60, chargeur_ac_kw: 11, conso_kwh_100km: 15.7, autonomie_km: 455, categorie: "suv", emoji: "🚙" },
  { key: "tesla-modely-lr", marque: "Tesla", modele: "Model Y Grande Autonomie", batterie_kwh: 79, chargeur_ac_kw: 11, conso_kwh_100km: 15.2, autonomie_km: 600, categorie: "suv", emoji: "🚙" },
  { key: "peugeot-e3008", marque: "Peugeot", modele: "E-3008", batterie_kwh: 73, chargeur_ac_kw: 11, conso_kwh_100km: 17.1, autonomie_km: 527, categorie: "suv", emoji: "🚙" },
  { key: "renault-scenic", marque: "Renault", modele: "Scenic E-Tech", batterie_kwh: 87, chargeur_ac_kw: 22, conso_kwh_100km: 17.2, autonomie_km: 625, categorie: "suv", emoji: "🚙" },
  { key: "volkswagen-id4", marque: "Volkswagen", modele: "ID.4", batterie_kwh: 77, chargeur_ac_kw: 11, conso_kwh_100km: 17.1, autonomie_km: 520, categorie: "suv", emoji: "🚙" },
  { key: "kia-ev6", marque: "Kia", modele: "EV6", batterie_kwh: 77.4, chargeur_ac_kw: 11, conso_kwh_100km: 16.5, autonomie_km: 528, categorie: "suv", emoji: "🚙" },
  { key: "volvo-ex30", marque: "Volvo", modele: "EX30", batterie_kwh: 69, chargeur_ac_kw: 11, conso_kwh_100km: 16.1, autonomie_km: 476, categorie: "suv", emoji: "🚙" },

  // Berlines
  { key: "bmw-i4", marque: "BMW", modele: "i4", batterie_kwh: 83.9, chargeur_ac_kw: 11, conso_kwh_100km: 16.1, autonomie_km: 590, categorie: "berline", emoji: "🏎️" },
  { key: "mercedes-eqa", marque: "Mercedes", modele: "EQA", batterie_kwh: 70.5, chargeur_ac_kw: 11, conso_kwh_100km: 17.0, autonomie_km: 459, categorie: "berline", emoji: "🏎️" },
  { key: "byd-seal", marque: "BYD", modele: "Seal", batterie_kwh: 82.5, chargeur_ac_kw: 11, conso_kwh_100km: 16.0, autonomie_km: 570, categorie: "berline", emoji: "🏎️" },

  // Utilitaires
  { key: "citroen-eberlingo", marque: "Citroën", modele: "ë-Berlingo", batterie_kwh: 50, chargeur_ac_kw: 11, conso_kwh_100km: 19.5, autonomie_km: 285, categorie: "utilitaire", emoji: "🚐" },
  { key: "renault-kangoo-ev", marque: "Renault", modele: "Kangoo E-Tech", batterie_kwh: 45, chargeur_ac_kw: 22, conso_kwh_100km: 18.0, autonomie_km: 285, categorie: "utilitaire", emoji: "🚐" },
];

/* ─────────────── Puissances de borne ─────────────── */

export interface BornePuissance {
  key: string;
  label: string;
  puissance_kw: number;
  type: "prise" | "wallbox" | "pro";
  installation: string;
  description: string;
  prixMoyen: number; // € pose comprise
  emoji: string;
}

export const BORNES: BornePuissance[] = [
  {
    key: "prise-renforcee",
    label: "Prise renforcée",
    puissance_kw: 3.7,
    type: "prise",
    installation: "Monophasé",
    description: "Green'Up Legrand — Solution économique, recharge lente",
    prixMoyen: 450,
    emoji: "🔌",
  },
  {
    key: "wallbox-7kw",
    label: "Wallbox 7 kW",
    puissance_kw: 7,
    type: "wallbox",
    installation: "Monophasé",
    description: "Le standard domestique — Recharge la nuit, autonomie le matin",
    prixMoyen: 1400,
    emoji: "⚡",
  },
  {
    key: "wallbox-11kw",
    label: "Wallbox 11 kW",
    puissance_kw: 11,
    type: "wallbox",
    installation: "Triphasé",
    description: "Recharge semi-rapide — Idéal pour les gros rouleurs",
    prixMoyen: 1600,
    emoji: "🔋",
  },
  {
    key: "wallbox-22kw",
    label: "Wallbox 22 kW",
    puissance_kw: 22,
    type: "pro",
    installation: "Triphasé",
    description: "Recharge rapide — Professionnel ou gros besoin",
    prixMoyen: 2200,
    emoji: "⚡⚡",
  },
];

/* ─────────────── Tarifs électricité ─────────────── */

export const TARIFS_ELECTRICITE = {
  base: { label: "Tarif de base", prix_kwh: 0.2516, description: "Tarif réglementé 2026" },
  hc: { label: "Heures creuses", prix_kwh: 0.2068, description: "Nuit (22h-6h) — Été inclus" },
  tempo_hc: { label: "Tempo Heures Creuses", prix_kwh: 0.1296, description: "Jours bleus HC — Le moins cher" },
};

/* ─────────────── Catégories ─────────────── */

export const CATEGORIES_LABEL: Record<string, { label: string; emoji: string }> = {
  citadine: { label: "Citadines", emoji: "🚗" },
  compacte: { label: "Compactes & Berlines", emoji: "⚡" },
  suv: { label: "SUV & Crossovers", emoji: "🚙" },
  berline: { label: "Berlines Premium", emoji: "🏎️" },
  utilitaire: { label: "Utilitaires", emoji: "🚐" },
};

/* ─────────────── Moteur de calcul ─────────────── */

export interface ChargeInput {
  batterie_kwh: number;       // Capacité batterie
  chargeur_ac_kw: number;     // Puissance max du chargeur embarqué
  borne_kw: number;           // Puissance de la borne
  soc_depart: number;         // % de charge au départ (0-100)
  soc_arrivee: number;        // % de charge cible (0-100)
  tarif_kwh: number;          // Prix du kWh
  conso_kwh_100km: number;    // Consommation du véhicule
}

export interface ChargeResult {
  energie_necessaire_kwh: number;  // kWh à charger
  puissance_effective_kw: number;  // min(borne, chargeur embarqué)
  temps_charge_h: number;          // Heures de charge
  temps_charge_min: number;        // version en minutes
  cout_charge_euros: number;       // Coût en €
  km_recuperes: number;            // Autonomie récupérée (km)
  cout_100km: number;              // Coût aux 100 km
  rendement_pct: number;           // Rendement de charge estimé (%)
}

export function calculateChargeTime(input: ChargeInput): ChargeResult {
  // Rendement de charge AC typique : 88-93%
  const rendement = 0.90;

  // Delta SOC
  const delta_soc = (input.soc_arrivee - input.soc_depart) / 100;
  const energie_nette = input.batterie_kwh * delta_soc;
  const energie_brute = energie_nette / rendement; // énergie consommée du réseau

  // Puissance effective = min(borne, chargeur embarqué)
  const puissance_effective = Math.min(input.borne_kw, input.chargeur_ac_kw);

  // Temps de charge — on applique un facteur de ralentissement au-delà de 80%
  let temps_h: number;
  if (input.soc_arrivee <= 80) {
    // Charge linéaire
    temps_h = energie_brute / puissance_effective;
  } else {
    // Phase 1: 0-80% linéaire
    const delta_phase1 = Math.max(0, (Math.min(80, input.soc_arrivee) - input.soc_depart) / 100);
    const e_phase1 = (input.batterie_kwh * delta_phase1) / rendement;
    const t_phase1 = e_phase1 / puissance_effective;

    // Phase 2: 80-100% ralentie (puissance réduite ~60%)
    const delta_phase2 = (input.soc_arrivee - Math.max(80, input.soc_depart)) / 100;
    if (delta_phase2 > 0) {
      const e_phase2 = (input.batterie_kwh * delta_phase2) / rendement;
      const t_phase2 = e_phase2 / (puissance_effective * 0.6);
      temps_h = t_phase1 + t_phase2;
    } else {
      temps_h = t_phase1;
    }
  }

  const temps_min = Math.round(temps_h * 60);
  const cout = energie_brute * input.tarif_kwh;
  const km_recuperes = energie_nette / input.conso_kwh_100km * 100;
  const cout_100km = (input.conso_kwh_100km * input.tarif_kwh) / rendement;

  return {
    energie_necessaire_kwh: Math.round(energie_brute * 10) / 10,
    puissance_effective_kw: puissance_effective,
    temps_charge_h: Math.round(temps_h * 10) / 10,
    temps_charge_min: temps_min,
    cout_charge_euros: Math.round(cout * 100) / 100,
    km_recuperes: Math.round(km_recuperes),
    cout_100km: Math.round(cout_100km * 100) / 100,
    rendement_pct: rendement * 100,
  };
}

/** Format durée lisible */
export function formatDuree(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h}h`;
  return `${h}h${m.toString().padStart(2, "0")}`;
}
