import Link from "next/link";
import { getGuideBySlug, getGuidesByTags, getAllGuides } from "@/data/guides-content";

export function RelatedGuides({ currentSlug }: { currentSlug: string }) {
    const current = getGuideBySlug(currentSlug);
    
    // Smart matching: use tags if available, otherwise fallback to random
    let guides = current?.tags 
        ? getGuidesByTags(current.tags, currentSlug)
        : getAllGuides().filter((g) => g.slug !== currentSlug).slice(0, 3);
    
    // If tag matching returned less than 3, fill with other guides
    if (guides.length < 3) {
        const slugsToExclude = new Set([currentSlug, ...guides.map(g => g.slug)]);
        const filler = getAllGuides()
            .filter((g) => !slugsToExclude.has(g.slug))
            .slice(0, 3 - guides.length);
        guides = [...guides, ...filler];
    }

    return (
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mt-12">
            <h3 className="font-bold text-slate-900 mb-4">📚 Articles similaires</h3>
            <ul className="space-y-3">
                {guides.map((guide) => (
                    <li key={guide.slug}>
                        <Link
                            href={`/guides/${guide.slug}`}
                            className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                        >
                            {guide.title} →
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-blue-200">
                <Link href="/guides" className="text-sm text-blue-500 hover:text-blue-700 font-medium">
                    Voir tous nos guides →
                </Link>
            </div>
        </div>
    );
}
