// Centralized SEO / GEO / AI-Overview metadata for the AI Tijdwinst Calculator.
// Optimized for Dutch search (Google NL, Bing NL) and AI answer engines
// (Google AI Overviews / SGE, ChatGPT Search, Perplexity, Bing Copilot).

export const SITE_ORIGIN = "https://YOURDOMAIN.nl";
export const CANONICAL =
  "https://YOURDOMAIN.nl/ai-tijdwinst-calculator-voor-administratie/";
export const OG_IMAGE = `${SITE_ORIGIN}/og-ai-tijdwinst-calculator.jpg`;

export const META_TITLE =
  "AI Tijdwinst Calculator 2026: hoeveel tijd bespaart ChatGPT met administratie?";
export const META_DESC =
  "Bereken in 60 seconden hoeveel uur en geld je per week, maand en jaar bespaart met ChatGPT voor e-mail, notulen en administratie. Gratis Nederlandse AI-calculator + prompts.";

// FAQ entries — written so each answer functions as a stand-alone snippet
// for AI Overviews, Bing Copilot, ChatGPT Search and Perplexity. First sentence
// always restates the question and gives a concrete answer.
export const FAQS: ReadonlyArray<readonly [string, string]> = [
  [
    "Hoeveel tijd bespaart ChatGPT met administratie?",
    "ChatGPT bespaart bij administratief werk gemiddeld 20% tot 60% van de tijd op terugkerende taken zoals e-mails, notulen, samenvattingen en standaardteksten. Voor een typische kantoormedewerker komt dat neer op ongeveer 3 tot 8 uur per week, afhankelijk van het takenpakket, de promptkwaliteit en de controle op de output. Deze calculator rekent met drie scenario's: 25% voorzichtig, 40% realistisch en 60% ambitieus.",
  ],
  [
    "Hoeveel tijd bespaart ChatGPT met e-mail per dag?",
    "ChatGPT bespaart bij zakelijke e-mail gemiddeld 30% tot 50% van de schrijftijd. Voor iemand die 30 tot 50 e-mails per dag verstuurt komt dat neer op 20 tot 60 minuten per dag. De grootste winst zit in herhaalbare situaties zoals klantantwoorden, opvolgmails, samenvattingen en formele bevestigingen.",
  ],
  [
    "Kan ChatGPT zakelijke e-mails sneller schrijven in het Nederlands?",
    "Ja, ChatGPT schrijft zakelijke e-mails sneller in het Nederlands wanneer je context, doelgroep, toon en gewenste vervolgstap meegeeft. Geef in je prompt aan: situatie, ontvanger, doel, gewenste lengte en stijl (formeel, vriendelijk of direct). Controleer altijd op feiten, naamspelling en passende toon.",
  ],
  [
    "Kan ChatGPT helpen met notulen, vergaderverslagen en actiepunten?",
    "Ja, ChatGPT structureert notulen, besluitenlijsten en actiepunten op basis van een transcript of ruwe aantekeningen. Vraag om drie blokken: besluiten, actiepunten met eigenaar en deadline, en open vragen. Gebruik geen vertrouwelijke of persoonlijke informatie zonder duidelijk intern AVG-beleid.",
  ],
  [
    "Is ChatGPT veilig voor zakelijke administratie en AVG?",
    "ChatGPT is veilig voor zakelijke administratie als je geen herleidbare persoonsgegevens, klantdata, financiële data of vertrouwelijke documenten invoert zonder toestemming. Gebruik bij voorkeur een zakelijke ChatGPT Team- of Enterprise-omgeving met data-uitsluiting voor training, of anonimiseer gevoelige input. Leg het gebruik vast in een AI-protocol.",
  ],
  [
    "ChatGPT vs Microsoft Copilot voor Nederlandse kantoorwerk: wat bespaart meer tijd?",
    "Microsoft Copilot bespaart vaak meer tijd binnen Outlook, Word en Excel omdat het direct in je bestaande documenten en mailbox werkt. ChatGPT bespaart meer tijd bij vrije teksten, complexere prompts, brainstormen en taken buiten Microsoft 365. Veel Nederlandse kantoormedewerkers gebruiken beide naast elkaar: Copilot voor in-app werk en ChatGPT voor losse teksten en research.",
  ],
  [
    "Welke administratieve taken kun je automatiseren met ChatGPT?",
    "Met ChatGPT kun je vooral terugkerende administratieve taken versnellen: e-mails opstellen, teksten herschrijven, notulen structureren, actiepunten samenvatten, standaardbrieven maken, offertes voorbereiden en interne updates schrijven. Volledige automatisering is meestal niet verstandig — controleer de output altijd zelf, zeker bij gevoelige of zakelijke informatie.",
  ],
  [
    "Welke ChatGPT-prompts werken het beste voor administratief werk?",
    "De beste ChatGPT-prompts voor administratief werk geven altijd vier dingen mee: rol (\"jij bent een ervaren managementassistent\"), context (situatie en doel), formaat (lengte, structuur, taal) en toon (formeel, vriendelijk, direct). Voorbeeld: \"Schrijf een korte, vriendelijke Nederlandse follow-up mail aan een klant die nog niet heeft betaald, met een duidelijke call-to-action en uiterste betaaldatum.\"",
  ],
  [
    "Is een Nederlandstalige ChatGPT-cursus de moeite waard voor administratief medewerkers?",
    "Een Nederlandstalige ChatGPT-cursus is de moeite waard voor administratief medewerkers die wekelijks meer dan vijf uur kwijt zijn aan e-mails, notulen, samenvattingen of standaardteksten. Een goede cursus leert je promptstructuren, herbruikbare templates en veilige werkwijzen — meestal verdien je de tijdsinvestering binnen één tot twee weken terug.",
  ],
  [
    "Waarom geeft ChatGPT in het Nederlands soms slechte of robotachtige tekst?",
    "ChatGPT geeft in het Nederlands soms robotachtige tekst omdat het model standaard formeel-Engels denkt en letterlijk vertaalt. Voorkom dit door expliciet om \"natuurlijk Nederlands\" te vragen, een toon mee te geven (\"informeel, vlot\") en een voorbeeld van je gewenste schrijfstijl te plakken. Vraag eventueel om twee varianten en kies de beste.",
  ],
  [
    "Is deze AI Tijdwinst Calculator een garantie?",
    "Nee, deze AI Tijdwinst Calculator geeft een indicatieve schatting en geen garantie. De werkelijke tijdwinst hangt af van je takenpakket, werkwijze, promptkwaliteit, ervaring met AI-tools en de tijd die je besteedt aan controle. Gebruik de berekening als startpunt voor een gesprek over slimmer werken.",
  ],
];

const ORG = {
  "@type": "Organization",
  name: "AI Tijdwinst Calculator",
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/logo.png`,
};

const AUTHOR = {
  "@type": "Person",
  name: "Redactie AI Tijdwinst",
  jobTitle: "AI productiviteits-redactie",
  knowsAbout: [
    "ChatGPT",
    "Prompt engineering",
    "Nederlandse kantoorautomatisering",
    "AI voor administratie",
  ],
};

export const LAST_REVIEWED = "2026-05-10";

export function buildJsonLd(canonical: string = CANONICAL) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: "AI Tijdwinst Calculator",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      inLanguage: "nl-NL",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      description: META_DESC,
      url: canonical,
      featureList: [
        "Bereken tijdwinst per week, maand en jaar",
        "Drie scenario's: voorzichtig, realistisch, ambitieus",
        "Geschatte waarde in euro's op basis van uurtarief",
        "Voorbeeldprompts voor e-mail, notulen en rapportage",
      ],
      publisher: ORG,
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline:
        "Hoeveel tijd bespaart ChatGPT met administratie? Berekening + benchmarks 2026",
      description: META_DESC,
      inLanguage: "nl-NL",
      datePublished: "2026-04-01",
      dateModified: LAST_REVIEWED,
      author: AUTHOR,
      publisher: ORG,
      mainEntityOfPage: canonical,
      image: OG_IMAGE,
      about: [
        { "@type": "Thing", name: "ChatGPT" },
        { "@type": "Thing", name: "Administratie" },
        { "@type": "Thing", name: "Prompt engineering" },
        { "@type": "Thing", name: "Productiviteit" },
      ],
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["#kort-antwoord", "h1"],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: "Hoe bereken je hoeveel tijd ChatGPT bespaart bij administratie",
      inLanguage: "nl-NL",
      totalTime: "PT2M",
      step: [
        { "@type": "HowToStep", name: "Vul je werklast in", text: "Geef per week op hoeveel e-mails, vergaderingen en administratieve teksten je behandelt en hoeveel minuten ze kosten." },
        { "@type": "HowToStep", name: "Kies een AI-scenario", text: "Selecteer 25% voorzichtig, 40% realistisch of 60% ambitieus als verwachte tijdsbesparing." },
        { "@type": "HowToStep", name: "Vul je uurtarief in", text: "Gebruik je interne uurtarief of loonkosten per uur om de waarde in euro's te berekenen." },
        { "@type": "HowToStep", name: "Bekijk de uitkomst", text: "Lees je geschatte tijdwinst per week, maand en jaar en de bijbehorende waarde in euro's." },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "Tools", item: `${SITE_ORIGIN}/tools/` },
        { "@type": "ListItem", position: 3, name: "AI Tijdwinst Calculator", item: canonical },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ];
}

export function buildHead(canonical: string = CANONICAL) {
  return {
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "language", content: "nl-NL" },
      { name: "author", content: "Redactie AI Tijdwinst" },
      { name: "keywords", content: "AI tijdwinst calculator, hoeveel tijd bespaart ChatGPT met administratie, ChatGPT administratie Nederlands, ChatGPT e-mail prompts Nederlands, ChatGPT notulen, ChatGPT secretaresse, ChatGPT managementassistent, prompt engineering cursus Nederlands, ChatGPT vs Copilot Nederland, AI productiviteit kantoor" },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESC },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nl_NL" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: META_TITLE },
      { name: "twitter:description", content: META_DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: canonical },
      { rel: "alternate", hrefLang: "nl-NL", href: canonical },
      { rel: "alternate", hrefLang: "x-default", href: canonical },
    ],
    scripts: buildJsonLd(canonical).map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}
