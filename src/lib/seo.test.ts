import { describe, expect, test } from "bun:test";
import { buildHead, buildJsonLd, CANONICAL, LAST_REVIEWED, OG_IMAGE, SITE_ORIGIN } from "./seo";

describe("Maintenance URL and review rules", () => {
  test("uses the published site origin", () => {
    expect(SITE_ORIGIN).toBe("https://ai-tijd-winst-calculator.lovable.app");
  });

  test("canonicalizes calculator pages to the homepage", () => {
    expect(CANONICAL).toBe("https://ai-tijd-winst-calculator.lovable.app/");
    expect(buildHead(CANONICAL).links.find((link) => link.rel === "canonical")?.href).toBe(CANONICAL);
  });

  test("uses the supplied PNG for social previews", () => {
    expect(OG_IMAGE).toBe("https://ai-tijd-winst-calculator.lovable.app/og-ai-tijdwinst-calculator.png");
    expect(buildHead().meta.find((meta) => meta.property === "og:image")?.content).toBe(OG_IMAGE);
    expect(buildHead().meta.find((meta) => meta.name === "twitter:image")?.content).toBe(OG_IMAGE);
  });

  test("uses the requested review date", () => {
    expect(LAST_REVIEWED).toBe("2026-11-01");
    expect(buildJsonLd().find((entry) => entry["@type"] === "Article")?.dateModified).toBe(LAST_REVIEWED);
  });

  test("removes the breadcrumb to the nonexistent tools page", () => {
    expect(buildJsonLd().some((entry) => entry["@type"] === "BreadcrumbList")).toBe(false);
  });

  test("links the supplied research DOI in the article citation", () => {
    expect(buildJsonLd().find((entry) => entry["@type"] === "Article")?.citation?.sameAs).toBe("https://doi.org/10.1126/science.adh2586");
  });
});