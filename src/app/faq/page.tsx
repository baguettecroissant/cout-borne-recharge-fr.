import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "FAQ Borne de Recharge — Questions Fréquentes | Cout-Borne-Recharge.fr",
    description: "Toutes les réponses sur l'installation de bornes de recharge IRVE : prix, puissances, aides, copropriété, certification IRVE.",
    alternates: {
        canonical: "https://www.cout-borne-recharge.fr/faq",
    },
};

const faqCategories = [
    {
        title: "💰 Prix & Budget",
        questions: [
            { q: "Combien coûte une borne de recharge en 2026 ?", a: "L'installation complète coûte entre 1 200€ (7 kW) et 2 500€ (22 kW), fourniture et pose comprises par un électricien IRVE certifié." },
            { q: "Quelles aides financières existent ?", a: "Crédit d'impôt de 300€ par point de charge, programme ADVENIR en copropriété (jusqu'à 50%), TVA réduite à 5,5% pour les logements de plus de 2 ans. Ces aides sont cumulables." },
            { q: "Combien coûte la recharge à domicile vs en station publique ?", a: "En moyenne, la recharge à domicile coûte 2 à 3€ pour 100 km (heures creuses), contre 8 à 12€ sur une borne publique rapide. Soit 3 à 4 fois moins cher." },
            { q: "La prise renforcée est-elle une bonne alternative économique ?", a: "La prise renforcée (300-500€ installée) est un bon compromis pour les petits budgets, mais elle charge 2x plus lentement (3,7 kW vs 7 kW minimum en wallbox). Elle reste éligible au crédit d'impôt." },
        ]
    },
    {
        title: "⚡ Puissance & Technique",
        questions: [
            { q: "7 kW, 11 kW ou 22 kW : quelle puissance choisir ?", a: "Le 7 kW monophasé est suffisant pour 80% des particuliers (recharge complète la nuit en 7-8h). Le 11 kW nécessite du triphasé et convient aux gros rouleurs. Le 22 kW est réservé à l'usage professionnel ou aux véhicules compatibles." },
            { q: "Faut-il passer en triphasé pour 11 ou 22 kW ?", a: "Oui, le 11 kW et le 22 kW nécessitent une alimentation triphasée. Le passage monophasé → triphasé chez Enedis est gratuit si votre installation le permet, sinon comptez 150-200€." },
            { q: "Quelle est la durée de vie d'une borne de recharge ?", a: "Une borne de bonne qualité (Wallbox, Schneider, Legrand) a une durée de vie de 10 à 15 ans, soit 10 000 à 15 000 cycles de charge. La garantie constructeur est généralement de 2 à 3 ans." },
            { q: "Ma borne peut-elle charger ma voiture et mon véhicule utilitaire ?", a: "Oui, toutes les bornes IRVE utilisent le connecteur Type 2, standard européen universel. Elles sont compatibles avec tous les véhicules électriques et hybrides rechargeables du marché." },
        ]
    },
    {
        title: "🏗️ Installation",
        questions: [
            { q: "Combien de temps dure l'installation ?", a: "L'installation proprement dite dure entre 2 et 4 heures. Il faut compter 1 à 2 semaines entre le premier contact et la mise en service (visite technique, commande du matériel)." },
            { q: "Faut-il un installateur certifié IRVE ?", a: "Oui, c'est obligatoire depuis 2017 pour toute borne supérieure à 3,7 kW. Sans certification IRVE, vous ne bénéficiez d'aucune aide (crédit d'impôt, ADVENIR) et votre assurance peut refuser la couverture." },
            { q: "Qu'est-ce que le CONSUEL ?", a: "Le CONSUEL est l'attestation de conformité électrique délivrée après installation. Votre installateur IRVE effectue les tests et vous remet ce document, nécessaire pour votre assurance et votre tranquillité." },
            { q: "Peut-on installer une borne soi-même ?", a: "Techniquement possible pour une prise renforcée, mais fortement déconseillé. Pour une wallbox, c'est illégal sans qualification IRVE. Vous perdez toutes les aides et votre assurance ne vous couvrira pas en cas de sinistre." },
        ]
    },
    {
        title: "🏢 Copropriété",
        questions: [
            { q: "Peut-on installer une borne en copropriété ?", a: "Oui, le 'droit à la prise' (loi 2014) protège tout copropriétaire souhaitant installer une borne sur sa place de parking. La copropriété ne peut s'y opposer que pour un motif légitime et sérieux." },
            { q: "Qui paie l'installation en copropriété ?", a: "L'installation individuelle (borne + câble) est à la charge du copropriétaire. L'infrastructure collective (colonne électrique) peut être pré-financée par la copropriété. Le programme ADVENIR finance jusqu'à 50% des coûts." },
            { q: "Combien de temps prennent les démarches en copro ?", a: "Comptez 3 à 6 mois entre l'envoi du courrier au syndic et la réalisation des travaux. Le principal délai est l'inscription à l'AG (qui se tient 1 à 2 fois par an)." },
        ]
    },
    {
        title: "🔌 Après l'installation",
        questions: [
            { q: "Quelle est la consommation électrique d'une borne ?", a: "Pour un trajet quotidien de 40 km, comptez environ 8 kWh par jour, soit 1,5€ en heures creuses. Sur un mois, cela représente environ 45€, contre 120€ de carburant pour un véhicule thermique équivalent." },
            { q: "Peut-on piloter sa borne à distance ?", a: "Oui, les bornes connectées (Wallbox, Hager Witty) proposent une app mobile pour programmer la charge, suivre la consommation et déclencher la recharge aux heures creuses." },
            { q: "Comment entretenir sa borne de recharge ?", a: "L'entretien est minimal : nettoyez le connecteur régulièrement, vérifiez visuellement les câbles et le boîtier une fois par an. Pas de maintenance professionnelle requise." },
        ]
    },
];

export default function FAQPage() {
    const allQuestions = faqCategories.flatMap(cat => cat.questions);

    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": allQuestions.map(q => ({
                            "@type": "Question",
                            "name": q.q,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": q.a
                            }
                        }))
                    })
                }}
            />

            <div className="container mx-auto px-4 py-16 max-w-4xl">
                <Breadcrumbs items={[{ label: "FAQ" }]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center">Foire Aux Questions</h1>
                <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                    Tout ce que vous devez savoir avant d&apos;installer votre borne de recharge.
                </p>

                {faqCategories.map((category, catIdx) => (
                    <section key={catIdx} className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">{category.title}</h2>
                        <Accordion type="single" collapsible className="w-full">
                            {category.questions.map((faq, qIdx) => (
                                <AccordionItem key={qIdx} value={`cat-${catIdx}-q-${qIdx}`}>
                                    <AccordionTrigger className="text-base md:text-lg font-semibold text-slate-800 text-left">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </section>
                ))}

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center mt-12">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">Vous avez encore des questions ?</h3>
                    <p className="text-slate-600 mb-6">
                        Obtenez des réponses personnalisées en demandant un devis à des installateurs IRVE de votre région.
                    </p>
                    <Link href="/devis" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                        Demander un devis gratuit →
                    </Link>
                </div>
            </div>
        </div>
    );
}
