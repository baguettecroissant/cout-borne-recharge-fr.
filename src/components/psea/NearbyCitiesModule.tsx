import { City } from "@/types";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { getNearbyCities } from "@/lib/cities";

interface NearbyCitiesModuleProps {
    city: City;
}

export function NearbyCitiesModule({ city }: NearbyCitiesModuleProps) {
    const nearbyCities = getNearbyCities(city, 8);

    if (nearbyCities.length === 0) return null;

    return (
        <section className="py-12 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    Bornes de recharge près de {city.name}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {nearbyCities.map((nearbyCity) => (
                        <Link
                            key={nearbyCity.slug}
                            href={`/borne-recharge/${nearbyCity.slug}`}
                            className="bg-white p-3 rounded-lg border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all text-center group"
                        >
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                {nearbyCity.name}
                            </div>
                            <div className="text-xs text-slate-500 mt-1">{nearbyCity.zip}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
