# Project rules

- Keep calculator-page head metadata in the shared SEO helper and emit it from each leaf route; root metadata must not contain page-specific social images, preventing stale inherited previews.
- Keep SEO URL and review-date regression checks next to the shared helper and run them with Bun using the Node test API, avoiding an extra test-runner dependency.