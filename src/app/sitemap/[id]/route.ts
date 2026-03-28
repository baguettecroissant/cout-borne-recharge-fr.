import { NextResponse } from 'next/server';
import { getAllCitySlugs } from '@/lib/seo-utils';
import { getAllGuides } from '@/data/guides-content';
import { BRANDS } from '@/data/brands';
import { getAllDepartments } from '@/lib/cities';

type Props = {
    params: Promise<{ id: string }>;
};

export async function GET(request: Request, { params }: Props) {
    const { id } = await params;
    const sitemapId = parseInt(id, 10);
    const baseUrl = 'https://www.cout-borne-recharge.fr';

    // Sitemap 0: static pages + guides + brands + departments
    if (sitemapId === 0) {
        const guides = getAllGuides();
        const departments = getAllDepartments();

        let urls = [
            { loc: baseUrl, priority: '1.0', changefreq: 'weekly' },
            { loc: `${baseUrl}/devis`, priority: '0.9', changefreq: 'monthly' },
            { loc: `${baseUrl}/guides`, priority: '0.8', changefreq: 'weekly' },
            { loc: `${baseUrl}/marques`, priority: '0.8', changefreq: 'monthly' },
            { loc: `${baseUrl}/annuaire`, priority: '0.8', changefreq: 'monthly' },
            { loc: `${baseUrl}/faq`, priority: '0.7', changefreq: 'monthly' },
            { loc: `${baseUrl}/calculateur-temps-charge`, priority: '0.9', changefreq: 'weekly' },
            { loc: `${baseUrl}/mentions-legales`, priority: '0.3', changefreq: 'yearly' },
        ];

        // Guide pages
        guides.forEach((guide) => {
            urls.push({ loc: `${baseUrl}/guides/${guide.slug}`, priority: '0.7', changefreq: 'monthly' });
        });

        // Department pages
        departments.forEach((dept) => {
            const deptSlug = `${dept.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${dept.code}`;
            urls.push({ loc: `${baseUrl}/annuaire/${deptSlug}`, priority: '0.6', changefreq: 'monthly' });
        });

        const xml = generateSitemap(urls);
        return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } });
    }

    // Sitemap 1+: city pages (5000 per file)
    const citySlugs = getAllCitySlugs();
    const citiesPerSitemap = 5000;
    const startIndex = (sitemapId - 1) * citiesPerSitemap;
    const endIndex = startIndex + citiesPerSitemap;
    const slugsBatch = citySlugs.slice(startIndex, endIndex);

    if (slugsBatch.length === 0) {
        return new NextResponse('Not Found', { status: 404 });
    }

    const urls = slugsBatch.map((slug) => ({
        loc: `${baseUrl}/borne-recharge/${slug}`,
        priority: '0.6',
        changefreq: 'monthly' as const,
    }));

    const xml = generateSitemap(urls);
    return new NextResponse(xml, { headers: { 'Content-Type': 'application/xml' } });
}

function generateSitemap(urls: { loc: string; priority: string; changefreq: string }[]): string {
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    urls.forEach((url) => {
        xml += `
  <url>
    <loc>${url.loc}</loc>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
    });

    xml += `
</urlset>`;

    return xml;
}
