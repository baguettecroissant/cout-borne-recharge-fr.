"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling 300px
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-4 py-3 safe-area-pb">
            <Link href="/devis" className="block">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-xl px-6 py-3.5 flex items-center justify-center gap-2 font-bold text-base shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-transform">
                    <span>⚡ Devis gratuit en 2 min</span>
                    <ArrowRight className="h-5 w-5" />
                </div>
            </Link>
        </div>
    );
}
