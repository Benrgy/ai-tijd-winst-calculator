import { createFileRoute } from "@tanstack/react-router";
import CalculatorPage from "@/components/CalculatorPage";

const META_TITLE = "AI Tijdwinst Calculator voor administratie";
const META_DESC =
  "Bereken hoeveel tijd en geld je mogelijk bespaart met ChatGPT voor e-mail, notulen en administratief werk. Inclusief praktische AI-tips.";
const CANONICAL =
  "https://YOURDOMAIN.nl/ai-tijdwinst-calculator-voor-administratie/";

const FAQS = [
  ["Hoeveel tijd bespaart ChatGPT met administratie?", "ChatGPT kan tijd besparen bij administratieve taken, maar de exacte besparing hangt af van je taken, prompts en controleproces. Deze calculator gebruikt drie scenario's: 25% voorzichtig, 40% realistisch en 60% ambitieus. Zie de uitkomst als een indicatie, niet als garantie."],
  ["Kan ChatGPT zakelijke e-mails sneller schrijven?", "Ja, ChatGPT kan helpen om zakelijke e-mails sneller te schrijven, vooral bij terugkerende situaties. Denk aan klantreacties, opvolgmails, formele antwoorden, samenvattingen of herschrijven in een vriendelijkere toon. Controleer altijd of de inhoud klopt en past bij je situatie."],
  ["Kan ChatGPT helpen met notulen en vergaderverslagen?", "Ja, ChatGPT kan helpen om notulen, actiepunten en samenvattingen te structureren op basis van een transcript of ruwe aantekeningen. Gebruik geen vertrouwelijke informatie zonder toestemming of duidelijk intern beleid. Menselijke controle blijft belangrijk, zeker bij besluiten of gevoelige onderwerpen."],
  ["Is deze berekening een garantie?", "Nee, deze calculator geeft een indicatieve schatting en geen garantie. De werkelijke tijdwinst hangt af van je taken, werkwijze, promptkwaliteit, ervaring met AI en controle op de output. Gebruik de berekening als praktisch startpunt voor betere workflowkeuzes."],
  ["Waarom zijn goede prompts belangrijk?", "Goede prompts zijn belangrijk omdat ChatGPT betere output geeft wanneer de context, taak en gewenste vorm duidelijk zijn. Vage prompts leveren vaak algemene of onnatuurlijke tekst op. Met betere prompts krijg je sneller bruikbare concepten en hoef je minder te corrigeren."],
  ["Is een ChatGPT-cursus nuttig voor administratief medewerkers?", "Een ChatGPT-cursus kan nuttig zijn voor administratief medewerkers die regelmatig e-mails, notulen, samenvattingen of standaardteksten maken. Een Nederlandstalige cursus verlaagt de drempel en helpt om prompts te gebruiken in herkenbare werksituaties."],
  ["Is AI gebruiken voor administratie veilig?", "AI gebruiken voor administratie kan veilig zijn als je zorgvuldig omgaat met vertrouwelijke informatie en de output controleert. Voer geen gevoelige persoonsgegevens, klantdata of interne documenten in zonder duidelijke toestemming of beleid. Controleer altijd feiten, toon en context."],
  ["Welke administratieve taken kun je automatiseren met ChatGPT?", "ChatGPT kan vooral helpen bij terugkerende administratieve taken zoals e-mails opstellen, teksten herschrijven, notulen structureren, actiepunten samenvatten en rapportages voorbereiden. Volledige automatisering is niet altijd verstandig. Controleer de output altijd zelf, zeker bij gevoelige of zakelijke informatie."],
] as const;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "AI Tijdwinst Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    inLanguage: "nl-NL",
    description: META_DESC,
    url: CANONICAL,
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://YOURDOMAIN.nl/" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://YOURDOMAIN.nl/tools/" },
      { "@type": "ListItem", position: 3, name: "AI Tijdwinst Calculator", item: CANONICAL },
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "nl-NL" },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: "Ontdek hoeveel tijd je mogelijk kunt besparen met ChatGPT voor e-mails, notulen en administratieve teksten." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nl_NL" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: jsonLd.map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  }),
  component: CalculatorPage,
});
