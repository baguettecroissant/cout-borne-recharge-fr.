"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight, Zap, Clock, Euro, Gauge, BatteryCharging,
  Car, Info, ChevronDown, RotateCcw, Fuel, Leaf,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import {
  VEHICULES_EV, BORNES, TARIFS_ELECTRICITE, CATEGORIES_LABEL,
  calculateChargeTime, formatDuree,
  type VehiculeEV, type ChargeResult,
} from "@/data/ev-charging";

/* ──────────────── helpers ──────────────── */

function fmtEuro(n: number): string {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 2 }).format(n);
}

/* ──────────────── Gauge Component ──────────────── */

function ChargeGauge({ minutes, maxMinutes }: { minutes: number; maxMinutes: number }) {
  const pct = Math.min(100, (minutes / maxMinutes) * 100);
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (pct / 100) * circumference;

  // Color based on speed
  let color = "text-green-500";
  let bgColor = "text-green-100";
  if (minutes > 600) { color = "text-red-500"; bgColor = "text-red-100"; }
  else if (minutes > 360) { color = "text-amber-500"; bgColor = "text-amber-100"; }
  else if (minutes > 180) { color = "text-blue-500"; bgColor = "text-blue-100"; }

  return (
    <div className="relative w-40 h-40 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="54" fill="none" strokeWidth="10" className={`stroke-current ${bgColor}`} />
        <circle
          cx="60" cy="60" r="54" fill="none" strokeWidth="10"
          strokeLinecap="round"
          className={`stroke-current ${color} transition-all duration-1000`}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Clock className={`h-5 w-5 ${color} mb-1`} />
        <span className="text-2xl font-black text-slate-900 font-mono">{formatDuree(minutes)}</span>
        <span className="text-xs text-slate-400">de charge</span>
      </div>
    </div>
  );
}

/* ──────────────── Vehicle selector ──────────────── */

function VehicleSelector({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (key: string) => void;
}) {
  const [openCat, setOpenCat] = useState<string>("citadine");
  const categories = Object.keys(CATEGORIES_LABEL);

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map(cat => {
          const info = CATEGORIES_LABEL[cat];
          const count = VEHICULES_EV.filter(v => v.categorie === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setOpenCat(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all
                ${openCat === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`}
            >
              {info.emoji} {info.label} ({count})
            </button>
          );
        })}
      </div>

      {/* Vehicles list */}
      <div className="grid gap-2 max-h-72 overflow-y-auto pr-1">
        {VEHICULES_EV.filter(v => v.categorie === openCat).map(v => (
          <button
            key={v.key}
            onClick={() => onSelect(v.key)}
            className={`p-4 border-2 rounded-2xl text-left transition-all flex items-center gap-4
              ${selected === v.key
                ? "border-blue-400 bg-blue-50 shadow-sm"
                : "border-slate-200 hover:border-blue-300"}`}
          >
            <span className="text-2xl">{v.emoji}</span>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-slate-900">{v.marque} {v.modele}</p>
              <div className="flex flex-wrap gap-3 text-xs text-slate-500 mt-1">
                <span>🔋 {v.batterie_kwh} kWh</span>
                <span>⚡ {v.chargeur_ac_kw} kW AC</span>
                <span>🛣️ {v.autonomie_km} km</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ──────────────── Main page ──────────────── */

export default function CalculateurTempsCharge() {
  // Vehicle
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>("tesla-model3");
  const [manualBattery, setManualBattery] = useState<number | null>(null);
  const [manualCharger, setManualCharger] = useState<number | null>(null);
  const [manualConso, setManualConso] = useState<number | null>(null);
  const [useManual, setUseManual] = useState(false);

  // Charge params
  const [selectedBorne, setSelectedBorne] = useState("wallbox-7kw");
  const [socDepart, setSocDepart] = useState(20);
  const [socArrivee, setSocArrivee] = useState(80);
  const [tarif, setTarif] = useState<keyof typeof TARIFS_ELECTRICITE>("hc");

  // Computed vehicle specs
  const vehicle = useMemo(() => {
    if (useManual) return null;
    return VEHICULES_EV.find(v => v.key === selectedVehicle) || null;
  }, [selectedVehicle, useManual]);

  const batterie = useManual ? (manualBattery || 60) : (vehicle?.batterie_kwh || 60);
  const chargeur = useManual ? (manualCharger || 11) : (vehicle?.chargeur_ac_kw || 11);
  const conso = useManual ? (manualConso || 15) : (vehicle?.conso_kwh_100km || 15);

  const borne = BORNES.find(b => b.key === selectedBorne)!;
  const tarifObj = TARIFS_ELECTRICITE[tarif];

  // Calculate for selected borne
  const result: ChargeResult = useMemo(() => {
    return calculateChargeTime({
      batterie_kwh: batterie,
      chargeur_ac_kw: chargeur,
      borne_kw: borne.puissance_kw,
      soc_depart: socDepart,
      soc_arrivee: socArrivee,
      tarif_kwh: tarifObj.prix_kwh,
      conso_kwh_100km: conso,
    });
  }, [batterie, chargeur, borne, socDepart, socArrivee, tarifObj, conso]);

  // Calculate comparison across all bornes
  const comparison = useMemo(() => {
    return BORNES.map(b => ({
      borne: b,
      result: calculateChargeTime({
        batterie_kwh: batterie,
        chargeur_ac_kw: chargeur,
        borne_kw: b.puissance_kw,
        soc_depart: socDepart,
        soc_arrivee: socArrivee,
        tarif_kwh: tarifObj.prix_kwh,
        conso_kwh_100km: conso,
      }),
    }));
  }, [batterie, chargeur, socDepart, socArrivee, tarifObj, conso]);

  // Maximum time for gauge scale
  const maxMinutes = Math.max(...comparison.map(c => c.result.temps_charge_min), 60);

  /* ════════════════════════════════════ */

  return (
    <div className="min-h-screen bg-slate-50">
      {/* ── Hero ── */}
      <section className="bg-slate-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-violet-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs items={[{ label: "Calculateur Temps de Charge" }]} />
          <div className="max-w-3xl mx-auto text-center mt-4">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 text-blue-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <BatteryCharging className="h-4 w-4" />
              Simulateur 100% Gratuit — 24 Véhicules
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Calculateur de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Temps de Charge
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Combien de temps pour recharger votre voiture électrique ? Simulez selon votre véhicule, la puissance de borne et votre tarif d&apos;électricité.
            </p>
          </div>
        </div>
      </section>

      {/* ── Calculator ── */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-8">

            {/* ── Left: Inputs (3 cols) ── */}
            <div className="lg:col-span-3 space-y-6">

              {/* Vehicle Selection */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Car className="h-5 w-5 text-blue-600" /> Votre véhicule
                  </h2>
                  <button
                    onClick={() => setUseManual(!useManual)}
                    className="text-xs text-blue-600 hover:underline font-medium"
                  >
                    {useManual ? "← Choisir un modèle" : "Saisie manuelle →"}
                  </button>
                </div>

                {!useManual ? (
                  <VehicleSelector selected={selectedVehicle} onSelect={setSelectedVehicle} />
                ) : (
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Batterie (kWh)</label>
                      <input
                        type="number"
                        value={manualBattery || ""}
                        onChange={(e) => setManualBattery(Number(e.target.value))}
                        placeholder="60"
                        className="w-full h-12 px-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 text-lg font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Chargeur AC (kW)</label>
                      <input
                        type="number"
                        value={manualCharger || ""}
                        onChange={(e) => setManualCharger(Number(e.target.value))}
                        placeholder="11"
                        className="w-full h-12 px-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 text-lg font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Conso (kWh/100km)</label>
                      <input
                        type="number"
                        value={manualConso || ""}
                        onChange={(e) => setManualConso(Number(e.target.value))}
                        placeholder="15"
                        className="w-full h-12 px-3 border-2 border-slate-200 rounded-xl focus:border-blue-400 text-lg font-mono"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Charging Station */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <Zap className="h-5 w-5 text-violet-600" /> Puissance de borne
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {BORNES.map(b => (
                    <button
                      key={b.key}
                      onClick={() => setSelectedBorne(b.key)}
                      className={`p-4 border-2 rounded-2xl text-center transition-all
                        ${selectedBorne === b.key
                          ? "border-blue-400 bg-blue-50 shadow-sm"
                          : "border-slate-200 hover:border-blue-300"}`}
                    >
                      <span className="text-2xl block mb-1">{b.emoji}</span>
                      <p className="font-bold text-slate-900 text-lg">{b.puissance_kw} kW</p>
                      <p className="text-xs text-slate-500">{b.label}</p>
                      <p className="text-xs text-slate-400 mt-1">{b.installation}</p>
                    </button>
                  ))}
                </div>

                {/* Puissance effective warning */}
                {borne.puissance_kw > chargeur && (
                  <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-start gap-2">
                    <Info className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-800">
                      <strong>Votre véhicule accepte max {chargeur} kW en AC.</strong>{" "}
                      La borne {borne.puissance_kw} kW sera bridée à {chargeur} kW.
                      La puissance effective sera de <strong>{result.puissance_effective_kw} kW</strong>.
                    </p>
                  </div>
                )}
              </div>

              {/* SOC Sliders */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <BatteryCharging className="h-5 w-5 text-green-600" /> Niveau de charge
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center justify-between text-sm font-medium text-slate-700 mb-2">
                      <span>Charge actuelle</span>
                      <span className="font-mono font-bold text-lg text-blue-600">{socDepart}%</span>
                    </label>
                    <input
                      type="range" min="0" max="95" step="5"
                      value={socDepart}
                      onChange={(e) => {
                        const v = Number(e.target.value);
                        setSocDepart(v);
                        if (v >= socArrivee) setSocArrivee(Math.min(100, v + 5));
                      }}
                      className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-1"><span>0%</span><span>100%</span></div>
                  </div>
                  <div>
                    <label className="flex items-center justify-between text-sm font-medium text-slate-700 mb-2">
                      <span>Charge cible</span>
                      <span className="font-mono font-bold text-lg text-green-600">{socArrivee}%</span>
                    </label>
                    <input
                      type="range" min="5" max="100" step="5"
                      value={socArrivee}
                      onChange={(e) => {
                        const v = Number(e.target.value);
                        setSocArrivee(v);
                        if (v <= socDepart) setSocDepart(Math.max(0, v - 5));
                      }}
                      className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600"
                    />
                    <div className="flex justify-between text-xs text-slate-400 mt-1"><span>0%</span><span>100%</span></div>
                  </div>
                </div>

                {/* Battery bar visualization */}
                <div className="mt-4 bg-slate-100 rounded-full h-6 relative overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-slate-300 rounded-l-full transition-all"
                    style={{ width: `${socDepart}%` }}
                  />
                  <div
                    className="absolute top-0 h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all rounded-r-full"
                    style={{ left: `${socDepart}%`, width: `${socArrivee - socDepart}%` }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white mix-blend-difference">
                    {socDepart}% → {socArrivee}% ({socArrivee - socDepart}% à charger)
                  </div>
                </div>
              </div>

              {/* Tariff */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <Euro className="h-5 w-5 text-amber-600" /> Tarif d&apos;électricité
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  {(Object.entries(TARIFS_ELECTRICITE) as [keyof typeof TARIFS_ELECTRICITE, typeof TARIFS_ELECTRICITE[keyof typeof TARIFS_ELECTRICITE]][]
                  ).map(([key, t]) => (
                    <button
                      key={key}
                      onClick={() => setTarif(key)}
                      className={`p-4 border-2 rounded-2xl text-center transition-all
                        ${tarif === key
                          ? "border-blue-400 bg-blue-50 shadow-sm"
                          : "border-slate-200 hover:border-blue-300"}`}
                    >
                      <p className="font-bold text-slate-900 text-sm">{t.label}</p>
                      <p className="text-lg font-mono font-bold text-blue-600 mt-1">{t.prix_kwh.toFixed(4)} €</p>
                      <p className="text-xs text-slate-400 mt-0.5">/kWh</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Results (2 cols) ── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Main result */}
              <div className="bg-gradient-to-br from-blue-700 via-blue-600 to-violet-600 rounded-3xl p-6 md:p-8 text-white text-center relative overflow-hidden sticky top-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
                <div className="relative z-10">
                  <p className="text-blue-200 text-sm mb-4">
                    {vehicle ? `${vehicle.marque} ${vehicle.modele}` : "Saisie personnalisée"} • {borne.label}
                  </p>

                  <ChargeGauge minutes={result.temps_charge_min} maxMinutes={maxMinutes} />

                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
                      <p className="text-blue-200 text-xs mb-1">Énergie</p>
                      <p className="text-xl font-black font-mono">{result.energie_necessaire_kwh} kWh</p>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
                      <p className="text-blue-200 text-xs mb-1">Coût</p>
                      <p className="text-xl font-black font-mono">{fmtEuro(result.cout_charge_euros)}</p>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
                      <p className="text-blue-200 text-xs mb-1">Autonomie récupérée</p>
                      <p className="text-xl font-black font-mono">{result.km_recuperes} km</p>
                    </div>
                    <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-4">
                      <p className="text-blue-200 text-xs mb-1">Coût / 100 km</p>
                      <p className="text-xl font-black font-mono">{fmtEuro(result.cout_100km)}</p>
                    </div>
                  </div>

                  {/* VS Essence */}
                  <div className="mt-4 bg-white/10 rounded-2xl p-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1"><Fuel className="h-4 w-4" /> Essence</span>
                      <span className="font-mono font-bold">~{fmtEuro(7.5 * conso / 15)}/100km</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-1">
                      <span className="flex items-center gap-1"><Leaf className="h-4 w-4" /> Électrique</span>
                      <span className="font-mono font-bold text-green-300">{fmtEuro(result.cout_100km)}/100km</span>
                    </div>
                    <div className="mt-2 text-xs text-green-300 font-medium">
                      🎉 Vous économisez ~{fmtEuro(7.5 * conso / 15 - result.cout_100km)}/100km en électrique
                    </div>
                  </div>

                  <p className="text-xs text-blue-200 mt-4">
                    Puissance effective : {result.puissance_effective_kw} kW • Rendement : {result.rendement_pct}%
                  </p>
                </div>
              </div>

              {/* Comparison table */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm">
                  <Gauge className="h-4 w-4 text-blue-600" /> Comparaison par puissance
                </h3>
                <div className="space-y-3">
                  {comparison.map(({ borne: b, result: r }) => {
                    const isSelected = b.key === selectedBorne;
                    return (
                      <button
                        key={b.key}
                        onClick={() => setSelectedBorne(b.key)}
                        className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4
                          ${isSelected ? "border-blue-400 bg-blue-50" : "border-slate-100 hover:border-slate-200"}`}
                      >
                        <div className="text-2xl">{b.emoji}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900">{b.label}</span>
                            <span className="font-mono font-bold text-blue-600">{formatDuree(r.temps_charge_min)}</span>
                          </div>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-xs text-slate-400">{b.installation}</span>
                            <span className="text-xs text-slate-500">{fmtEuro(r.cout_charge_euros)}</span>
                          </div>
                          {/* Mini bar */}
                          <div className="mt-2 bg-slate-100 rounded-full h-2 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-700"
                              style={{ width: `${Math.min(100, (r.temps_charge_min / maxMinutes) * 100)}%` }}
                            />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <Link href="/devis" className="block">
                <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-6 text-white text-center hover:shadow-xl transition-shadow">
                  <p className="text-sm text-blue-200 mb-2">Prêt à installer votre borne ?</p>
                  <p className="text-xl font-bold mb-3">Comparez 3 devis gratuits</p>
                  <Button className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 font-bold">
                    Demander mes devis <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEO Content ── */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-4xl prose prose-slate">
          <h2>Comment calculer le temps de recharge d&apos;une voiture électrique ?</h2>
          <p>
            Le temps de charge d&apos;un véhicule électrique dépend de <strong>3 facteurs</strong> : la capacité de la batterie (en kWh),
            la puissance de la borne installée (en kW) et la puissance maximale acceptée par le <strong>chargeur embarqué</strong> du véhicule.
          </p>

          <h3>La formule de base</h3>
          <p>
            Temps de charge = <strong>(Capacité batterie × ΔSoC) ÷ Puissance effective</strong>. La puissance effective est le minimum
            entre la puissance de la borne et celle du chargeur embarqué. Par exemple, une Tesla Model 3 (60 kWh, chargeur 11 kW AC)
            branchée sur une <strong>borne 7 kW</strong> se charge à 7 kW, pas à 11.
          </p>

          <h3>Le ralentissement au-delà de 80%</h3>
          <p>
            Pour préserver la batterie, la puissance de charge diminue au-delà de 80% de SoC. C&apos;est pourquoi
            on recommande de <strong>charger de 20% à 80%</strong> au quotidien. Notre calculateur intègre cette courbe
            de ralentissement dans ses estimations.
          </p>

          <h3>Quelle puissance de borne choisir ?</h3>
          <ul>
            <li><strong>3,7 kW (prise renforcée)</strong> : suffisant si vous roulez moins de 40 km/jour. Économique mais très lent.</li>
            <li><strong>7 kW (wallbox monophasé)</strong> : le standard domestique. Recharge complète en une nuit. <Link href="/guides/7kw-vs-11kw-vs-22kw" className="text-blue-600">Le choix de 80% des particuliers</Link>.</li>
            <li><strong>11 kW (wallbox triphasé)</strong> : idéal si votre véhicule accepte 11 kW AC et que vous avez le triphasé.</li>
            <li><strong>22 kW (pro)</strong> : seulement utile si votre véhicule l&apos;accepte (ex: Renault Scenic, Kangoo).</li>
          </ul>

          <h3>Combien coûte une recharge à domicile ?</h3>
          <p>
            En heures creuses (0,2068 €/kWh), recharger une Renault 5 E-Tech de 20% à 80% coûte environ <strong>7,16 €</strong> pour
            280 km d&apos;autonomie — soit <strong>2,56 € aux 100 km</strong>. C&apos;est 4 à 5 fois moins cher que l&apos;essence.
          </p>

          <p>
            Pour obtenir le meilleur prix d&apos;installation, <Link href="/devis" className="text-blue-600 font-semibold">comparez 3 devis gratuits</Link> d&apos;électriciens
            IRVE certifiés près de chez vous.
          </p>
        </div>
      </section>
    </div>
  );
}
