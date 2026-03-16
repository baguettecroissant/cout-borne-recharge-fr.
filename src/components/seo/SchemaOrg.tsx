import { City } from "@/types";

interface SchemaOrgProps {
    city: City;
}

export function SchemaOrg({ city }: SchemaOrgProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `Installation Borne de Recharge à ${city.name}`,
        "description": `Service d'installation de borne de recharge IRVE à ${city.name} (${city.zip}), département ${city.department_name}. Devis gratuit d'électriciens certifiés IRVE.`,
        "areaServed": {
            "@type": "City",
            "name": city.name,
            "postalCode": city.zip,
            "addressRegion": city.department_name
        },
        "provider": {
            "@type": "Organization",
            "name": "Cout-Borne-Recharge.fr",
            "url": "https://www.cout-borne-recharge.fr"
        },
        "serviceType": "Installation IRVE",
        "offers": {
            "@type": "AggregateOffer",
            "lowPrice": "1200",
            "highPrice": "2500",
            "priceCurrency": "EUR",
            "offerCount": "3"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": "https://www.cout-borne-recharge.fr"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": `Borne de recharge ${city.department_name}`,
                "item": `https://www.cout-borne-recharge.fr/annuaire/${city.department_code}`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": `Borne de recharge ${city.name}`,
                "item": `https://www.cout-borne-recharge.fr/borne-recharge/${city.slug}`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
