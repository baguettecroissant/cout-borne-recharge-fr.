import { City } from "@/types";
import { Zap } from "lucide-react";
import { getCityPrices } from "@/lib/city-content";

interface PowerComparisonModuleProps {
    city: City;
}

export function PowerComparisonModule({ city }: PowerComparisonModuleProps) {
    const prices = getCityPrices(city);
    const powers = [
        {
            kw: "7 kW",
            label: "Monophasé",
            priceRange: `${prices.min7.toLocaleString('fr-FR')} € – ${prices.max7.toLocaleString('fr-FR')} €`,
            chargeTime: "~8h (batterie 50 kWh)",
            ideal: "Usage quotidien, recharge la nuit",
            badge: "Le plus courant",
            color: "blue",
        },
        {
            kw: "11 kW",
            label: "Triphasé",
            priceRange: `${prices.min11.toLocaleString('fr-FR')} € – ${prices.max11.toLocaleString('fr-FR')} €`,
            chargeTime: "~5h (batterie 50 kWh)",
            ideal: "Gros rouleurs, SUV électriques",
            badge: "Meilleur rapport",
            color: "violet",
        },
        {
            kw: "22 kW",
            label: "Triphasé Pro",
            priceRange: `${prices.min22.toLocaleString('fr-FR')} € – ${prices.max22.toLocaleString('fr-FR')} €`,
            chargeTime: "~2h30 (batterie 50 kWh)",
            ideal: "Usage intensif, entreprises",
            badge: "Ultra-rapide",
            color: "lime",
        },
    ];

    const colorMap: Record<string, { bg: string; border: string; badge: string; text: string }> = {
        blue: { bg: "bg-blue-50", border: "border-blue-200", badge: "bg-blue-600 text-white", text: "text-blue-700" },
        violet: { bg: "bg-violet-50", border: "border-violet-200", badge: "bg-violet-600 text-white", text: "text-violet-700" },
        lime: { bg: "bg-lime-50", border: "border-lime-200", badge: "bg-lime-600 text-white", text: "text-lime-700" },
    };

    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
                Prix d&apos;une borne à {city.name} par puissance
            </h2>
            <p className="text-slate-600 mb-8">
                Les tarifs à {city.name} ({city.department_code}) sont {prices.label}. Voici les fourchettes constatées auprès des installateurs IRVE de la région {city.region}.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                {powers.map((p) => {
                    const c = colorMap[p.color];
                    return (
                        <div key={p.kw} className={`${c.bg} ${c.border} border rounded-2xl p-6 relative overflow-hidden`}>
                            <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${c.badge}`}>
                                {p.badge}
                            </span>
                            <div className="flex items-center gap-2 mb-4">
                                <Zap className={`h-6 w-6 ${c.text}`} />
                                <span className={`text-2xl font-extrabold ${c.text}`}>{p.kw}</span>
                            </div>
                            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">{p.label}</p>

                            <div className="space-y-3">
                                <div>
                                    <span className="text-xs text-slate-500 block">Prix à {city.name}</span>
                                    <span className="font-bold text-slate-900">{p.priceRange}</span>
                                </div>
                                <div>
                                    <span className="text-xs text-slate-500 block">Temps de charge</span>
                                    <span className="font-bold text-slate-900">{p.chargeTime}</span>
                                </div>
                                <div>
                                    <span className="text-xs text-slate-500 block">Idéal pour</span>
                                    <span className="text-sm text-slate-700">{p.ideal}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
