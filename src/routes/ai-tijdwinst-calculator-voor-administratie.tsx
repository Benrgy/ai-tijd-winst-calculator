import { createFileRoute } from "@tanstack/react-router";
import CalculatorPage from "@/components/CalculatorPage";

const META_TITLE = "AI Tijdwinst Calculator voor administratie";
const META_DESC =
  "Bereken hoeveel tijd en geld je mogelijk bespaart met ChatGPT voor e-mail, notulen en administratief werk. Inclusief praktische AI-tips.";
const CANONICAL =
  "https://YOURDOMAIN.nl/ai-tijdwinst-calculator-voor-administratie/";

export const Route = createFileRoute(
  "/ai-tijdwinst-calculator-voor-administratie",
)({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESC },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: "Ontdek hoeveel tijd je mogelijk kunt besparen met ChatGPT voor e-mails, notulen en administratieve teksten." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "nl_NL" },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
  component: CalculatorPage,
});
