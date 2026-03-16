import { City } from "@/types";
import { ClipboardCheck, Search, Wrench, CheckCircle } from "lucide-react";

interface StepsModuleProps {
    city: City;
}

export function StepsModule({ city }: StepsModuleProps) {
    const steps = [
        {
            icon: Search,
            title: "1. Demandez vos devis",
            description: `Comparez gratuitement les offres des électriciens IRVE à ${city.name}. Recevez jusqu'à 3 propositions sous 48h.`,
            color: "blue"
        },
        {
            icon: ClipboardCheck,
            title: "2. Visite technique",
            description: "L'installateur IRVE évalue votre tableau électrique, la distance au parking et vous recommande la puissance idéale (7, 11 ou 22 kW).",
            color: "violet"
        },
        {
            icon: Wrench,
            title: "3. Installation",
            description: "La pose dure entre 2h et 4h. L'électricien installe la borne, tire le câble et configure la connexion Wi-Fi ou Bluetooth.",
            color: "lime"
        },
        {
            icon: CheckCircle,
            title: "4. Mise en service CONSUEL",
            description: "L'installateur effectue les tests de conformité et vous remet l'attestation CONSUEL nécessaire pour votre assurance.",
            color: "blue"
        },
    ];

    const colorMap: Record<string, string> = {
        blue: "bg-blue-50 text-blue-600",
        violet: "bg-violet-50 text-violet-600",
        lime: "bg-lime-50 text-lime-700",
    };

    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Comment installer une borne à {city.name} ?</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {steps.map((step, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${colorMap[step.color]}`}>
                            <step.icon className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                            <p className="text-slate-600 text-sm">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
