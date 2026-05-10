import { createFileRoute } from "@tanstack/react-router";
import CalculatorPage from "@/components/CalculatorPage";
import { buildHead, CANONICAL } from "@/lib/seo";

export const Route = createFileRoute(
  "/ai-tijdwinst-calculator-voor-administratie",
)({
  head: () => buildHead(CANONICAL),
  component: CalculatorPage,
});
