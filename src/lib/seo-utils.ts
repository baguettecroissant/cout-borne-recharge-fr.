import { City } from "@/types";
import citiesData from "@/lib/db/cities.json";
import departmentsData from "@/lib/db/departments-infos.json";

const cities = citiesData as City[];

export function getCityFromSlug(slug: string): City | undefined {
    const city = cities.find(c => c.slug === slug);
    if (!city) return undefined;

    const deptInfo = departmentsData.find(d => d.code === city.department_code);
    return {
        ...city,
        department_info: deptInfo
    };
}

export function getAllCitySlugs(): string[] {
    return cities.map(c => c.slug);
}

export function generateCityMetadata(city: City) {
    return {
        title: `Borne de Recharge ${city.name} (${city.zip}) — Installateur IRVE & Devis`,
        description: `Installation borne de recharge à ${city.name}. Comparez les prix des électriciens IRVE du ${city.department_name} et obtenez votre devis gratuit. 7kW, 11kW, 22kW.`,
        alternates: {
            canonical: `https://www.cout-borne-recharge.fr/borne-recharge/${city.slug}`,
        },
    };
}

export function getAllDepartmentCodes(): string[] {
    return departmentsData.map(d => d.code);
}

export function getCitiesByDepartment(departmentCode: string): City[] {
    return cities.filter(c => c.department_code === departmentCode);
}
