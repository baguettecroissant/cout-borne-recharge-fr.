"use client";

import { useEffect, useRef } from "react";

export function ViteUnDevisWidget() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Avoid double injection
        if (containerRef.current && containerRef.current.querySelector("script")) {
            return;
        }

        const w = window as any;
        w.vud_partenaire_id = '2353';
        const title = document.title || "borne de recharge";
        w.vud_keyword = encodeURI(title);
        w.vud_box_id = '17c4e2f5db';

        const vud_js = document.createElement('script');
        vud_js.type = 'text/javascript';
        vud_js.async = true;
        vud_js.src = '//www.viteundevis.com/marqueblanche/?b=' + w.vud_box_id + '&p=' + w.vud_partenaire_id + '&c=' + w.vud_keyword;

        if (containerRef.current) {
            containerRef.current.appendChild(vud_js);
        }
    }, []);

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <div id="v17c4e2f5dbd" className="min-h-[400px] flex items-center justify-center text-slate-400">
                <span ref={containerRef}></span>
            </div>
            <p className="text-center text-xs text-slate-400 mt-2">
                Service gratuit et sans engagement
            </p>
        </div>
    );
}
