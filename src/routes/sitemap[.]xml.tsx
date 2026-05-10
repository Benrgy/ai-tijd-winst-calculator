import { createFileRoute } from "@tanstack/react-router";
import { CANONICAL, LAST_REVIEWED, SITE_ORIGIN } from "@/lib/seo";

const urls = [
  { loc: `${SITE_ORIGIN}/`, priority: "1.0" },
  { loc: CANONICAL, priority: "0.9" },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${u.loc}</loc><lastmod>${LAST_REVIEWED}</lastmod><changefreq>monthly</changefreq><priority>${u.priority}</priority></url>`,
  )
  .join("\n")}
</urlset>`;

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        }),
    },
  },
});
