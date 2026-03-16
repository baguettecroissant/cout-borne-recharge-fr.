import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { CheckCircle, Shield, Clock, Zap } from "lucide-react";

export const metadata: Metadata = {
    title: "Devis Borne de Recharge — Comparez les Prix IRVE | Cout-Borne-Recharge.fr",
    description: "Obtenez jusqu'à 3 devis gratuits d'électriciens IRVE certifiés. Comparez les prix pour installer votre borne de recharge. Sans engagement.",
    alternates: {
        canonical: "https://www.cout-borne-recharge.fr/devis",
    },
};

export default function DevisPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-slate-900 py-16">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Demandez vos devis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">gratuits</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Jusqu&apos;à 3 propositions d&apos;électriciens certifiés IRVE près de chez vous, en moins de 48h.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <Breadcrumbs items={[{ label: "Devis Gratuit" }]} />

                {/* Trust badges */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-xl">
                        <CheckCircle className="h-8 w-8 text-blue-600 mb-2" />
                        <span className="text-sm font-medium text-slate-700">100% Gratuit</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-xl">
                        <Shield className="h-8 w-8 text-blue-600 mb-2" />
                        <span className="text-sm font-medium text-slate-700">IRVE Certifié</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-xl">
                        <Clock className="h-8 w-8 text-blue-600 mb-2" />
                        <span className="text-sm font-medium text-slate-700">Réponse 48h</span>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-xl">
                        <Zap className="h-8 w-8 text-blue-600 mb-2" />
                        <span className="text-sm font-medium text-slate-700">Sans engagement</span>
                    </div>
                </div>

                {/* Widget */}
                <ViteUnDevisWidget />

                {/* SEO Content */}
                <div className="prose prose-lg prose-slate max-w-none mt-16">
                    <h2>Pourquoi comparer les devis de bornes de recharge ?</h2>
                    <p>
                        Le prix d&apos;installation d&apos;une borne IRVE varie considérablement d&apos;un installateur à l&apos;autre : de <strong>1 200€ à 2 500€</strong> pour une même prestation. En comparant au moins 3 devis, vous vous assurez d&apos;obtenir le meilleur rapport qualité-prix.
                    </p>
                    <h3>Comment fonctionne notre comparateur ?</h3>
                    <ol>
                        <li><strong>Décrivez votre projet</strong> (type de logement, puissance souhaitée, emplacement)</li>
                        <li><strong>Recevez jusqu&apos;à 3 devis</strong> d&apos;électriciens IRVE certifiés de votre secteur</li>
                        <li><strong>Comparez et choisissez</strong> l&apos;offre qui correspond à vos besoins et votre budget</li>
                    </ol>
                    <h3>Les aides déduites dans les devis</h3>
                    <p>
                        Nos partenaires sont formés pour intégrer les aides dans leurs propositions : crédit d&apos;impôt de 300€, TVA réduite à 5,5%, programme ADVENIR en copropriété. Le prix affiché est souvent le reste à charge réel.
                    </p>
                </div>
            </div>
        </div>
    );
}
