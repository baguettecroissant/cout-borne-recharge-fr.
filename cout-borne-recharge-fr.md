# cout-borne-recharge.fr — Project Spec

## Identité
- **Domaine** : `cout-borne-recharge.fr`
- **Type** : EMD single-niche
- **Baseline** : Borne de recharge voiture électrique — Prix installation IRVE
- **Ton éditorial** : Tech/innovation. On parle kW, temps de charge, connectivité. Ton dynamique, moderne, orienté transition écologique. Audience early-adopter connectée.
- **Persona** : Propriétaire véhicule électrique ou futur acheteur, 30-55 ans, CSP+

---

## 🎨 Design System (UNIQUE)

### Typographie
- **Headings** : `Geist` (Vercel's font, ultra-moderne, tech)
- **Body** : `DM Sans` (clean, sans-serif neutre)
- **Data** : `Geist Mono`

### Palette
```css
--primary: #2563EB;        /* Blue-600 — électrique */
--primary-light: #DBEAFE;  /* Blue-100 */
--secondary: #7C3AED;      /* Violet-600 — innovation */
--accent: #84CC16;         /* Lime-500 — green energy CTA */
--text: #0F172A;           /* Slate-900 */
--bg: #F8FAFC;             /* Slate-50 cool */
--card-bg: #FFFFFF;
--glow: rgba(37, 99, 235, 0.15); /* blue glow effect */
```

### Layout Homepage
- **Hero** : Fond sombre (slate-900) avec réseau de lignes lumineuses (style circuit), voiture EV en image centrée, titre blanc glow blue
- **Style** : Cards glassmorphism (backdrop-blur, border semi-transparent), coins 16px
- **Icônes** : Lucide React, style thin/light
- **Section separators** : Ligne horizontale avec point lumineux animé (style "charging")

### Style des composants
- **Cards** : `border-radius: 16px`, `backdrop-blur`, border 1px white/20%, shadow glow bleu
- **Boutons CTA** : Pill shape, gradient blue→violet, hover glow effect
- **Badges** : "IRVE" "7kW" "22kW" en pastilles bleu/violet
- **Footer** : Fond slate-950, grid minimal, liens lime on dark

---

## 📄 Template Page Ville (UNIQUE wording)

### Pattern titre H1
```
Installer une borne de recharge à {VILLE} — Électriciens IRVE {CODE_POSTAL}
```

### Pattern intro (spintax)
```
Vous possédez un véhicule électrique à {VILLE} ? {VARIANTE_INTRO}. 
L'installation d'une borne de recharge par un électricien certifié IRVE en {DEPT_NOM} 
coûte entre {PRIX_MIN}€ et {PRIX_MAX}€, selon la puissance choisie (7 kW, 11 kW ou 22 kW).
```

Variantes intro :
1. "Rechargez chez vous, bien plus vite qu'en station publique"
2. "Le crédit d'impôt de 300€ rend l'investissement encore plus accessible"
3. "En copropriété comme en maison individuelle, la solution existe"
4. "Les installateurs IRVE de votre quartier assurent une mise en service en 48h"

### Pattern CTA
```
Trouver un installateur IRVE à {VILLE}
```

### Modules uniques
- **Temps de charge estimé** par puissance : "Votre Renault Mégane E-Tech : 8h en 7kW, 4h en 11kW, 2h en 22kW"
- **Comparateur puissances** : tableau 7/11/22 kW
- **Check copropriété** : "Droit à la prise" explication

---

## ViteUnDevis
| # | Catégorie | CPL moy | Rev/100 leads | Taux achat |
|---|-----------|---------|--------------|-----------|
| #164 | Pose de borne de recharge | 10.6€ | 651€ | **99%** |

## Structure
```
/                                  → Homepage (dark hero)
/devis                             → Widget #164
/borne-recharge/[slug]             → Pages villes (35K+)
/guides + /guides/[slug]
/marques + /marques/[slug]
/annuaire + /annuaire/[slug]
/faq · /mentions-legales · /sitemap.xml + /sitemap/[id]
```

## Guides (8)
1. Prix borne de recharge 2026 : installation complète
2. 7 kW vs 11 kW vs 22 kW : quelle puissance pour vous ?
3. Crédit d'impôt borne + programme ADVENIR + MaPrimeRénov'
4. Installation en copropriété : droit à la prise et démarches
5. Borne en maison individuelle : guide complet
6. Wallbox vs prise renforcée : comparatif honnête
7. Temps de charge par modèle de voiture électrique
8. Certification IRVE : pourquoi c'est obligatoire

## Marques : Wallbox (Pulsar), Schneider EVlink, Legrand Green'up, Hager Witty, ABB Terra

## Maillage externe
- `cout-panneau-photovoltaique.fr` → "recharger avec le solaire"
