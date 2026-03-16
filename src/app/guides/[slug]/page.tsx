import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getGuideBySlug, getAllGuides } from "@/data/guides-content";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { RelatedGuides } from "@/components/seo/RelatedGuides";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return getAllGuides().map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const guide = getGuideBySlug(slug);
    if (!guide) return {};

    return {
        title: `${guide.title} | Cout-Borne-Recharge.fr`,
        description: guide.excerpt,
        alternates: {
            canonical: `https://www.cout-borne-recharge.fr/guides/${guide.slug}`,
        },
        openGraph: guide.image ? {
            images: [{ url: guide.image, width: 1200, height: 630, alt: guide.title }],
        } : undefined,
    };
}

export default async function GuidePage({ params }: Props) {
    const { slug } = await params;
    const guide = getGuideBySlug(slug);

    if (!guide) notFound();

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": guide.title,
        "description": guide.excerpt,
        "datePublished": guide.date,
        "dateModified": guide.date,
        "author": {
            "@type": "Organization",
            "name": "Cout-Borne-Recharge.fr"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Cout-Borne-Recharge.fr",
            "url": "https://www.cout-borne-recharge.fr"
        },
        "mainEntityOfPage": `https://www.cout-borne-recharge.fr/guides/${guide.slug}`,
        ...(guide.image && { "image": `https://www.cout-borne-recharge.fr${guide.image}` })
    };

    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <div className="container mx-auto px-4 py-8 max-w-3xl">
                <Breadcrumbs items={[
                    { label: "Guides", href: "/guides" },
                    { label: guide.title }
                ]} />

                <article>
                    <header className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                            {guide.title}
                        </h1>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                            <time dateTime={guide.date}>
                                {new Date(guide.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                            </time>
                        </div>
                    </header>

                    {guide.image && (
                        <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-10">
                            <Image
                                src={guide.image}
                                alt={guide.title}
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 768px"
                            />
                        </div>
                    )}

                    <div
                        className="prose prose-lg prose-slate max-w-none
                            prose-headings:text-slate-900 prose-headings:font-bold
                            prose-a:text-blue-600 prose-a:font-medium
                            prose-strong:text-slate-900
                            prose-table:border-collapse prose-th:bg-slate-100 prose-th:border prose-th:border-slate-200 prose-th:p-3
                            prose-td:border prose-td:border-slate-200 prose-td:p-3"
                        dangerouslySetInnerHTML={{ __html: markdownToHtml(guide.content) }}
                    />

                    {/* CTA */}
                    <div className="mt-12 bg-gradient-to-r from-blue-600 to-violet-600 text-white p-8 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Besoin d&apos;un devis personnalisé ?</h3>
                        <p className="text-blue-100 mb-6">
                            Comparez les prix des installateurs IRVE certifiés près de chez vous.
                        </p>
                        <Link href="/devis">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 rounded-full px-8">
                                Obtenir mes devis gratuits <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </article>

                <RelatedGuides currentSlug={guide.slug} />
            </div>
        </div>
    );
}

/** Simple markdown to HTML converter (tables, headers, lists, bold, links) */
function markdownToHtml(md: string): string {
    let html = md;

    // Tables
    html = html.replace(/^\|(.+)\|$/gm, (match) => {
        return match;
    });

    const lines = html.split('\n');
    let inTable = false;
    let tableHtml = '';
    const result: string[] = [];

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();

        if (line.startsWith('|') && line.endsWith('|')) {
            if (!inTable) {
                inTable = true;
                tableHtml = '<table>';
            }

            // Check if separator row
            if (line.match(/^\|[\s-:|]+\|$/)) {
                continue; // Skip separator
            }

            const cells = line.split('|').filter(c => c.trim() !== '');
            const isHeader = i + 1 < lines.length && lines[i + 1].trim().match(/^\|[\s-:|]+\|$/);

            if (isHeader) {
                tableHtml += '<thead><tr>' + cells.map(c => `<th>${c.trim()}</th>`).join('') + '</tr></thead><tbody>';
            } else {
                tableHtml += '<tr>' + cells.map(c => `<td>${processInline(c.trim())}</td>`).join('') + '</tr>';
            }
        } else {
            if (inTable) {
                inTable = false;
                tableHtml += '</tbody></table>';
                result.push(tableHtml);
                tableHtml = '';
            }
            result.push(line);
        }
    }

    if (inTable) {
        tableHtml += '</tbody></table>';
        result.push(tableHtml);
    }

    html = result.join('\n');

    // Headers
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
    html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');

    // Lists
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>');
    html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);

    // Paragraphs
    html = html.replace(/^(?!<[hultdp]|<\/|<table|<thead|<tbody|<tr|$)(.+)$/gm, '<p>$1</p>');

    // Inline formatting
    html = processInline(html);

    // Clean up empty paragraphs
    html = html.replace(/<p>\s*<\/p>/g, '');

    return html;
}

function processInline(text: string): string {
    // Bold
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Italic
    text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
    // Links
    text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    // Inline code
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');

    return text;
}
