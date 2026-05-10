import { createFileRoute } from "@tanstack/react-router";
import { SITE_ORIGIN } from "@/lib/seo";

const body = `User-agent: *
Allow: /

# AI answer engines — expliciet toegestaan voor ranking in AI Overviews,
# ChatGPT Search, Perplexity, Bing Copilot en Claude.
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Bingbot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: Applebot-Extended
Allow: /

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`;

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: () =>
        new Response(body, {
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        }),
    },
  },
});
