import Link from "next/link";
import { Metadata } from "next";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { getAllDepartments } from "@/lib/cities";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Annuaire Installateurs IRVE par Département | Cout-Borne-Recharge.fr",
    description: "Trouvez un installateur IRVE certifié près de chez vous. Annuaire complet par département et région pour l'installation de bornes de recharge.",
    alternates: {
        canonical: "https://www.cout-borne-recharge.fr/annuaire",
    },
};

export default function AnnuairePage() {
    const departments = getAllDepartments();

    // Group by region
    const byRegion: Record<string, typeof departments> = {};
    departments.forEach(dept => {
        if (!byRegion[dept.region]) byRegion[dept.region] = [];
        byRegion[dept.region].push(dept);
    });

    const regionKeys = Object.keys(byRegion).sort();

    return (
        <div className="min-h-screen bg-white">
            <div className="container mx-auto px-4 py-16">
                <Breadcrumbs items={[{ label: "Annuaire" }]} />

                <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center">
                    <MapPin className="h-8 w-8 inline-block text-blue-600 mr-2" />
                    Annuaire des Installateurs IRVE
                </h1>
                <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                    Trouvez un électricien certifié IRVE dans votre département pour installer votre borne de recharge.
                </p>

                {regionKeys.map((region) => (
                    <section key={region} className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">{region}</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                            {byRegion[region]
                                .sort((a, b) => a.code.localeCompare(b.code))
                                .map((dept) => {
                                    const deptSlug = `${dept.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${dept.code}`;
                                    return (
                                        <Link
                                            key={dept.code}
                                            href={`/annuaire/${deptSlug}`}
                                            className="block bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center border border-slate-100 hover:border-blue-200"
                                        >
                                            {dept.name} ({dept.code})
                                        </Link>
                                    );
                                })}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
