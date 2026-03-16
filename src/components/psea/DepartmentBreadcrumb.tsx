import { City } from "@/types";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface DepartmentBreadcrumbProps {
    city: City;
}

export function DepartmentBreadcrumb({ city }: DepartmentBreadcrumbProps) {
    const deptSlug = `${city.department_name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${city.department_code}`;

    return (
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500 py-3 flex-wrap">
            <Link href="/" className="hover:text-blue-600 transition-colors">Accueil</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/annuaire" className="hover:text-blue-600 transition-colors">Annuaire</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href={`/annuaire/${deptSlug}`} className="hover:text-blue-600 transition-colors">
                {city.department_name} ({city.department_code})
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-700 font-medium">{city.name}</span>
        </nav>
    );
}
