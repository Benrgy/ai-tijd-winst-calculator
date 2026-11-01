import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { buildHead, buildJsonLd, CANONICAL, LAST_REVIEWED, OG_IMAGE, SITE_ORIGIN } from "./seo";

describe("Maintenance URL and review rules", () => {
  test("uses the published site origin", () => {
    assert.equal(SITE_ORIGIN, "https://ai-tijd-winst-calculator.lovable.app");
  });

  test("canonicalizes calculator pages to the homepage", () => {
    assert.equal(CANONICAL, "https://ai-tijd-winst-calculator.lovable.app/");
    assert.equal(buildHead(CANONICAL).links.find((link) => link.rel === "canonical")?.href, CANONICAL);
  });

  test("uses the supplied PNG for social previews", () => {
    assert.equal(OG_IMAGE, "https://ai-tijd-winst-calculator.lovable.app/og-ai-tijdwinst-calculator.png");
    assert.equal(buildHead().meta.find((meta) => meta.property === "og:image")?.content, OG_IMAGE);
    assert.equal(buildHead().meta.find((meta) => meta.name === "twitter:image")?.content, OG_IMAGE);
  });

  test("uses the requested review date", () => {
    assert.equal(LAST_REVIEWED, "2026-11-01");
    assert.equal(buildJsonLd().find((entry) => entry["@type"] === "Article")?.dateModified, LAST_REVIEWED);
  });

  test("removes the breadcrumb to the nonexistent tools page", () => {
    assert.equal(buildJsonLd().some((entry) => entry["@type"] === "BreadcrumbList"), false);
  });

  test("links the supplied research DOI in the article citation", () => {
    assert.equal(buildJsonLd().find((entry) => entry["@type"] === "Article")?.citation?.sameAs, "https://doi.org/10.1126/science.adh2586");
  });
});