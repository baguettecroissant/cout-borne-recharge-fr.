import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 py-3 flex-wrap">
            <Link href="/" className="hover:text-blue-600 transition-colors">
                Accueil
            </Link>
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                    <ChevronRight className="h-3 w-3" />
                    {item.href ? (
                        <Link href={item.href} className="hover:text-blue-600 transition-colors">
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-slate-700 font-medium">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
}
