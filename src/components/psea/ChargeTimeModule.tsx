import { Battery, Clock } from "lucide-react";

export function ChargeTimeModule() {
    const vehicles = [
        { model: "Renault Mégane E-Tech", battery: "60 kWh", t7: "~9h", t11: "~5h30", t22: "~2h45" },
        { model: "Tesla Model 3", battery: "60 kWh", t7: "~9h", t11: "~5h30", t22: "~2h45" },
        { model: "Peugeot e-208", battery: "50 kWh", t7: "~7h30", t11: "~4h30", t22: "~2h15" },
        { model: "Citroën ë-C4", battery: "50 kWh", t7: "~7h30", t11: "~4h30", t22: "~2h15" },
        { model: "Hyundai Ioniq 5", battery: "77 kWh", t7: "~11h", t11: "~7h", t22: "~3h30" },
        { model: "BMW iX1", battery: "65 kWh", t7: "~9h30", t11: "~6h", t22: "~3h" },
    ];

    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Clock className="h-7 w-7 text-blue-600" />
                Temps de charge estimé
            </h2>
            <p className="text-slate-600 mb-8">Temps de rechargement de 20% à 80% selon la puissance de votre borne.</p>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse min-w-[600px]">
                    <thead>
                        <tr className="bg-slate-900 text-white">
                            <th className="p-4 text-left rounded-tl-xl">
                                <span className="flex items-center gap-2">
                                    <Battery className="h-4 w-4" /> Modèle
                                </span>
                            </th>
                            <th className="p-4 text-center">Batterie</th>
                            <th className="p-4 text-center bg-blue-800">⚡ 7 kW</th>
                            <th className="p-4 text-center bg-violet-800">⚡ 11 kW</th>
                            <th className="p-4 text-center rounded-tr-xl bg-lime-700">⚡ 22 kW</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehicles.map((v, i) => (
                            <tr key={v.model} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                <td className="p-4 font-medium text-slate-900 border-b border-slate-100">{v.model}</td>
                                <td className="p-4 text-center text-slate-500 text-sm border-b border-slate-100">{v.battery}</td>
                                <td className="p-4 text-center font-semibold text-blue-700 border-b border-slate-100">{v.t7}</td>
                                <td className="p-4 text-center font-semibold text-violet-700 border-b border-slate-100">{v.t11}</td>
                                <td className="p-4 text-center font-semibold text-lime-700 border-b border-slate-100">{v.t22}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="text-xs text-slate-400 mt-3">* Temps indicatifs pour une charge de 20% à 80%. Variables selon la température et l&apos;état de la batterie.</p>
        </section>
    );
}
