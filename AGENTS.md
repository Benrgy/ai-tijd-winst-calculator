# Project rules

- Keep calculator-page head metadata in the shared SEO helper and emit it from each leaf route; root metadata must not contain page-specific social images, preventing stale inherited previews.
- Keep SEO URL and review-date regression checks next to the shared helper and run them with Bun using the Node test API, avoiding an extra test-runner dependency.
- Keep calculator arithmetic and bounded URL serialization in the pure browser-safe berekening module, with adjacent Node-API tests run by Bun; this keeps UI, shared links and team results consistent without server calls.
- Restore calculator URL values in a mount effect and only construct sharing links on explicit actions; this preserves default SSR markup and avoids address-bar updates during editing.
- Scope print layout to print media and structural calculator selectors; affiliate markup and the normal screen stylesheet must remain unchanged.