import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Calculateur Temps de Charge Voiture Électrique 2026 | Simulateur Gratuit",
    description:
        "Calculez le temps de recharge de votre voiture électrique selon la puissance de borne (3.7, 7, 11, 22 kW). 24 véhicules, coût au kWh, autonomie récupérée. Gratuit.",
    openGraph: {
        title: "Calculateur Temps de Charge VE — Borne de Recharge 2026",
        description:
            "Combien de temps pour recharger votre voiture électrique ? Simulateur gratuit avec 24 modèles et 4 puissances de borne.",
    },
    alternates: {
        canonical: "https://www.cout-borne-recharge.fr/calculateur-temps-charge",
    },
};

const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculateur de Temps de Charge Voiture Électrique",
    url: "https://www.cout-borne-recharge.fr/calculateur-temps-charge",
    applicationCategory: "Utilities",
    operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
    description:
        "Simulateur gratuit pour calculer le temps de recharge d'une voiture électrique selon le modèle et la puissance de borne installée.",
};

export default function CalculateurChargeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
            />
            {children}
        </>
    );
}
