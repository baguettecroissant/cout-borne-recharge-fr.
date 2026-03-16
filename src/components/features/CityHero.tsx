import { City } from "@/types";
import { Zap } from "lucide-react";

interface CityHeroProps {
    city: City;
}

export function CityHero({ city }: CityHeroProps) {
    return (
        <section className="relative bg-slate-900 py-16 overflow-hidden">
            {/* Circuit pattern background */}
            <div className="absolute inset-0 circuit-pattern opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-violet-900/30"></div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl flex items-center justify-center">
                        <Zap className="h-5 w-5 text-white fill-white" />
                    </div>
                    <div className="flex gap-2">
                        <span className="bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">IRVE</span>
                        <span className="bg-violet-500/20 border border-violet-500/30 text-violet-300 text-xs font-semibold px-3 py-1 rounded-full">{city.zip}</span>
                    </div>
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                    Installer une borne de recharge à{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                        {city.name}
                    </span>
                    <br />
                    <span className="text-xl md:text-2xl font-bold text-slate-300">
                        Électriciens IRVE {city.zip}
                    </span>
                </h1>

                <p className="text-lg text-slate-300 max-w-2xl">
                    Comparez les prix d&apos;installation de borne de recharge dans le département {city.department_name} et obtenez un devis gratuit.
                </p>
            </div>
        </section>
    );
}
