# AuPairUp: review branch

This is an unpublished review build. Do not merge or deploy until the owner approves a concrete release.

## Included

- Three static article drafts and a blog index, generated from content/posts.json.
- Spanish guides for au pairs and an English guide for families; language targeting is provisional.
- Navigation from the landing to the blog.
- A truthful disabled registration preview: the previous form did not persist submissions.
- Replacement of unsupported member counts, exclusivity, instant-match and pricing promises.
- Original app.js and index.html retained in history/. The original alternative TSX is unchanged and is not a build input.

## Local review

Run python3 scripts/build.py, then python3 -m http.server 8765 --directory public.
Open http://localhost:8765/blog/. No package installation is needed.
Run python3 scripts/verify.py and node --check app.js.

## Deployment hold

netlify.toml skips normal automatic builds. Its build command also exits unsuccessfully to stop hook-triggered builds. No production settings have been accessed or changed. The actual connected Netlify site and production branch have not been verified. Do not bypass the build gate or manually upload public/ without owner approval.

All generated pages carry noindex/nofollow; robots.txt disallows crawling and _headers adds X-Robots-Tag. This is a review state, not the final SEO configuration. The build contains no sitemap or canonical domain because the production URL has not been confirmed. No tracking requests or operational registration service have been added.

The site is static and can be inspected locally. Netlify previews are intentionally not requested.

## Still required before release

1. Read and reconcile the recent strategic report, 24-month model and executive summary. They were uploaded to a ChatGPT project but were not accessible in this task.
2. Confirm corridor, languages, available functionality, public contact address, pricing, and the production domain.
3. Review all article claims and official sources again; approve final copy.
4. Resolve privacy, terms and real contact/social URLs. Existing landing placeholder links remain blockers.
5. Implement and test a real interest service, error handling and required privacy choices before enabling registration.
6. Verify actual Netlify project configuration. After explicit approval, replace the gate with a reproducible build command, set production canonicals, sitemap and appropriate robots/headers. Keep previews noindex and prevent unexpected production deployment.
7. Review mobile/keyboard behavior and confirm all links, form states and analytics behavior on the approved release build.

## Source review

Consulted 2026-10-21:

- https://www.arbeitsagentur.de/unternehmen/arbeitskraefte/au-pair
- https://www.service-public.gouv.fr/particuliers/vosdroits/F13348
- https://j1visa.state.gov/programs/au-pair/

These sources support country distinctions, not a universal eligibility guide. AuPairUp facilitates matching only; it does not arrange placements, visas or contracts. No legal eligibility is inferred from interest in a profile.
