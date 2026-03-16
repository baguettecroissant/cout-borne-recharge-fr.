import Link from "next/link";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getAllGuides } from "@/data/guides-content";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

type Props = {
    searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const { page } = await searchParams;
    const currentPage = Number(page) || 1;

    return {
        title: currentPage > 1
            ? `Guides Borne de Recharge - Page ${currentPage} | Cout-Borne-Recharge.fr`
            : "Guides Borne de Recharge — Conseils Installation IRVE | Cout-Borne-Recharge.fr",
        description: "Nos guides complets pour installer votre borne de recharge : prix, puissances, aides financières (ADVENIR, crédit d'impôt), copropriété.",
        alternates: {
            canonical: currentPage > 1
                ? `https://www.cout-borne-recharge.fr/guides?page=${currentPage}`
                : "https://www.cout-borne-recharge.fr/guides",
        },
    };
}

export default async function GuidesPage({ searchParams }: Props) {
    const { page } = await searchParams;
    const allGuides = getAllGuides().sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    const currentPage = Number(page) || 1;
    const itemsPerPage = 12;
    const totalPages = Math.ceil(allGuides.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentGuides = allGuides.slice(startIndex, endIndex);

    return (
        <div className="container mx-auto px-4 py-16">
            <Breadcrumbs items={[{ label: "Guides" }]} />

            <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Guides & Conseils</h1>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                Retrouvez toutes les informations pour réussir votre installation de borne de recharge IRVE.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentGuides.map((guide) => (
                    <Card key={guide.slug} className="hover:shadow-lg transition-shadow border-slate-200">
                        <CardHeader>
                            <CardTitle className="text-xl text-slate-900 line-clamp-2">{guide.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-slate-600 mb-4 text-base">
                                {guide.excerpt}
                            </CardDescription>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-sm text-slate-500">
                                    {new Date(guide.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </span>
                                <Link href={`/guides/${guide.slug}`} className="text-blue-600 font-medium hover:underline">
                                    Lire l&apos;article &rarr;
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-4 mt-12">
                    {currentPage > 1 ? (
                        <Link
                            href={`/guides?page=${currentPage - 1}`}
                            className="px-4 py-2 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors"
                        >
                            &larr; Précédent
                        </Link>
                    ) : (
                        <span className="px-4 py-2 border border-slate-100 text-slate-300 rounded-md cursor-not-allowed">
                            &larr; Précédent
                        </span>
                    )}

                    <span className="text-slate-600 font-medium">
                        Page {currentPage} sur {totalPages}
                    </span>

                    {currentPage < totalPages ? (
                        <Link
                            href={`/guides?page=${currentPage + 1}`}
                            className="px-4 py-2 border border-slate-300 text-slate-700 rounded-md hover:bg-slate-50 transition-colors"
                        >
                            Suivant &rarr;
                        </Link>
                    ) : (
                        <span className="px-4 py-2 border border-slate-100 text-slate-300 rounded-md cursor-not-allowed">
                            Suivant &rarr;
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}
