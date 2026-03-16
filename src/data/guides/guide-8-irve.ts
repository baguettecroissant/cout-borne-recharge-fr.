import { Guide } from '../guides-content';

export const guideIRVE: Guide = {
    slug: "certification-irve-obligatoire",
    title: "Certification IRVE : Pourquoi c'est Obligatoire et Comment Vérifier (Guide 2026)",
    excerpt: "Depuis 2017, seul un électricien certifié IRVE peut installer une borne > 3,7 kW. Niveaux P1/P2/P3, risques sans IRVE, comment vérifier : tout savoir.",
    date: "2026-01-15",
    image: "/images/guides/certification-irve.webp",
    tags: ["IRVE", "réglementation", "installation"],
    content: `
## Pourquoi la certification IRVE est obligatoire

Depuis le décret du **12 janvier 2017**, l'installation d'une borne de recharge de puissance supérieure à 3,7 kW doit être réalisée par un **électricien qualifié IRVE** (Infrastructure de Recharge pour Véhicule Électrique). Ce n'est pas une recommandation, c'est une **obligation légale** avec des conséquences financières et assurantielles lourdes en cas de non-respect.

> **⚠️ Le chiffre qui fait réfléchir** : un installateur non IRVE vous fait perdre en moyenne **1 260€** d'aides (300€ crédit d'impôt + 960€ ADVENIR en copropriété) pour une "économie" de 200-300€ sur le devis.

---

## Qu'est-ce que la qualification IRVE ?

La qualification IRVE est une **formation spécifique** délivrée par deux organismes agréés :
- **Qualifelec** (le plus courant)
- **AFNOR** (certification NF)

Elle certifie que l'électricien maîtrise :

### Les normes spécifiques
- **NF C 15-100** : sécurité des installations électriques basse tension
- **NF C 15-722** : installation de bornes de recharge (norme dédiée)
- **IEC 61851** : protocole de communication borne-véhicule

### Les compétences techniques
- Dimensionnement des protections électriques (différentiel type A ou F)
- Choix de la section de câble adaptée à la [puissance](/guides/7kw-vs-11kw-vs-22kw)
- Gestion de la puissance disponible (délestage, pilotage énergétique)
- Configuration des protocoles de communication (OCPP pour supervision)
- Mise en service et tests de conformité CONSUEL

---

## Les 3 niveaux de qualification IRVE

| Niveau | Puissance | Type d'installation | Usage |
|--------|-----------|---------------------|-------|
| **P1 — Basique** | ≤ 22 kW | Bornes AC sans communication spécifique | **Résidentiel individuel** |
| **P2 — Communication** | ≤ 22 kW | Bornes AC avec supervision (OCPP, gestion énergie) | **Copropriété, entreprise** |
| **P3 — Charge rapide** | > 22 kW | Bornes DC rapides | **Stations publiques, autoroutes** |

### Quel niveau pour votre projet ?

- **[Maison individuelle](/guides/borne-maison-individuelle-guide), borne simple** → P1 suffit
- **[Copropriété](/guides/installation-copropriete-droit-prise) avec pilotage énergétique** → P2 nécessaire
- **Borne partagée avec supervision** → P2 nécessaire
- **Borne publique rapide** → P3 obligatoire

Pour un projet résidentiel, un installateur **P1** couvre la majorité des besoins. Le P2 devient nécessaire dès que la borne est supervisée (gestion dynamique de la charge, répartition de puissance entre plusieurs bornes).

---

## Les risques concrets sans installateur IRVE

### 1. ❌ Perte du crédit d'impôt (300€)

L'administration fiscale exige que la facture mentionne **la qualification IRVE** de l'installateur. Sans cette mention, le [crédit d'impôt](/guides/credit-impot-advenir-maprimereno) de 300€ est systématiquement refusé.

### 2. ❌ Perte de l'aide ADVENIR (jusqu'à 960€)

Le programme [ADVENIR](/guides/credit-impot-advenir-maprimereno) ne travaille qu'avec des installateurs **labellisés ADVENIR**, ce qui implique nécessairement la qualification IRVE. Si vous êtes en [copropriété](/guides/installation-copropriete-droit-prise), vous perdez jusqu'à 960€ d'aide.

### 3. ❌ Assurance invalidée

En cas de sinistre (incendie, dégât électrique), votre assureur est en droit de refuser la prise en charge si l'installation n'a pas été réalisée par un professionnel qualifié IRVE. Certains contrats l'excluent explicitement.

### 4. ❌ Attestation CONSUEL refusée

L'attestation CONSUEL (Comité National pour la Sécurité des Usagers de l'Électricité) valide la conformité de votre installation. Sans IRVE, le CONSUEL peut refuser de délivrer l'attestation, ce qui bloque :
- La mise en service de la borne
- L'accès aux aides financières
- La revente du bien immobilier (le notaire peut la requérir)

### 5. ❌ Sécurité compromise

Une borne mal installée présente des risques réels :
- **Surchauffe du câble** (section inadaptée) → incendie
- **Absence de différentiel dédié** → électrocution
- **Perte de puissance** → charge incomplète ou interrompue
- **Défaut de terre** → danger pour les personnes

---

## Bilan financier : IRVE vs non-IRVE

| | Avec installateur IRVE | Sans IRVE |
|---|---|---|
| Prix installation | 1 400€ | 1 100€ |
| Crédit d'impôt | -300€ | ❌ 0€ |
| ADVENIR (copro) | -960€ | ❌ 0€ |
| Assurance | ✅ Valide | ❌ Risque de refus |
| CONSUEL | ✅ Délivré | ❌ Refusé |
| **Coût réel net (maison)** | **1 100€** | **1 100€** |
| **Coût réel net (copro)** | **140€** | **1 100€** |

**En maison** : le coût final est identique, mais vous gagnez la sécurité et l'assurance.
**En copropriété** : le surcoût de l'installateur IRVE est **largement compensé** par les aides ADVENIR.

---

## Comment vérifier la qualification IRVE ?

### Méthode 1 : Demandez le numéro de qualification

Tout installateur IRVE possède un **numéro de qualification** délivré par Qualifelec ou AFNOR. Demandez-le systématiquement et vérifiez :

- **Qualifelec** : [qualifelec.fr/trouver-une-entreprise](https://www.qualifelec.fr/trouver-une-entreprise/)
- **AFNOR** : [afnor.org](https://www.afnor.org)

### Méthode 2 : Vérifiez le devis et la facture

Le devis et la facture doivent obligatoirement mentionner :
- La **qualification IRVE** (niveau P1, P2 ou P3)
- Le **numéro de qualification** et l'organisme émetteur
- La **date de validité** de la qualification (renouvelée tous les 4 ans)

### Méthode 3 : Utilisez un comparateur

En passant par notre [comparateur de devis](/devis), tous les installateurs partenaires sont **vérifiés IRVE**. C'est la méthode la plus simple et la plus sûre.

---

## La formation IRVE : comment ça marche ?

Pour les électriciens qui souhaitent obtenir la qualification :

### Prérequis
- Être électricien professionnel (CAP/BEP/Bac Pro Électrotechnique ou équivalent)
- Avoir une habilitation électrique à jour (B2V, BR, BC minimum)

### Formation P1 (2 jours)
- Réglementation et normes (NF C 15-100, NF C 15-722)
- Dimensionnement des protections
- Installation et mise en service d'une borne AC
- Tests de conformité
- **Prix** : 800 – 1 200€
- **Organismes** : CNFPT, AFNOR, organismes privés agréés

### Formation P2 (3 jours)
- Tout le contenu P1 +
- Protocole OCPP (Open Charge Point Protocol)
- Gestion dynamique de la charge
- Supervision et télémaintenance
- **Prix** : 1 200 – 1 800€

### Formation P3 (5 jours)
- Tout le contenu P2 +
- Bornes DC rapides (50 à 350 kW)
- Haute tension et sécurité renforcée
- **Prix** : 2 000 – 3 000€

---

## Questions fréquentes sur la certification IRVE

### Puis-je installer une prise renforcée sans IRVE ?
Techniquement oui, car une [prise renforcée](/guides/wallbox-vs-prise-renforcee) (3,7 kW) est en dessous du seuil de 3,7 kW. Mais vous perdez le bénéfice du crédit d'impôt de 300€, ce qui est paradoxal vu le faible coût de la prise.

### Un électricien classique peut-il installer une borne avec un ami IRVE qui supervise ?
Non. Le professionnel qui **réalise** l'installation et **signe** la facture doit être lui-même qualifié IRVE. La supervision par un tiers n'est pas reconnue.

### La qualification IRVE est-elle valable à vie ?
Non. La qualification est valable **4 ans** et doit être renouvelée. Vérifiez la date de validité.

### Combien d'installateurs IRVE en France ?
En 2026, la France compte environ **15 000 installateurs IRVE qualifiés**, répartis sur tout le territoire. [Trouvez un installateur dans votre département](/annuaire).

### L'IRVE est-il obligatoire pour une borne en entreprise ?
Oui, les mêmes règles s'appliquent. Pour les bornes > 3,7 kW, l'installateur doit être IRVE. Pour les bornes avec supervision (OCPP), le niveau P2 est requis.

---

## Notre conseil

Ne prenez **jamais** le risque d'installer une borne sans installateur IRVE. L'économie apparente (200-300€ de moins sur le devis) ne compense pas :

- La **perte des aides** (300€ + jusqu'à 960€ en copropriété)
- Le **risque assurantiel** (milliers d'euros en cas de sinistre non couvert)
- Le **risque sécuritaire** (incendie, électrocution)
- L'**absence de CONSUEL** (blocage administratif)

[Demandez vos devis gratuits](/devis) et travaillez uniquement avec des installateurs certifiés. Vous ne paierez pas plus cher, et vous dormirez tranquille.

---

*Dernière mise à jour : janvier 2026. Réglementation vérifiée auprès de Qualifelec et du Journal Officiel. [Consultez notre annuaire d'installateurs IRVE](/annuaire) par département.*
`,
};
