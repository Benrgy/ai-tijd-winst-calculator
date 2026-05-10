import { createFileRoute } from "@tanstack/react-router";
import CalculatorPage from "@/components/CalculatorPage";
import { buildHead, CANONICAL } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => buildHead(CANONICAL),
  component: CalculatorPage,
});
