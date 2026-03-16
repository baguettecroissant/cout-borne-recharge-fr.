import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Shield, Zap, MapPin, Euro, Clock, Leaf, BookOpen, Award, BatteryCharging } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getAllGuides } from "@/data/guides-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.cout-borne-recharge.fr',
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section — Dark with circuit pattern */}
      <section className="relative bg-slate-900 border-b border-slate-800 py-20 lg:py-0 lg:h-[620px] flex items-center overflow-hidden">
        {/* Circuit pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-violet-900/20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Zap className="h-4 w-4 fill-blue-400 text-blue-400" />
              <span>Comparateur N°1 — Installation IRVE 2026</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
              Le Prix Juste pour votre <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Borne de Recharge</span>
            </h1>

            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              Combien coûte l&apos;installation d&apos;une borne IRVE ? Comparez gratuitement les devis d&apos;électriciens certifiés près de chez vous. 7kW, 11kW, 22kW.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/devis">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white text-lg px-8 h-14 rounded-xl shadow-lg shadow-blue-900/30 w-full sm:w-auto transition-all transform hover:scale-105">
                  Comparer les prix gratuitement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <div className="flex items-center gap-3 text-slate-300 px-4">
                <div className="text-sm">
                  <span className="font-bold text-white block">2 000+</span>
                  bornes installées
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl hidden lg:block"></div>
        <div className="absolute right-20 top-1/3 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl hidden lg:block"></div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-slate-100 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-slate-500 text-sm font-medium uppercase tracking-wider">
            <div className="flex items-center gap-2"><Award className="h-5 w-5 text-blue-600" /> Électriciens IRVE Certifiés</div>
            <div className="flex items-center gap-2"><Euro className="h-5 w-5 text-blue-600" /> Devis Gratuits sans engagement</div>
            <div className="flex items-center gap-2"><Clock className="h-5 w-5 text-blue-600" /> Réponse sous 48h</div>
            <div className="flex items-center gap-2"><Leaf className="h-5 w-5 text-blue-600" /> Éligible ADVENIR</div>
          </div>
        </div>
      </section>

      {/* Value Stack Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Pourquoi comparer avant d&apos;installer ?</h2>
            <p className="text-slate-600 text-lg">
              Le prix d&apos;une borne de recharge varie du simple au double selon les installateurs. Notre mission : vous aider à trouver le meilleur rapport qualité-prix.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-blue-200">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <Euro className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Économisez jusqu&apos;à 40%</h3>
              <p className="text-slate-600">
                En comparant 3 devis d&apos;installateurs IRVE locaux, vous obtenez mécaniquement le meilleur prix pour votre borne de recharge.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-violet-200">
              <div className="w-14 h-14 bg-violet-50 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-violet-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Certifié IRVE</h3>
              <p className="text-slate-600">
                Tous nos partenaires sont des électriciens certifiés IRVE (Qualifelec / AFNOR). Installation conforme, attestation CONSUEL incluse.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-lime-200">
              <div className="w-14 h-14 bg-lime-50 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="h-7 w-7 text-lime-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Aides déduites</h3>
              <p className="text-slate-600">
                Crédit d&apos;impôt 300€, programme ADVENIR, TVA 5,5%... Nos partenaires intègrent les aides dans leurs devis. Jusqu&apos;à 60% d&apos;économie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Block — Pricing */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-2/3 prose prose-lg prose-slate">
            <h2 className="text-3xl font-extrabold text-slate-900 not-prose mb-8">
              Quel est le prix moyen d&apos;une borne de recharge en 2026 ?
            </h2>
            <p>
              L&apos;installation d&apos;une borne de recharge pour véhicule électrique (IRVE) coûte entre <strong>1 200€ et 2 500€</strong> tout compris, selon la puissance choisie et la configuration de votre logement.
            </p>
            <ul className="not-prose grid gap-4 my-8">
              <li className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <span className="font-bold text-blue-700 min-w-[80px]">⚡ 7 kW</span>
                <span className="text-slate-600">Entre <strong>1 200 € et 1 600 €</strong> pose comprise. Monophasé, idéal pour la recharge de nuit.</span>
              </li>
              <li className="flex items-center gap-4 p-4 bg-violet-50 rounded-lg border border-violet-200">
                <span className="font-bold text-violet-700 min-w-[80px]">⚡ 11 kW</span>
                <span className="text-slate-600">Entre <strong>1 400 € et 1 800 €</strong>. Triphasé, charge complète en 5h.</span>
              </li>
              <li className="flex items-center gap-4 p-4 bg-lime-50 rounded-lg border border-lime-200">
                <span className="font-bold text-lime-700 min-w-[80px]">⚡ 22 kW</span>
                <span className="text-slate-600">Entre <strong>1 800 € et 2 500 €</strong>. Triphasé pro, charge ultra-rapide en 2h30.</span>
              </li>
            </ul>
            <p>
              <strong>Bon à savoir :</strong> avec le <span className="text-blue-600 font-bold">crédit d&apos;impôt de 300€</span> et la TVA réduite à 5,5%, le reste à charge peut descendre sous les 900€.
              Pour en savoir plus sur les fabricants, consultez notre <Link href="/marques" className="text-blue-600 font-medium underline">comparatif des marques de bornes</Link>.
            </p>
          </div>

          <div className="lg:w-1/3 space-y-8">
            {/* Sidebar Widget — Quick comparison */}
            <div className="bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-200 p-6 rounded-2xl">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BatteryCharging className="h-5 w-5 text-blue-600" /> Puissance recommandée
              </h3>
              <p className="text-sm text-slate-700 mb-4">
                Pour un usage quotidien (trajet domicile-travail), le <strong>7 kW monophasé</strong> suffit largement. Vous branchez le soir et repartez à 100% le matin.
              </p>
              <Link href="/guides/7kw-vs-11kw-vs-22kw" className="block w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Quel kW pour moi ?
                </Button>
              </Link>
            </div>

            {/* Sidebar Widget — Guides */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100 bg-slate-50">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" /> Guides Récents
                </h3>
              </div>
              <div className="divide-y divide-slate-100">
                {getAllGuides().slice(0, 3).map((guide) => (
                  <Link key={guide.slug} href={`/guides/${guide.slug}`} className="flex gap-4 p-4 hover:bg-blue-50 transition-colors group">
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-1">
                        {guide.title}
                      </h4>
                      <p className="text-xs text-slate-500">{guide.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="p-4 bg-slate-50 text-center">
                <Link href="/guides" className="text-sm font-medium text-blue-600 hover:text-blue-700">
                  Voir tous les articles →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Linking — Departments Grid */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Trouvez un installateur IRVE près de chez vous</h2>
              <p className="text-slate-400">
                Notre réseau couvre 100% du territoire français. Sélectionnez votre département pour accéder à l&apos;annuaire des électriciens certifiés IRVE.
              </p>
            </div>
            <Link href="/annuaire" className="hidden md:inline-flex items-center text-blue-400 hover:text-blue-300 font-medium mt-4 md:mt-0">
              Voir tout l&apos;annuaire <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link href="/annuaire/paris-75" className="dept-card">Paris (75)</Link>
            <Link href="/annuaire/seine-et-marne-77" className="dept-card">Seine-et-Marne (77)</Link>
            <Link href="/annuaire/yvelines-78" className="dept-card">Yvelines (78)</Link>
            <Link href="/annuaire/essonne-91" className="dept-card">Essonne (91)</Link>
            <Link href="/annuaire/hauts-de-seine-92" className="dept-card">Hauts-de-Seine (92)</Link>
            <Link href="/annuaire/seine-saint-denis-93" className="dept-card">Seine-St-Denis (93)</Link>
            <Link href="/annuaire/val-de-marne-94" className="dept-card">Val-de-Marne (94)</Link>
            <Link href="/annuaire/val-d-oise-95" className="dept-card">Val-d&apos;Oise (95)</Link>
            <Link href="/annuaire/rhone-69" className="dept-card">Rhône (69)</Link>
            <Link href="/annuaire/nord-59" className="dept-card">Nord (59)</Link>
            <Link href="/annuaire/gironde-33" className="dept-card">Gironde (33)</Link>
            <Link href="/annuaire/bouches-du-rhone-13" className="dept-card">Bouches-du-Rhône (13)</Link>
            <Link href="/annuaire/haute-garonne-31" className="dept-card">Haute-Garonne (31)</Link>
            <Link href="/annuaire/loire-atlantique-44" className="dept-card">Loire-Atlantique (44)</Link>
            <Link href="/annuaire/seine-maritime-76" className="dept-card">Seine-Maritime (76)</Link>
            <Link href="/annuaire/herault-34" className="dept-card">Hérault (34)</Link>
            <Link href="/annuaire/isere-38" className="dept-card">Isère (38)</Link>
            <Link href="/annuaire/var-83" className="dept-card">Var (83)</Link>
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/annuaire" className="text-blue-400 font-medium">Voir tous les départements →</Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Questions Fréquentes</h2>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Combien coûte l'installation d'une borne de recharge ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "L'installation d'une borne de recharge IRVE coûte entre 1 200€ et 2 500€ selon la puissance (7, 11 ou 22 kW). Avec le crédit d'impôt de 300€ et la TVA réduite, le reste à charge peut descendre sous les 900€."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Faut-il un électricien certifié IRVE ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Oui, depuis 2017, toute installation de borne supérieure à 3,7 kW doit être réalisée par un électricien qualifié IRVE. C'est obligatoire pour bénéficier des aides (crédit d'impôt, ADVENIR)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "7 kW ou 22 kW : quelle puissance choisir ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Pour un usage quotidien (recharge la nuit), le 7 kW monophasé suffit largement et coûte le moins cher. Le 22 kW est recommandé pour les gros rouleurs ou l'usage professionnel."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Peut-on installer une borne en copropriété ?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Oui, le 'droit à la prise' (loi 2014) permet à tout copropriétaire d'installer une borne sur sa place de parking. La copropriété ne peut s'y opposer. Le programme ADVENIR finance jusqu'à 50% des coûts."
                    }
                  }
                ]
              })
            }}
          />

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">Combien coûte l&apos;installation d&apos;une borne de recharge ?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                L&apos;installation d&apos;une borne de recharge IRVE coûte entre <strong>1 200€ et 2 500€</strong> selon la puissance (7, 11 ou 22 kW). Avec le crédit d&apos;impôt de 300€ et la TVA réduite, le reste à charge peut descendre sous les 900€.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">Faut-il un électricien certifié IRVE ?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Oui, depuis 2017, toute installation de borne supérieure à 3,7 kW doit être réalisée par un électricien qualifié IRVE (Qualifelec ou AFNOR). C&apos;est <strong>obligatoire</strong> pour bénéficier du crédit d&apos;impôt et des aides ADVENIR.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">7 kW ou 22 kW : quelle puissance choisir ?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Pour un usage quotidien (recharge la nuit, 30-60 km/jour), le <strong>7 kW monophasé</strong> suffit largement. C&apos;est le choix de 80% des particuliers. Le 22 kW est réservé aux gros rouleurs ou à l&apos;usage professionnel.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold text-slate-800">Peut-on installer une borne en copropriété ?</AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed">
                Oui, le &quot;droit à la prise&quot; (loi 2014) vous permet d&apos;installer une borne sur votre place de parking. La copropriété ne peut pas s&apos;y opposer. Le programme ADVENIR finance jusqu&apos;à 50% des coûts en copropriété.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mt-8 text-center">
            <Link href="/faq" className="inline-flex items-center text-blue-600 font-medium hover:underline">
              Consulter notre FAQ complète <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Prêt à passer à l&apos;électrique ?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Ne payez plus le plein en station. Rechargez chez vous, au meilleur prix.
          </p>
          <Link href="/devis">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 text-xl px-12 h-16 rounded-full shadow-2xl transition-transform hover:scale-105">
              Lancer ma demande de devis
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
          <p className="mt-6 text-sm text-blue-200 opacity-80">
            Gratuit • Sans engagement • 3 devis maximum
          </p>
        </div>
      </section>
    </div>
  );
}
