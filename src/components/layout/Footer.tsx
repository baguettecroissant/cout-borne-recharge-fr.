import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-50 py-12 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand & Description */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Cout-Borne-Recharge<span className="text-blue-400">.fr</span>
                    </h3>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-sm">
                        Le guide de référence pour estimer le coût d&apos;installation d&apos;une borne de recharge IRVE en France. Comparez les devis, économisez et passez à l&apos;électrique.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Informations</h4>
                    <ul className="space-y-3">
                        <li><Link href="/" className="text-slate-300 hover:text-lime-400 transition-colors text-lg">Accueil</Link></li>
                        <li><Link href="/guides" className="text-slate-300 hover:text-lime-400 transition-colors text-lg">Guides & Conseils</Link></li>
                        <li><Link href="/marques" className="text-slate-300 hover:text-lime-400 transition-colors text-lg">Marques</Link></li>
                        <li><Link href="/annuaire" className="text-slate-300 hover:text-lime-400 transition-colors text-lg">Annuaire</Link></li>
                        <li><Link href="/faq" className="text-slate-300 hover:text-lime-400 transition-colors text-lg">FAQ</Link></li>
                        <li><Link href="/mentions-legales" className="text-slate-300 hover:text-lime-400 transition-colors text-lg">Mentions Légales</Link></li>
                    </ul>
                </div>

                {/* Contact / CTA */}
                <div>
                    <h4 className="text-xl font-semibold text-white mb-4">Un projet ?</h4>
                    <p className="text-slate-300 mb-6 text-lg">
                        Obtenez des devis gratuits d&apos;électriciens IRVE certifiés près de chez vous.
                    </p>
                    <Link
                        href="/devis"
                        className="inline-block bg-lime-500 hover:bg-lime-600 text-slate-900 font-bold py-3 px-6 rounded-lg text-lg transition-colors w-full text-center"
                    >
                        Comparer les prix
                    </Link>

                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-center text-slate-400">
                <p>© 2026 Cout-Borne-Recharge.fr — Tous droits réservés.</p>
            </div>
        </footer>
    );
}
