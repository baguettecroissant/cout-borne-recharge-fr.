export const dynamic = 'force-dynamic';

import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getAllDepartments, getCitiesByDepartment } from "@/lib/cities";
import { Zap } from "lucide-react";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const deptCode = slug.split('-').pop() || '';
    const departments = getAllDepartments();
    const dept = departments.find(d => d.code === deptCode);

    if (!dept) return {};
    return {
        title: `Installation Borne de Recharge ${dept.name} (${dept.code}) | Cout-Borne-Recharge.fr`,
        description: `Trouvez un installateur IRVE certifié en ${dept.name}. Comparez les devis de bornes de recharge dans le département ${dept.code}.`,
        alternates: {
            canonical: `https://www.cout-borne-recharge.fr/annuaire/${slug}`,
        },
    };
}

export default async function DepartmentPage({ params }: Props) {
    const { slug } = await params;
    const deptCode = slug.split('-').pop() || '';
    const departments = getAllDepartments();
    const dept = departments.find(d => d.code === deptCode);

    if (!dept) notFound();

    const cities = getCitiesByDepartment(deptCode);
    const sortedCities = cities.sort((a, b) => (b.population || 0) - (a.population || 0));

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-16">
                <Breadcrumbs items={[
                    { label: "Annuaire", href: "/annuaire" },
                    { label: `${dept.name} (${dept.code})` }
                ]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-4">
                    Bornes de recharge en {dept.name} ({dept.code})
                </h1>
                <p className="text-xl text-slate-600 mb-8">
                    {sortedCities.length} villes du {dept.name} desservies par nos installateurs IRVE certifiés. Région {dept.region}.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
                    <h2 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                        <Zap className="h-5 w-5 text-blue-600" /> Devis gratuit en {dept.name}
                    </h2>
                    <p className="text-slate-600">
                        Obtenez jusqu&apos;à 3 devis d&apos;installateurs IRVE certifiés dans le {dept.code}.{" "}
                        <Link href="/devis" className="text-blue-600 font-medium underline">Demander un devis →</Link>
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {sortedCities.map((city) => (
                        <Link
                            key={city.slug}
                            href={`/borne-recharge/${city.slug}`}
                            className="block bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md px-4 py-3 rounded-lg text-sm transition-all text-center group"
                        >
                            <span className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">{city.name}</span>
                            <span className="block text-xs text-slate-500">{city.zip}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
