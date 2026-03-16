import { City } from "@/types";
import { Euro, Leaf, FileCheck } from "lucide-react";
import Link from "next/link";

interface LocalAidsModuleProps {
    city: City;
}

export function LocalAidsModule({ city }: LocalAidsModuleProps) {
    return (
        <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Aides financières à {city.name}</h2>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                        <Euro className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Crédit d&apos;impôt 300€</h3>
                    <p className="text-slate-600 text-sm">
                        L&apos;État accorde un crédit d&apos;impôt de 300€ par point de charge pour l&apos;installation d&apos;une borne de recharge à domicile. Accessible à tous, sans conditions de ressources.
                    </p>
                </div>

                <div className="bg-gradient-to-br from-violet-50 to-violet-100 border border-violet-200 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center mb-4">
                        <Leaf className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Programme ADVENIR</h3>
                    <p className="text-slate-600 text-sm">
                        En copropriété dans le {city.department_code}, le programme ADVENIR finance jusqu&apos;à 50% du coût de l&apos;installation (plafonné à 960€ par point de charge en usage individuel).
                    </p>
                </div>

                <div className="bg-gradient-to-br from-lime-50 to-lime-100 border border-lime-200 p-6 rounded-2xl">
                    <div className="w-12 h-12 bg-lime-600 rounded-xl flex items-center justify-center mb-4">
                        <FileCheck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">TVA réduite 5,5%</h3>
                    <p className="text-slate-600 text-sm">
                        L&apos;installation d&apos;une borne de recharge bénéficie d&apos;une TVA réduite à 5,5% au lieu de 20% pour les logements de plus de 2 ans dans le {city.department_name}.
                    </p>
                </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl text-center">
                <p className="text-sm text-blue-800">
                    💡 En cumulant ces aides à {city.name}, vous pouvez réduire le coût de votre borne de recharge de <strong>40% à 60%</strong>.{" "}
                    <Link href="/guides/credit-impot-advenir-maprimereno" className="text-blue-600 font-medium underline">
                        En savoir plus →
                    </Link>
                </p>
            </div>
        </section>
    );
}
