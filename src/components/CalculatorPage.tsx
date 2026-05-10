import { useEffect, useMemo, useState } from "react";
import {
  Mail,
  FileText,
  ClipboardList,
  Hourglass,
  Copy,
  Check,
  Linkedin,
  PlayCircle,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Wand2,
  Target,
  Calculator as CalcIcon,
  Gauge,
  ShieldCheck,
  CalendarClock,
  Users,
} from "lucide-react";
import { FAQS as SEO_FAQS, LAST_REVIEWED } from "@/lib/seo";

const AFFILIATE_URL =
  "https://www.paypro.nl/producten/Beheers_AI_als_een_expert!_Compleet_cursus_voor_AI!/122439/14535";

const fmtEUR = (n: number) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

const fmtH = (n: number) =>
  new Intl.NumberFormat("nl-NL", { maximumFractionDigits: 1 }).format(
    Math.round(n * 10) / 10,
  );

type Scenario = { label: string; value: number; tag: string };
const SCENARIOS: Scenario[] = [
  { label: "Voorzichtig", value: 0.25, tag: "25%" },
  { label: "Realistisch", value: 0.4, tag: "40%" },
  { label: "Ambitieus", value: 0.6, tag: "60%" },
];

function NumberInput({
  label,
  help,
  value,
  setValue,
  min = 0,
  max = 500,
  prefix,
}: {
  label: string;
  help: string;
  value: number;
  setValue: (n: number) => void;
  min?: number;
  max?: number;
  prefix?: string;
}) {
  return (
    <label className="block group">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <div className="mt-1.5 relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
            {prefix}
          </span>
        )}
        <input
          type="number"
          inputMode="numeric"
          min={min}
          max={max}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => {
            const v = Math.max(min, Math.min(max, Number(e.target.value) || 0));
            setValue(v);
          }}
          className={`w-full rounded-xl border border-border bg-card px-3 py-2.5 text-base text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary ${prefix ? "pl-7" : ""}`}
        />
      </div>
      <span className="mt-1 block text-xs text-muted-foreground">{help}</span>
    </label>
  );
}

function Accordion({
  q,
  a,
  onOpen,
}: {
  q: string;
  a: string;
  onOpen?: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card transition-shadow hover:shadow-sm">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => {
          const next = !open;
          setOpen(next);
          if (next) onOpen?.();
        }}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-semibold text-foreground">{q}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
}

const FAQS = [
  {
    q: "Hoeveel tijd bespaart ChatGPT met administratie?",
    a: "ChatGPT kan tijd besparen bij administratieve taken, maar de exacte besparing hangt af van je taken, prompts en controleproces. Deze calculator gebruikt drie scenario's: 25% voorzichtig, 40% realistisch en 60% ambitieus. Zie de uitkomst als een indicatie, niet als garantie.",
  },
  {
    q: "Kan ChatGPT zakelijke e-mails sneller schrijven?",
    a: "Ja, ChatGPT kan helpen om zakelijke e-mails sneller te schrijven, vooral bij terugkerende situaties. Denk aan klantreacties, opvolgmails, formele antwoorden, samenvattingen of herschrijven in een vriendelijkere toon. Controleer altijd of de inhoud klopt en past bij je situatie.",
  },
  {
    q: "Kan ChatGPT helpen met notulen en vergaderverslagen?",
    a: "Ja, ChatGPT kan helpen om notulen, actiepunten en samenvattingen te structureren op basis van een transcript of ruwe aantekeningen. Gebruik geen vertrouwelijke informatie zonder toestemming of duidelijk intern beleid. Menselijke controle blijft belangrijk, zeker bij besluiten of gevoelige onderwerpen.",
  },
  {
    q: "Is deze berekening een garantie?",
    a: "Nee, deze calculator geeft een indicatieve schatting en geen garantie. De werkelijke tijdwinst hangt af van je taken, werkwijze, promptkwaliteit, ervaring met AI en controle op de output. Gebruik de berekening als praktisch startpunt voor betere workflowkeuzes.",
  },
  {
    q: "Waarom zijn goede prompts belangrijk?",
    a: "Goede prompts zijn belangrijk omdat ChatGPT betere output geeft wanneer de context, taak en gewenste vorm duidelijk zijn. Vage prompts leveren vaak algemene of onnatuurlijke tekst op. Met betere prompts krijg je sneller bruikbare concepten en hoef je minder te corrigeren.",
  },
  {
    q: "Is een ChatGPT-cursus nuttig voor administratief medewerkers?",
    a: "Een ChatGPT-cursus kan nuttig zijn voor administratief medewerkers die regelmatig e-mails, notulen, samenvattingen of standaardteksten maken. Een Nederlandstalige cursus verlaagt de drempel en helpt om prompts te gebruiken in herkenbare werksituaties.",
  },
  {
    q: "Is AI gebruiken voor administratie veilig?",
    a: "AI gebruiken voor administratie kan veilig zijn als je zorgvuldig omgaat met vertrouwelijke informatie en de output controleert. Voer geen gevoelige persoonsgegevens, klantdata of interne documenten in zonder duidelijke toestemming of beleid. Controleer altijd feiten, toon en context.",
  },
  {
    q: "Welke administratieve taken kun je automatiseren met ChatGPT?",
    a: "ChatGPT kan vooral helpen bij terugkerende administratieve taken zoals e-mails opstellen, teksten herschrijven, notulen structureren, actiepunten samenvatten en rapportages voorbereiden. Volledige automatisering is niet altijd verstandig. Controleer de output altijd zelf, zeker bij gevoelige of zakelijke informatie.",
  },
];

const track = (event: string, data?: Record<string, unknown>) => {
  // Analytics hook — connect later (e.g. plausible, GA4)
  if (typeof window !== "undefined") {
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    window.dataLayer.push({ event, ...data });
  }
};

export default function CalculatorPage() {
  const [emails, setEmails] = useState(40);
  const [minPerEmail, setMinPerEmail] = useState(6);
  const [meetings, setMeetings] = useState(3);
  const [minPerMeeting, setMinPerMeeting] = useState(45);
  const [adminTexts, setAdminTexts] = useState(5);
  const [minPerText, setMinPerText] = useState(30);
  const [scenario, setScenario] = useState(0.4);
  const [rate, setRate] = useState(35);
  const [copied, setCopied] = useState(false);
  const [activePromptTab, setActivePromptTab] = useState<"email" | "notulen" | "rapportage">("email");
  const [updated, setUpdated] = useState(false);
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [stickyDismissed, setStickyDismissed] = useState(false);

  useEffect(() => {
    track("calculator_view");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || stickyDismissed) return;
    const onScroll = () => {
      const el = document.getElementById("berekenen");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Show once user has scrolled past the calculator/result block
      setShowStickyCta(rect.bottom < window.innerHeight * 0.4);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [stickyDismissed]);

  useEffect(() => {
    setUpdated(true);
    const t = setTimeout(() => setUpdated(false), 700);
    return () => clearTimeout(t);
  }, [emails, minPerEmail, meetings, minPerMeeting, adminTexts, minPerText, scenario, rate]);

  const calc = useMemo(() => {
    const totalMin =
      emails * minPerEmail + meetings * minPerMeeting + adminTexts * minPerText;
    const totalH = totalMin / 60;
    const savedW = totalH * scenario;
    const savedM = savedW * 4.33;
    const savedY = savedW * 52;
    return {
      totalH,
      savedW,
      savedM,
      savedY,
      valW: savedW * rate,
      valM: savedM * rate,
      valY: savedY * rate,
    };
  }, [emails, minPerEmail, meetings, minPerMeeting, adminTexts, minPerText, scenario, rate]);

  const meterLevel: "Laag" | "Middel" | "Hoog" =
    calc.savedM < 4 ? "Laag" : calc.savedM <= 15 ? "Middel" : "Hoog";
  const meterPct = Math.min(100, Math.max(4, (calc.savedM / 30) * 100));
  const meterText =
    meterLevel === "Laag"
      ? "Je tijdwinst is bescheiden, maar terugkerende taken kunnen nog steeds slimmer."
      : meterLevel === "Middel"
        ? "Je hebt genoeg herhaalbaar werk om AI structureel onderdeel van je workflow te maken."
        : "Je administratieve workflow bevat duidelijke AI-kansen.";

  const shareText = `Ik besteed naar schatting ${fmtH(calc.totalH)} uur per week aan administratie. Met betere AI-prompts kan ik mogelijk ${fmtH(calc.savedM)} uur per maand besparen.`;

  const copyResult = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      track("result_copied");
      setTimeout(() => setCopied(false), 2200);
    } catch {}
  };

  const linkedinShare = () => {
    track("linkedin_share_clicked");
    const url = typeof window !== "undefined" ? window.location.href : "";
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const scenarioPct = Math.round(scenario * 100);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Soft gradient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-mesh"
      />

      {/* HERO */}
      <header className="px-4 pt-10 sm:pt-16 pb-6">
        <div className="mx-auto max-w-6xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Gratis AI Calculator
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tight max-w-4xl">
            AI Tijdwinst Calculator: hoeveel tijd bespaart ChatGPT met
            administratie?
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground">
            Bereken in 60 seconden hoeveel tijd je mogelijk bespaart op
            e-mails, notulen en administratieve teksten met betere
            ChatGPT-prompts.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2 text-sm">
            {["Geen account nodig", "Direct resultaat", "Schatting op basis van je eigen werklast"].map(
              (t) => (
                <li
                  key={t}
                  className="rounded-full border border-border bg-card/60 px-3 py-1 text-muted-foreground"
                >
                  ✓ {t}
                </li>
              ),
            )}
          </ul>

          {/* Time-leak cards */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { Icon: Mail, label: "E-mails", w: "70%" },
              { Icon: FileText, label: "Notulen", w: "55%" },
              { Icon: ClipboardList, label: "Rapportages", w: "40%" },
              { Icon: Hourglass, label: "Tijdverlies", w: "85%" },
            ].map(({ Icon, label, w }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium">{label}</span>
                </div>
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent-2 animate-pulse-soft"
                    style={{ width: w }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* MINI NAV */}
      <nav
        aria-label="Mini navigatie"
        className="sticky top-0 z-30 border-y border-border bg-background/80 backdrop-blur"
      >
        <div className="mx-auto max-w-6xl overflow-x-auto px-4">
          <ul className="flex gap-1 py-2 text-sm whitespace-nowrap">
            {[
              ["Berekenen", "berekenen"],
              ["Voorbeelden", "voorbeelden"],
              ["Methode", "methode"],
              ["FAQ", "faq"],
              ["Verder leren", "verder-leren"],
            ].map(([label, id]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="inline-block rounded-full px-3 py-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="px-4">
        <div className="mx-auto max-w-6xl">
          {/* KORT ANTWOORD */}
          <section className="mt-8">
            <div className="rounded-2xl border border-border bg-secondary/40 p-5">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
                Kort antwoord
              </h2>
              <p className="mt-2 text-sm sm:text-base text-foreground/90 leading-relaxed">
                ChatGPT kan tijd besparen bij administratie door concepten te
                maken voor e-mails, notulen, samenvattingen en rapportages. De
                werkelijke tijdwinst hangt af van je taken, promptvaardigheid en
                controle op AI-output. Deze calculator berekent een voorzichtig,
                realistisch of ambitieus scenario op basis van je eigen
                werklast.
              </p>
            </div>
          </section>

          {/* CALCULATOR */}
          <section id="berekenen" className="mt-10 scroll-mt-20">
            <div className="grid lg:grid-cols-5 gap-6">
              {/* Inputs */}
              <div className="lg:col-span-3 rounded-3xl border border-border bg-card p-5 sm:p-7 shadow-soft">
                <div className="flex items-center gap-2">
                  <CalcIcon className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h2 className="text-xl font-semibold">Bereken je tijdwinst</h2>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Vul je werklast in. Resultaten updaten direct.
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-5">
                  <NumberInput
                    label="Aantal zakelijke e-mails per week"
                    help="Tel alleen mails die echt tijd kosten om te schrijven of beantwoorden."
                    value={emails}
                    setValue={setEmails}
                    max={500}
                  />
                  <NumberInput
                    label="Minuten per e-mail"
                    help="Gemiddelde tijd voor lezen, nadenken, schrijven en controleren."
                    value={minPerEmail}
                    setValue={setMinPerEmail}
                    max={120}
                  />
                  <NumberInput
                    label="Aantal vergaderingen per week"
                    help="Vergaderingen waarvoor je samenvatting, notulen of actiepunten maakt."
                    value={meetings}
                    setValue={setMeetings}
                    max={50}
                  />
                  <NumberInput
                    label="Minuten notulen of verslag per vergadering"
                    help="Tijd voor uitwerken, structureren en versturen."
                    value={minPerMeeting}
                    setValue={setMinPerMeeting}
                    max={240}
                  />
                  <NumberInput
                    label="Aantal administratieve teksten per week"
                    help="Rapportages, korte memo's, klantteksten, standaardbrieven of interne updates."
                    value={adminTexts}
                    setValue={setAdminTexts}
                    max={100}
                  />
                  <NumberInput
                    label="Minuten per tekst of rapportage"
                    help="Gemiddelde tijd om zo'n tekst te maken of herschrijven."
                    value={minPerText}
                    setValue={setMinPerText}
                    max={240}
                  />
                </div>

                <div className="mt-6">
                  <span className="text-sm font-medium">
                    Geschatte tijdsbesparing met AI
                  </span>
                  <div className="mt-2 grid grid-cols-3 gap-2">
                    {SCENARIOS.map((s) => {
                      const active = Math.abs(scenario - s.value) < 0.001;
                      return (
                        <button
                          key={s.value}
                          type="button"
                          aria-pressed={active}
                          onClick={() => {
                            setScenario(s.value);
                            track("scenario_selected", { scenario: s.tag });
                          }}
                          className={`rounded-xl border px-3 py-3 text-left transition-all ${
                            active
                              ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                              : "border-border bg-card hover:border-primary/40"
                          }`}
                        >
                          <div className="text-xs text-muted-foreground">
                            {s.label}
                          </div>
                          <div className="text-lg font-semibold text-foreground">
                            {s.tag}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    Kies een scenario. De uitkomst is een schatting, geen
                    garantie.
                  </span>
                </div>

                <div className="mt-5 max-w-xs">
                  <NumberInput
                    label="Uurtarief of loonkosten per uur"
                    help="Gebruik loonkosten, intern tarief of eigen uurtarief."
                    value={rate}
                    setValue={setRate}
                    max={500}
                    prefix="€"
                  />
                </div>
              </div>

              {/* Results */}
              <aside className="lg:col-span-2">
                <div className="sticky top-16 space-y-4">
                  <div className="rounded-3xl border border-border bg-gradient-primary p-6 text-white shadow-glow">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-semibold">
                        Jouw geschatte AI-tijdwinst
                      </h2>
                      <span
                        className={`text-xs rounded-full bg-white/15 px-2 py-1 transition-opacity ${updated ? "opacity-100" : "opacity-0"}`}
                      >
                        bijgewerkt
                      </span>
                    </div>
                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <ResultMini label="Tijd / week" value={`${fmtH(calc.totalH)} u`} />
                      <ResultMini label="Tijdwinst / week" value={`${fmtH(calc.savedW)} u`} />
                      <ResultBig label="Tijdwinst / maand" value={`${fmtH(calc.savedM)} u`} />
                      <ResultMini label="Tijdwinst / jaar" value={`${fmtH(calc.savedY)} u`} />
                      <ResultMini label="Waarde / week" value={fmtEUR(calc.valW)} />
                      <ResultBig label="Waarde / maand" value={fmtEUR(calc.valM)} />
                      <div className="col-span-2">
                        <ResultBig label="Waarde / jaar" value={fmtEUR(calc.valY)} wide />
                      </div>
                    </div>
                  </div>

                  {/* Meter */}
                  <div className="rounded-3xl border border-border bg-card p-5">
                    <div className="flex items-center gap-2">
                      <Gauge className="h-4 w-4 text-primary" aria-hidden="true" />
                      <h3 className="font-semibold">AI Tijdwinst Meter</h3>
                    </div>
                    <div className="mt-3 relative h-3 w-full rounded-full bg-muted overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary via-accent-2 to-primary transition-all duration-500"
                        style={{ width: `${meterPct}%` }}
                      />
                    </div>
                    <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                      <span>Laag</span>
                      <span>Middel</span>
                      <span>Hoog</span>
                    </div>
                    <p className="mt-3 text-sm text-foreground">
                      <span className="font-semibold text-primary">{meterLevel}.</span>{" "}
                      {meterText}
                    </p>
                  </div>
                </div>
              </aside>
            </div>

            {/* Result explanation */}
            <div className="mt-6 rounded-2xl border border-border bg-card p-5 text-sm sm:text-base text-foreground/90 leading-relaxed">
              Op basis van je invoer besteed je naar schatting{" "}
              <strong>{fmtH(calc.totalH)} uur</strong> per week aan e-mails,
              notulen en administratieve teksten. Bij een gekozen AI-tijdwinst
              van <strong>{scenarioPct}%</strong> kun je ongeveer{" "}
              <strong>{fmtH(calc.savedW)} uur</strong> per week besparen. Dat is
              ongeveer <strong>{fmtH(calc.savedM)} uur</strong> per maand en{" "}
              <strong>{fmtH(calc.savedY)} uur</strong> per jaar. Bij een
              uurtarief van <strong>{fmtEUR(rate)}</strong> vertegenwoordigt dat
              ongeveer <strong>{fmtEUR(calc.valM)}</strong> per maand of{" "}
              <strong>{fmtEUR(calc.valY)}</strong> per jaar aan potentiële
              tijdswaarde.
            </div>

            {/* Share */}
            <div className="mt-6 rounded-3xl border border-border bg-gradient-soft p-6">
              <h3 className="text-lg font-semibold">Deel je resultaat</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Kopieer je berekening en deel deze met een collega, manager of
                team.
              </p>
              <div className="mt-3 rounded-xl border border-border bg-card p-3 text-sm text-foreground/80">
                {shareText}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={copyResult}
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" aria-hidden="true" /> Resultaat
                      gekopieerd.
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden="true" /> Kopieer
                      mijn resultaat
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={linkedinShare}
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" /> Deel op
                  LinkedIn
                </button>
              </div>
            </div>
          </section>

          {/* PROMPT PREVIEW */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              Voorbeeldprompt voor jouw workflow
            </h2>
            <p className="mt-1 text-muted-foreground">
              Zie hoe een betere prompt ruwe input kan omzetten naar bruikbare
              output.
            </p>
            <div className="mt-4 rounded-3xl border border-border bg-card overflow-hidden">
              <div role="tablist" className="flex border-b border-border">
                {([
                  ["email", "E-mail"],
                  ["notulen", "Notulen"],
                  ["rapportage", "Rapportage"],
                ] as const).map(([k, l]) => (
                  <button
                    key={k}
                    role="tab"
                    aria-selected={activePromptTab === k}
                    onClick={() => setActivePromptTab(k)}
                    className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                      activePromptTab === k
                        ? "bg-primary/5 text-primary border-b-2 border-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <div className="p-5">
                <pre className="whitespace-pre-wrap font-sans text-sm text-foreground/90 leading-relaxed">
                  {activePromptTab === "email" &&
                    "Schrijf een professionele Nederlandse e-mail op basis van deze context. Gebruik een vriendelijke, duidelijke toon en sluit af met een concrete vervolgstap: [plak context]."}
                  {activePromptTab === "notulen" &&
                    "Vat deze vergadering samen in drie onderdelen: besluiten, actiepunten en open vragen. Gebruik korte bullets en behoud belangrijke details: [plak transcript of aantekeningen]."}
                  {activePromptTab === "rapportage" &&
                    "Maak van deze ruwe input een gestructureerde interne update met kopjes, korte alinea's en een zakelijke Nederlandse toon: [plak input]."}
                </pre>
                <p className="mt-4 text-sm text-muted-foreground">
                  Wil je leren hoe je zulke prompts zelf opbouwt?{" "}
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="sponsored nofollow noopener"
                    onClick={() => track("cta_promptschool_click", { source: "prompt_preview" })}
                    className="text-primary font-medium hover:underline"
                  >
                    Bekijk PromptSchool
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* PREMIUM CTA */}
          <section className="mt-12">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-cta p-8 sm:p-10 text-white shadow-glow">
              <div
                aria-hidden="true"
                className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl"
              />
              <h2 className="text-2xl sm:text-3xl font-bold max-w-2xl">
                Wil je deze tijdwinst ook echt halen?
              </h2>
              <p className="mt-3 max-w-2xl text-white/90 leading-relaxed">
                Losse prompts kunnen helpen, maar structurele tijdwinst vraagt
                om betere AI-vaardigheden. Met een Nederlandstalige AI-cursus
                zoals PromptSchool leer je hoe je ChatGPT, Claude en Gemini
                doelgericht gebruikt voor e-mails, teksten, samenvattingen en
                dagelijkse kantoorprocessen.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2 text-sm">
                {["Nederlandstalige cursus", "Voor ChatGPT, Claude en Gemini", "Praktisch toepasbaar"].map(
                  (t) => (
                    <li
                      key={t}
                      className="rounded-full bg-white/15 px-3 py-1 backdrop-blur"
                    >
                      ✓ {t}
                    </li>
                  ),
                )}
              </ul>
              <a
                href={AFFILIATE_URL}
                target="_blank"
                rel="sponsored nofollow noopener"
                aria-label="Bekijk de Nederlandse AI-cursus van PromptSchool"
                onClick={() => track("cta_promptschool_click", { source: "main_cta" })}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-primary hover:bg-white/95 transition-all hover:scale-[1.02]"
              >
                Leer betere ChatGPT-prompts schrijven
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-4 text-xs text-white/75">
                Deze pagina bevat affiliate links. Als je via deze link koopt,
                kan ik een commissie ontvangen zonder extra kosten voor jou.
              </p>
            </div>
          </section>

          {/* VIDEO PLACEHOLDER */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold">
              Bekijk hoe betere prompts tijd besparen
            </h2>
            <div className="mt-4 rounded-3xl border border-border bg-card p-6 flex flex-col sm:flex-row items-center gap-5">
              <div className="grid place-items-center h-24 w-24 sm:h-28 sm:w-28 rounded-2xl bg-primary/10 text-primary">
                <PlayCircle className="h-12 w-12" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Een korte uitlegvideo kan hier later laten zien hoe je van
                  ruwe input naar een bruikbare e-mail, samenvatting of
                  notulenprompt gaat.
                </p>
                <button
                  type="button"
                  disabled
                  className="mt-3 inline-flex items-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2 text-sm font-medium text-muted-foreground cursor-not-allowed"
                >
                  Video volgt binnenkort
                </button>
              </div>
            </div>
          </section>

          {/* BEFORE/AFTER */}
          <section id="voorbeelden" className="mt-14 scroll-mt-20">
            <h2 className="text-2xl font-bold">
              Waar bespaar je tijd met ChatGPT?
            </h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                {
                  Icon: Mail,
                  title: "Zakelijke e-mails",
                  desc: "Concepten, formele antwoorden, klantreacties en follow-ups.",
                  before: "Losse gedachte of ruwe klantvraag",
                  after: "Professionele e-mail met duidelijke toon en vervolgstap",
                },
                {
                  Icon: FileText,
                  title: "Notulen en vergaderverslagen",
                  desc: "Samenvattingen, besluitenlijsten en actiepunten.",
                  before: "Rommelig transcript of losse aantekeningen",
                  after: "Besluitenlijst, actiepunten en korte samenvatting",
                },
                {
                  Icon: ClipboardList,
                  title: "Administratieve teksten",
                  desc: "Memo's, standaardbrieven, interne updates en rapportages.",
                  before: "Ruwe input verspreid over mails of documenten",
                  after: "Heldere memo, update of standaardtekst",
                },
                {
                  Icon: Wand2,
                  title: "Samenvattingen",
                  desc: "Lange input terugbrengen naar hoofdpunten.",
                  before: "Lange tekst of overleginput",
                  after: "Korte samenvatting met hoofdpunten",
                },
              ].map(({ Icon, title, desc, before, after }) => (
                <BeforeAfterCard
                  key={title}
                  Icon={Icon}
                  title={title}
                  desc={desc}
                  before={before}
                  after={after}
                />
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-3xl">
              ChatGPT kan vooral tijd besparen bij terugkerende administratieve
              taken waarbij je steeds opnieuw informatie moet ordenen,
              herschrijven of samenvatten. De grootste winst ontstaat wanneer je
              goede Nederlandse prompts gebruikt voor e-mail, notulen,
              rapportages en standaardteksten.
            </p>
          </section>

          {/* METHODE */}
          <section id="methode" className="mt-14 scroll-mt-20">
            <h2 className="text-2xl font-bold">Methode achter de berekening</h2>
            <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                ["1", "Taken invullen"],
                ["2", "Tijd optellen"],
                ["3", "Scenario kiezen"],
                ["4", "Tijdwinst berekenen"],
              ].map(([n, l]) => (
                <div
                  key={n}
                  className="rounded-2xl border border-border bg-card p-5 hover:shadow-md transition-shadow"
                >
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary font-semibold">
                    {n}
                  </div>
                  <div className="mt-3 font-medium">{l}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-3xl">
              De calculator telt de geschatte tijd op voor drie terugkerende
              administratieve taken: e-mails, vergaderverslagen en
              administratieve teksten. Daarna wordt een gekozen
              besparingsscenario toegepast: 25% voorzichtig, 40% realistisch of
              60% ambitieus. De maandberekening gebruikt 4,33 weken per maand en
              de jaarberekening gebruikt 52 weken. De uitkomst is een indicatie,
              geen garantie.
            </p>
          </section>

          {/* WAT */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              Wat berekent deze AI Tijdwinst Calculator?
            </h2>
            <div className="mt-3 space-y-3 text-foreground/90 leading-relaxed max-w-3xl">
              <p>
                Met deze calculator kun je berekenen hoeveel tijd AI mogelijk
                kan besparen door je huidige tijdsbesteding in te vullen voor
                drie veelvoorkomende categorieën: zakelijke e-mails,
                vergaderverslagen en administratieve teksten.
              </p>
              <p>
                De tool rekent met je eigen invoer, een gekozen
                besparingsscenario en een uurtarief. Zo krijg je een indicatie
                van mogelijke urenbesparing per week, per maand en per jaar. Ook
                zie je wat die tijdwinst ongeveer waard kan zijn in euro's.
              </p>
              <p>
                Gebruik de uitkomst als startpunt voor een gesprek over slimmer
                werken, niet als harde financiële voorspelling.
              </p>
            </div>
          </section>

          {/* WAAROM PROMPTS */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              Waarom goede prompts het verschil maken
            </h2>
            <p className="mt-3 max-w-3xl text-foreground/90 leading-relaxed">
              ChatGPT bespaart vooral tijd wanneer je opdracht duidelijk genoeg
              is. Een vage prompt levert vaak algemene, robotachtige tekst op
              die alsnog veel correctiewerk vraagt. Een goede prompt geeft
              context, gewenste toon, doelgroep, lengte en outputvorm mee.
            </p>
            <div className="mt-5 grid md:grid-cols-2 gap-3">
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5">
                <div className="text-xs font-semibold uppercase text-destructive">
                  Slechte prompt
                </div>
                <div className="mt-2 text-sm">
                  vage instructie → generieke tekst → extra correctiewerk
                </div>
              </div>
              <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
                <div className="text-xs font-semibold uppercase text-primary">
                  Goede prompt
                </div>
                <div className="mt-2 text-sm">
                  context + toon + format → duidelijke output → sneller klaar
                </div>
              </div>
            </div>
            <ul className="mt-5 grid sm:grid-cols-3 gap-3 text-sm">
              {["Geef context", "Specificeer toon en format", "Controleer de output"].map(
                (b) => (
                  <li
                    key={b}
                    className="rounded-xl border border-border bg-card px-4 py-3 flex items-center gap-2"
                  >
                    <Target className="h-4 w-4 text-primary" aria-hidden="true" />{" "}
                    {b}
                  </li>
                ),
              )}
            </ul>
          </section>

          {/* PERSONAS */}
          <section className="mt-14">
            <h2 className="text-2xl font-bold">
              Voor wie is deze calculator bedoeld?
            </h2>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                ["Managementassistenten", "Voor wie veel tijd kwijt is aan e-mail, verslaglegging, afspraken en interne communicatie."],
                ["Secretaresses", "Voor wie sneller professionele mails, samenvattingen en administratieve teksten wil maken."],
                ["Administratief medewerkers", "Voor wie terugkerende kantoorprocessen wil versnellen zonder kwaliteit te verliezen."],
                ["Ondernemers en zzp'ers", "Voor wie zelf e-mails, klantcommunicatie, offertes, updates en marketingteksten maakt."],
                ["Officemanagers en teamleiders", "Voor wie wil inschatten hoeveel AI-training kan bijdragen aan productiviteit in het team."],
              ].map(([t, d]) => (
                <div
                  key={t}
                  className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <div className="font-semibold">{t}</div>
                  <div className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {d}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-3xl">
              Deze calculator is minder geschikt voor taken waarbij creatief
              oordeel, strategie of gevoelige besluitvorming belangrijker is dan
              snelheid.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="mt-14 scroll-mt-20">
            <h2 className="text-2xl font-bold">Veelgestelde vragen</h2>
            <div className="mt-5 space-y-3">
              {FAQS.map((f) => (
                <Accordion
                  key={f.q}
                  q={f.q}
                  a={f.a}
                  onOpen={() => track("faq_opened", { q: f.q })}
                />
              ))}
            </div>
          </section>

          {/* VERDER LEREN */}
          <section id="verder-leren" className="mt-14 scroll-mt-20">
            <h2 className="text-2xl font-bold">Verder leren</h2>
            <div className="mt-5 grid sm:grid-cols-2 gap-4">
              {[
                "Nederlandse ChatGPT Prompt Generator",
                "Zakelijke e-mails schrijven met ChatGPT",
                "Notulen maken met ChatGPT",
                "ChatGPT voor managementassistenten",
              ].map((t) => (
                <a
                  key={t}
                  href="#"
                  onClick={() => track("internal_link_click", { title: t })}
                  className="group rounded-2xl border border-border bg-card p-5 flex items-center justify-between hover:border-primary/40 hover:shadow-md transition-all"
                >
                  <span className="font-medium">{t}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" aria-hidden="true" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-muted-foreground space-y-3">
          <p>
            Deze calculator geeft een schatting. De werkelijke tijdwinst hangt
            af van je taken, werkwijze, promptvaardigheid en controle op
            AI-output.
          </p>
          <p>
            Deze pagina bevat affiliate links. Als je via deze link koopt, kan
            ik een commissie ontvangen zonder extra kosten voor jou.
          </p>
          <ul className="flex flex-wrap gap-4 pt-2">
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><a href="#" className="hover:text-foreground">Contact</a></li>
            <li><a href="#" className="hover:text-foreground">Methodologie</a></li>
          </ul>
        </div>
      </footer>

      {/* STICKY MOBILE CTA */}
      {showStickyCta && !stickyDismissed && (
        <div
          className="md:hidden fixed bottom-3 inset-x-3 z-40 rounded-2xl border border-border bg-card/95 backdrop-blur shadow-glow p-3 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4"
          role="region"
          aria-label="Cursus call-to-action"
        >
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold text-foreground truncate">
              Leer betere prompts schrijven
            </div>
            <div className="text-xs text-muted-foreground truncate">
              Nederlandstalige AI-cursus
            </div>
          </div>
          <a
            href={AFFILIATE_URL}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={() => track("cta_promptschool_click", { source: "sticky_mobile" })}
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors whitespace-nowrap"
          >
            Bekijk cursus
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setStickyDismissed(true)}
            aria-label="Sluit"
            className="grid place-items-center h-7 w-7 rounded-full text-muted-foreground hover:bg-secondary"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}

function ResultMini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/10 backdrop-blur p-3">
      <div className="text-xs text-white/70">{label}</div>
      <div className="mt-0.5 text-lg font-semibold tabular-nums">{value}</div>
    </div>
  );
}

function ResultBig({ label, value, wide }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={`rounded-xl bg-white/15 backdrop-blur p-3 ring-1 ring-white/20 ${wide ? "" : ""}`}>
      <div className="text-xs text-white/80">{label}</div>
      <div className="mt-0.5 text-2xl font-bold tabular-nums">{value}</div>
    </div>
  );
}

function BeforeAfterCard({
  Icon,
  title,
  desc,
  before,
  after,
}: {
  Icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" }>;
  title: string;
  desc: string;
  before: string;
  after: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setOpen((o) => !o)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      aria-expanded={open}
      className="text-left rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-3">
        <span className="rounded-lg bg-primary/10 p-2 text-primary">
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      <div
        className={`grid transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}
      >
        <div className="overflow-hidden">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-lg bg-muted px-3 py-2">
              <div className="font-semibold uppercase text-[10px] text-muted-foreground">Voor</div>
              <div className="mt-0.5 text-foreground">{before}</div>
            </div>
            <div className="rounded-lg bg-primary/10 px-3 py-2">
              <div className="font-semibold uppercase text-[10px] text-primary">Na</div>
              <div className="mt-0.5 text-foreground">{after}</div>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
