import { Guide } from '../guides-content';

export const guideTempsCharge: Guide = {
    slug: "temps-charge-modele-voiture-electrique",
    title: "Temps de Charge par Modèle de Voiture Électrique : Tableau Complet 2026",
    excerpt: "Combien de temps pour recharger une Tesla Model 3, Renault Mégane, Peugeot e-208, Hyundai Ioniq 5 ? Tableau complet par puissance de borne (3,7 kW à 22 kW).",
    date: "2026-01-20",
    image: "/images/guides/temps-charge.webp",
    tags: ["temps-charge", "véhicule", "technique"],
    content: `
## Combien de temps pour recharger votre voiture électrique ?

Le temps de charge de votre véhicule électrique dépend de deux facteurs principaux : la **capacité de la batterie** (en kWh) et la **puissance maximale du chargeur embarqué** (en kW AC). La puissance de votre [borne de recharge](/guides/7kw-vs-11kw-vs-22kw) n'est efficace que dans la limite de ce que votre voiture peut accepter.

Ce guide répond à LA question que se posent tous les futurs propriétaires de voiture électrique : **"Combien de temps ça prend ?"**

> **⚡ Règle d'or** : le temps de charge = capacité batterie ÷ puissance de charge effective. Si votre voiture accepte max 11 kW en AC, une borne 22 kW ne chargera PAS plus vite qu'une borne 11 kW.

---

## Tableau de charge complet (20% → 80%)

Le tableau ci-dessous indique le temps de charge pour passer de **20% à 80%** de batterie (la plage de charge la plus courante et la plus efficace) :

| Véhicule | Batterie | Chargeur AC max | Prise 3,7 kW | Borne 7 kW | Borne 11 kW | Borne 22 kW |
|----------|----------|-----------------|-------------|-----------|------------|------------|
| **Dacia Spring** | 27 kWh | 6,6 kW | 4h30 | 2h30 | 2h30* | 2h30* |
| **Fiat 500e** | 42 kWh | 11 kW | 7h | 3h45 | 2h20 | 2h20* |
| **Peugeot e-208** | 50 kWh | 11 kW | 8h | 4h30 | 3h | 3h* |
| **Citroën ë-C4** | 50 kWh | 11 kW | 8h | 4h30 | 3h | 3h* |
| **Opel Mokka-e** | 50 kWh | 11 kW | 8h | 4h30 | 3h | 3h* |
| **MG4** | 64 kWh | 11 kW | 10h30 | 5h30 | 3h30 | 3h30* |
| **Renault Mégane E-Tech** | 60 kWh | 22 kW | 10h | 5h30 | 3h30 | **1h45** |
| **Tesla Model 3 SR+** | 60 kWh | 11 kW | 10h | 5h30 | 3h30 | 3h30* |
| **Tesla Model 3 LR** | 75 kWh | 11 kW | 12h | 6h30 | 4h | 4h* |
| **Tesla Model Y** | 75 kWh | 11 kW | 12h | 6h30 | 4h | 4h* |
| **BMW iX1** | 65 kWh | 22 kW | 10h30 | 5h30 | 3h30 | **1h50** |
| **BMW i4** | 84 kWh | 11 kW | 14h | 7h30 | 4h30 | 4h30* |
| **Hyundai Ioniq 5** | 77 kWh | 11 kW | 12h30 | 6h30 | 4h15 | 4h15* |
| **Kia EV6** | 77 kWh | 11 kW | 12h30 | 6h30 | 4h15 | 4h15* |
| **Volkswagen ID.4** | 77 kWh | 11 kW | 12h30 | 6h30 | 4h15 | 4h15* |
| **Mercedes EQA** | 67 kWh | 11 kW | 11h | 5h45 | 3h45 | 3h45* |
| **Volvo EX30** | 69 kWh | 11 kW | 11h | 6h | 3h50 | 3h50* |
| **Porsche Taycan** | 93 kWh | 22 kW | 15h | 8h | 5h | **2h30** |

*\\* Limité par le chargeur embarqué du véhicule. La borne 22 kW ne charge pas plus vite que le max AC du véhicule.*

---

## Comment lire ce tableau ?

### Le chargeur embarqué : le vrai goulot d'étranglement

Chaque voiture électrique possède un **chargeur embarqué** (ou "on-board charger") qui convertit le courant alternatif (AC) de votre borne en courant continu (DC) pour la batterie. Ce chargeur a une **puissance maximale** :

- **Chargeur 7 kW** : charge à 7 kW max, même sur une borne 22 kW
- **Chargeur 11 kW** : charge à 11 kW max → une borne 22 kW ne sert à rien
- **Chargeur 22 kW** : profite pleinement d'une borne 22 kW

**Concrètement** : si vous avez une Tesla Model 3 (chargeur embarqué 11 kW), investir dans une [borne 22 kW](/guides/7kw-vs-11kw-vs-22kw) est un gaspillage. Vous chargerez à la même vitesse qu'avec une borne 11 kW.

### Charge de 20% à 80% vs 0% à 100%

Les temps indiqués sont pour une charge de 20% à 80%. Pourquoi cette plage ?

- En dessous de 20%, la batterie charge légèrement moins vite (protection batterie)
- Au-dessus de 80%, la vitesse de charge **ralentit fortement** pour protéger les cellules
- La plage **20-80% représente 60% de la capacité**, ce qui suffit pour 180 à 450 km d'autonomie

Pour une charge complète (0% → 100%), multipliez les temps par environ 1,7.

---

## Quelle borne pour votre véhicule ?

### Véhicules compatibles 22 kW AC (rentabilisent une borne 22 kW)

- Renault Mégane E-Tech (22 kW)
- BMW iX1, iX3 (22 kW en option)
- Porsche Taycan (22 kW en option)
- Renault Zoé (22 kW)

→ Pour ces véhicules, une [borne 22 kW](/guides/7kw-vs-11kw-vs-22kw) a du sens : charge complète en 2h.

### Véhicules limités à 11 kW AC (pas besoin de 22 kW)

- Tesla Model 3 et Model Y (11 kW)
- Peugeot e-208, e-2008 (11 kW)
- Hyundai Ioniq 5, Kia EV6 (11 kW)
- VW ID.3, ID.4 (11 kW)
- BMW i4 (11 kW)
- Mercedes EQA, EQB (11 kW)

→ Pour ces véhicules, une [borne 11 kW](/guides/7kw-vs-11kw-vs-22kw) est le maximum utile. Le 7 kW suffit pour une recharge de nuit.

### Véhicules limités à 7 kW AC ou moins

- Dacia Spring (6,6 kW)
- Certaines versions de Fiat 500e (7,4 kW)
- Véhicules d'entrée de gamme

→ Une [borne 7 kW](/guides/7kw-vs-11kw-vs-22kw) ou même une [prise renforcée](/guides/wallbox-vs-prise-renforcee) suffit.

---

## Simulateur : temps de charge selon votre cas

### Trajet domicile-travail classique (30 km/jour)

| Borne | Énergie à recharger | Temps de charge |
|-------|---------------------|-----------------|
| Prise renforcée 3,7 kW | ~5 kWh | 1h20 |
| Borne 7 kW | ~5 kWh | 45 min |
| Borne 11 kW | ~5 kWh | 30 min |

→ Pour 30 km/jour, **toutes les solutions fonctionnent**, même la [prise renforcée](/guides/wallbox-vs-prise-renforcee).

### Usage quotidien soutenu (80 km/jour)

| Borne | Énergie à recharger | Temps de charge |
|-------|---------------------|-----------------|
| Prise renforcée 3,7 kW | ~14 kWh | 3h45 |
| Borne 7 kW | ~14 kWh | 2h |
| Borne 11 kW | ~14 kWh | 1h15 |

→ La prise renforcée suffit encore, mais la **borne 7 kW offre plus de confort**.

### Gros rouleur (150 km/jour)

| Borne | Énergie à recharger | Temps de charge |
|-------|---------------------|-----------------|
| Prise renforcée 3,7 kW | ~25 kWh | 6h45 |
| Borne 7 kW | ~25 kWh | 3h30 |
| Borne 11 kW | ~25 kWh | 2h15 |

→ La borne **7 kW minimum** est recommandée. Le 11 kW apporte un confort supplémentaire.

---

## Astuces pour optimiser votre temps de charge

### 1. Chargez en heures creuses

Programmez votre borne pour charger entre 22h et 6h. En plus de l'économie (~30%), les 8h de nuit suffisent pour recharger **55 kWh en 7 kW** — soit la quasi-totalité des batteries actuelles.

### 2. Ne chargez pas à 100% systématiquement

Maintenir la batterie entre 20% et 80% prolonge sa durée de vie et réduit le temps de charge. La plupart des constructeurs recommandent cette pratique.

### 3. Vérifiez les mises à jour logicielles

Certains constructeurs (Tesla, BMW) améliorent la vitesse de charge AC via des mises à jour OTA. Gardez votre véhicule à jour.

### 4. Préparez votre projet avec les bons chiffres

Avant de choisir votre borne, vérifiez la fiche technique de votre véhicule (puissance AC max du chargeur embarqué). C'est le seul chiffre qui compte. [Demandez un devis](/devis) adapté à votre modèle.

---

## FAQ : Temps de charge

### Puis-je recharger en une nuit avec une borne 7 kW ?
Oui dans 95% des cas. En 8h de charge (22h-6h), une borne 7 kW fournit ~55 kWh, ce qui suffit pour recharger de 0% à 100% la plupart des batteries (50-60 kWh).

### La charge rapide DC abîme-t-elle la batterie ?
La charge rapide DC (50-350 kW) en station publique est sans danger pour un usage occasionnel. Mais une utilisation quotidienne peut réduire la durée de vie de la batterie de 5-10% sur 10 ans. Privilégiez la charge AC à domicile pour l'usage quotidien.

### Mon véhicule charge-t-il moins vite en hiver ?
Oui. Par temps froid (< 5°C), le chargeur embarqué peut réduire la puissance de 10 à 20% pour protéger la batterie. Le préchauffage de la batterie (disponible sur Tesla, BMW, Hyundai) aide à maintenir des performances optimales.

---

*Dernière mise à jour : janvier 2026. Données basées sur les spécifications constructeurs officielles. [Comparez les devis pour votre installation](/devis).*
`,
};
