import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales | Cout-Borne-Recharge.fr",
    description: "Mentions légales du site cout-borne-recharge.fr.",
    alternates: {
        canonical: "https://www.cout-borne-recharge.fr/mentions-legales",
    },
};

export default function MentionsLegalesPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-16 max-w-3xl prose prose-lg prose-slate">
                <h1>Mentions Légales</h1>

                <h2>Éditeur du site</h2>
                <p>
                    Le site <strong>cout-borne-recharge.fr</strong> est édité par un particulier dans le cadre d&apos;une activité d&apos;information et de mise en relation. Les informations publiées sont fournies à titre indicatif et ne constituent pas un engagement contractuel.
                </p>

                <h2>Hébergement</h2>
                <p>
                    Ce site est hébergé par Vercel Inc., 440 N Bayard St Suite 202, Wilmington, DE 19801, États-Unis.
                </p>

                <h2>Propriété intellectuelle</h2>
                <p>
                    L&apos;ensemble du contenu de ce site (textes, images, graphiques, logo) est protégé par le droit d&apos;auteur. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
                </p>

                <h2>Responsabilité</h2>
                <p>
                    Les prix et informations communiqués sur ce site sont donnés à titre indicatif. Ils ne constituent en aucun cas un devis ni un engagement de prix. Seul le devis établi par un professionnel qualifié fait foi.
                </p>

                <h2>Données personnelles</h2>
                <p>
                    Les données collectées via les formulaires de ce site sont transmises à nos partenaires installateurs dans le seul but de vous fournir des devis personnalisés. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données.
                </p>

                <h2>Cookies</h2>
                <p>
                    Ce site utilise des cookies à des fins statistiques et de bon fonctionnement. En poursuivant votre navigation, vous acceptez l&apos;utilisation de ces cookies.
                </p>

                <h2>Liens hypertextes</h2>
                <p>
                    Ce site contient des liens vers des sites tiers. L&apos;éditeur ne peut être tenu responsable du contenu de ces sites externes.
                </p>
            </div>
        </div>
    );
}
