import { notFound } from "next/navigation";
import { getCityFromSlug, generateCityMetadata } from "@/lib/seo-utils";
import { getCityIntro } from "@/lib/text-utils";
import { CityHero } from "@/components/features/CityHero";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { SchemaOrg } from "@/components/seo/SchemaOrg";
import { DepartmentBreadcrumb } from "@/components/psea/DepartmentBreadcrumb";
import { NearbyCitiesModule } from "@/components/psea/NearbyCitiesModule";
import { Metadata } from "next";
import { LocalAidsModule } from "@/components/psea/LocalAidsModule";
import { StepsModule } from "@/components/psea/StepsModule";
import { PowerComparisonModule } from "@/components/psea/PowerComparisonModule";
import { ChargeTimeModule } from "@/components/psea/ChargeTimeModule";
import { GuidesWidget } from "@/components/seo/GuidesWidget";
import { getEvAdoptionContext, getHousingInsight, getWhyHomeCharge, getCityProTip } from "@/lib/city-content";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const city = getCityFromSlug(slug);
    if (!city) return {};
    return generateCityMetadata(city);
}

export default async function CityPage({ params }: Props) {
    const { slug } = await params;
    const city = getCityFromSlug(slug);

    if (!city) {
        notFound();
    }

    const introText = getCityIntro(city);

    return (
        <div className="min-h-screen bg-white">
            <SchemaOrg city={city} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": `Combien coûte une borne de recharge à ${city.name} ?`,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": `L'installation d'une borne de recharge à ${city.name} coûte entre 1 200€ (7 kW) et 2 500€ (22 kW), pose comprise par un électricien IRVE certifié.`
                                }
                            },
                            {
                                "@type": "Question",
                                "name": `Quelles aides pour une borne à ${city.name} (${city.department_code}) ?`,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": `Vous pouvez bénéficier du crédit d'impôt de 300€, du programme ADVENIR en copropriété, et de la TVA réduite à 5,5%. Le département ${city.department_name} peut proposer des aides complémentaires.`
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Combien de temps pour installer une borne ?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "L'installation d'une borne de recharge dure entre 2 et 4 heures. Il faut compter 1 à 2 semaines entre le devis et la mise en service (visite technique + commande matériel)."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": `Comment trouver un installateur IRVE à ${city.name} ?`,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": `Utilisez notre comparateur pour recevoir jusqu'à 3 devis d'électriciens IRVE certifiés intervenant à ${city.name} (${city.zip}). Service gratuit et sans engagement.`
                                }
                            }
                        ]
                    })
                }}
            />

            <div className="bg-slate-50 pt-4 pb-0">
                <div className="container mx-auto px-4 max-w-4xl">
                    <DepartmentBreadcrumb city={city} />
                </div>
            </div>

            <CityHero city={city} />

            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Intro Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        L&apos;installation de borne de recharge à {city.name}
                    </h2>
                    <div className="prose prose-lg text-slate-600">
                        <p>
                            Vous possédez un véhicule électrique à <strong>{city.name}</strong> ({city.zip}) ? {introText}
                            L&apos;installation d&apos;une borne de recharge par un électricien certifié IRVE en {city.department_name} coûte entre <strong>1 200€</strong> et <strong>2 500€</strong>, selon la puissance choisie (7 kW, 11 kW ou 22 kW).
                        </p>
                        <p className="mt-4">
                            Dans le département {city.department_name}, de nombreux installateurs IRVE proposent des solutions
                            adaptées : wallbox connectée, prise renforcée, ou installation en copropriété via le droit à la prise.
                        </p>
                    </div>
                </section>

                {/* Unique: EV adoption context */}
                <section className="mb-16">
                    <div className="prose prose-lg text-slate-600">
                        <p>{getEvAdoptionContext(city)}</p>
                        <p className="mt-4">{getWhyHomeCharge(city)}</p>
                    </div>
                </section>

                <PowerComparisonModule city={city} />

                <ChargeTimeModule />

                <StepsModule city={city} />

                {/* Quote Widget Section */}
                <section className="mb-16" id="devis">
                    <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100">
                        <div className="max-w-2xl mx-auto text-center mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                                Comparez les tarifs à {city.name}
                            </h2>
                            <p className="text-slate-600 font-medium">
                                Obtenez jusqu&apos;à 3 devis gratuits d&apos;électriciens IRVE certifiés à {city.name} ({city.zip}).
                                <br />
                                <span className="text-sm text-slate-500 font-normal">Réponse sous 48h • Sans engagement</span>
                            </p>
                        </div>
                        <ViteUnDevisWidget />
                    </div>
                </section>

                <LocalAidsModule city={city} />

                <GuidesWidget />

                {/* Unique: Housing insight */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Type de logement à {city.name}</h2>
                    <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6">
                        <p className="text-slate-600 leading-relaxed">
                            {getHousingInsight(city)}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-3">
                            <Link href="/guides/borne-maison-individuelle-guide" className="text-sm text-blue-600 font-medium hover:underline">
                                → Guide maison individuelle
                            </Link>
                            <Link href="/guides/installation-copropriete-droit-prise" className="text-sm text-blue-600 font-medium hover:underline">
                                → Guide copropriété
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Unique: Pro tip */}
                <section className="mb-16">
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                        <p className="text-sm text-blue-800 font-medium">
                            💡 <strong>Conseil pour {city.name} :</strong> {getCityProTip(city)}
                        </p>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="mb-16 mt-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">Questions fréquentes à {city.name}</h2>
                    <div className="space-y-6">
                        <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Combien coûte une borne de recharge à {city.name} ?</h3>
                            <p className="text-slate-600">
                                L&apos;installation d&apos;une borne IRVE à {city.name} coûte entre 1 200€ (7 kW) et 2 500€ (22 kW), pose comprise. Avec le crédit d&apos;impôt de 300€ et la TVA 5,5%, le reste à charge peut descendre à ~900€.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Quelles aides à {city.name} ({city.department_code}) ?</h3>
                            <p className="text-slate-600">
                                Crédit d&apos;impôt de 300€, programme ADVENIR en copropriété (jusqu&apos;à 50%), TVA réduite 5,5%. Le département {city.department_name} via {city.department_info?.aide_locale || 'les services sociaux'} peut proposer des aides complémentaires.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Combien de temps pour installer une borne à {city.name} ?</h3>
                            <p className="text-slate-600">
                                Les installateurs IRVE du secteur {city.zip} interviennent rapidement. Comptez 2 à 4 heures pour l&apos;installation et 1 à 2 semaines entre le devis et la mise en service.
                            </p>
                        </div>

                        <div className="bg-white border border-slate-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">Faut-il un installateur IRVE à {city.name} ?</h3>
                            <p className="text-slate-600">
                                Oui, la certification IRVE est obligatoire pour toute borne supérieure à 3,7 kW. Sans IRVE, vous perdez le crédit d&apos;impôt et les aides ADVENIR. Nos partenaires intervenant dans le {city.department_code} sont tous certifiés.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <NearbyCitiesModule city={city} />
        </div>
    );
}
