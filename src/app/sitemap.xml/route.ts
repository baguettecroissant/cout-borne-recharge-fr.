import { NextResponse } from 'next/server';
import { getAllCitySlugs } from '@/lib/seo-utils';
import { getAllGuides } from '@/data/guides-content';
import { BRANDS } from '@/data/brands';

export async function GET() {
    const baseUrl = 'https://www.cout-borne-recharge.fr';
    const citySlugs = getAllCitySlugs();
    const guides = getAllGuides();

    // Calculate number of sitemap files (5000 URLs per file max)
    const citiesPerSitemap = 5000;
    const totalSitemaps = Math.ceil(citySlugs.length / citiesPerSitemap);

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Static pages sitemap
    xml += `
  <sitemap>
    <loc>${baseUrl}/sitemap/0</loc>
  </sitemap>`;

    // City sitemaps
    for (let i = 0; i < totalSitemaps; i++) {
        xml += `
  <sitemap>
    <loc>${baseUrl}/sitemap/${i + 1}</loc>
  </sitemap>`;
    }

    xml += `
</sitemapindex>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
