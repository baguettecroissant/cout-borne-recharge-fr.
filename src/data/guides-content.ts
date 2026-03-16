export interface Guide {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    image?: string;
    tags?: string[];
    content: string;
}

import { guidePrix } from './guides/guide-1-prix';
import { guidePuissance } from './guides/guide-2-puissance';
import { guideAides } from './guides/guide-3-aides';
import { guideCopro } from './guides/guide-4-copro';
import { guideMaison } from './guides/guide-5-maison';
import { guideWallbox } from './guides/guide-6-wallbox';
import { guideTempsCharge } from './guides/guide-7-temps-charge';
import { guideIRVE } from './guides/guide-8-irve';

const guides: Guide[] = [
    guidePrix,
    guidePuissance,
    guideAides,
    guideCopro,
    guideMaison,
    guideWallbox,
    guideTempsCharge,
    guideIRVE,
];

export function getAllGuides(): Guide[] {
    return guides;
}

export function getGuideBySlug(slug: string): Guide | undefined {
    return guides.find((g) => g.slug === slug);
}

export function getGuidesByTags(tags: string[], excludeSlug?: string): Guide[] {
    return guides
        .filter((g) => g.slug !== excludeSlug)
        .filter((g) => g.tags?.some((t) => tags.includes(t)))
        .slice(0, 3);
}
