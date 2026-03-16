import Link from "next/link";
import { Metadata } from "next";
import { BRANDS } from "@/data/brands";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Star, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Comparatif Bornes de Recharge 2026 — Wallbox, Schneider, Legrand, Hager, ABB",
    description: "Comparez les meilleures marques de bornes de recharge IRVE : Wallbox, Schneider EVlink, Legrand Green'up, Hager Witty, ABB Terra. Prix, avis, garantie.",
    alternates: {
        canonical: "https://www.cout-borne-recharge.fr/marques",
    },
};

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className={`h-4 w-4 ${star <= rating ? "text-amber-400 fill-amber-400" : "text-slate-300"}`} />
            ))}
        </div>
    );
}

export default function MarquesPage() {
    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-16">
                <Breadcrumbs items={[{ label: "Marques" }]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center">Comparatif Bornes de Recharge 2026</h1>
                <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
                    Les 5 meilleures marques de bornes IRVE comparées : prix, qualité, connectivité, garantie.
                </p>

                {/* Brand Cards */}
                <div className="space-y-8 mb-20">
                    {BRANDS.map((brand, idx) => (
                        <div key={brand.slug} className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                            <div className="p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-3xl">{brand.countryFlag}</span>
                                            <h2 className="text-2xl font-bold text-slate-900">{brand.name}</h2>
                                            {idx === 0 && (
                                                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">⭐ N°1</span>
                                            )}
                                        </div>
                                        <p className="text-slate-500 text-sm mb-4">{brand.tagline}</p>

                                        <div className="grid grid-cols-3 gap-4 mb-4">
                                            <div>
                                                <span className="text-xs text-slate-500 block mb-1">Qualité</span>
                                                <StarRating rating={brand.qualityRating} />
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-500 block mb-1">SAV</span>
                                                <StarRating rating={brand.savRating} />
                                            </div>
                                            <div>
                                                <span className="text-xs text-slate-500 block mb-1">Prix</span>
                                                <StarRating rating={brand.priceRating} />
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {brand.pros.slice(0, 3).map((pro, i) => (
                                                <span key={i} className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
                                                    ✓ {pro}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="md:text-right md:min-w-[200px]">
                                        <div className="mb-2">
                                            <span className="text-xs text-slate-500">Wallbox 7 kW</span>
                                            <div className="text-lg font-bold text-blue-600">{brand.priceRange.wallbox7}</div>
                                        </div>
                                        <div className="mb-4">
                                            <span className="text-xs text-slate-500">Wallbox 22 kW</span>
                                            <div className="text-lg font-bold text-violet-600">{brand.priceRange.wallbox22}</div>
                                        </div>
                                        <span className="text-xs text-slate-500">Garantie : {brand.warranty}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Tableau Comparatif</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse min-w-[700px]">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="p-4 text-left rounded-tl-xl">Marque</th>
                                    <th className="p-4 text-center">Qualité</th>
                                    <th className="p-4 text-center">SAV</th>
                                    <th className="p-4 text-center">Prix 7kW</th>
                                    <th className="p-4 text-center">Prix 22kW</th>
                                    <th className="p-4 text-center">Garantie</th>
                                    <th className="p-4 text-center rounded-tr-xl">Connectivité</th>
                                </tr>
                            </thead>
                            <tbody>
                                {BRANDS.map((brand, i) => (
                                    <tr key={brand.slug} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="p-4 font-semibold text-slate-900 border-b border-slate-100">
                                            {brand.countryFlag} {brand.name}
                                        </td>
                                        <td className="p-4 text-center border-b border-slate-100">
                                            <StarRating rating={brand.qualityRating} />
                                        </td>
                                        <td className="p-4 text-center border-b border-slate-100">
                                            <StarRating rating={brand.savRating} />
                                        </td>
                                        <td className="p-4 text-center text-sm font-medium text-slate-700 border-b border-slate-100">{brand.priceRange.wallbox7}</td>
                                        <td className="p-4 text-center text-sm font-medium text-slate-700 border-b border-slate-100">{brand.priceRange.wallbox22}</td>
                                        <td className="p-4 text-center text-sm text-slate-600 border-b border-slate-100">{brand.warranty}</td>
                                        <td className="p-4 text-center text-sm text-slate-600 border-b border-slate-100">{brand.connectivity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* CTA */}
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white p-8 md:p-12 rounded-2xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Quelle borne pour vous ?</h2>
                    <p className="text-blue-100 mb-8 text-lg">
                        Comparez les devis des installateurs IRVE de votre région et trouvez la borne idéale.
                    </p>
                    <Link href="/devis">
                        <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 rounded-full px-8 text-lg">
                            <Zap className="mr-2 h-5 w-5" /> Comparer les prix
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
