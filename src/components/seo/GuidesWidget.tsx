import Link from "next/link";
import { BookOpen } from "lucide-react";
import { getAllGuides } from "@/data/guides-content";

export function GuidesWidget() {
    const guides = getAllGuides().slice(0, 3);

    return (
        <section className="mb-16">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 bg-blue-50">
                    <h3 className="font-bold text-slate-900 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-blue-600" /> Guides Récents
                    </h3>
                </div>
                <div className="divide-y divide-slate-100">
                    {guides.map((guide) => (
                        <Link
                            key={guide.slug}
                            href={`/guides/${guide.slug}`}
                            className="flex gap-4 p-4 hover:bg-blue-50 transition-colors group"
                        >
                            <div className="flex-1">
                                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                                    {guide.title}
                                </h4>
                                <p className="text-xs text-slate-500">{guide.date}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="p-4 bg-slate-50 text-center">
                    <Link href="/guides" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                        Voir tous les articles →
                    </Link>
                </div>
            </div>
        </section>
    );
}
