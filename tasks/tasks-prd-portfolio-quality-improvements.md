## Relevant Files

- `src/App.tsx` – Main application shell that wires together navigation, sections, locale context, and scroll behavior.
- `src/components/Navbar.tsx` – Desktop navigation bar and section scrolling.
- `src/components/MobileMenu.tsx` – Mobile navigation dialog and keyboard interaction.
- `src/components/Contact.tsx` – Contact form implementation and EmailJS integration.
- `src/i18n.ts` – i18next setup, language detection, backend configuration, and debug settings.
- `src/components/LazyImage.tsx` – Custom lazy-loading image component used for performance optimization.
- `src/components/Grid.tsx` – Animated background grid using Framer Motion with potential performance and motion implications.
- `src/components/Projects.tsx` / `src/components/Header.tsx` / `src/components/About.tsx` – Core content sections that impact layout, images, and copy.
- `src/components/Footer.tsx` – Footer links (LinkedIn, GitHub, email, BuyMeACoffee) and locale toggle.
- `index.html` – Base HTML document, viewport configuration, canonical URL, and SEO/social meta tags.
- `public/robots.txt` – Robots configuration for search engine crawling.
- `public/site.webmanifest` and icons under `public/` – PWA-related metadata and icons.
- `public/locales/*/*.json` – Translation files for en/fr used by i18next.
- `vite.config.ts` – Vite build configuration, including sourcemap and bundling behavior.
- `tailwind.config.js` / `postcss.config.js` – Styling, Tailwind, and PostCSS configuration affecting contrast and CSS output.

### Notes

- If tests are added later, they should typically be placed alongside the code files they are testing (e.g., `MyComponent.tsx` and `MyComponent.test.tsx` in the same directory).
- Use the project’s existing tooling (e.g., `npm run lint`, `npm run build`) to validate changes as tasks are implemented.

## Tasks

- [ ] 1.0 Harden EmailJS contact form and external integrations for security and privacy
  - [x] 1.1 Review `Contact.tsx` to document how EmailJS is currently configured (service ID, template ID, public key) and confirm with EmailJS docs which values are safe to expose in the client.
  - [x] 1.2 Decide whether to keep the current public key in the client or rotate and move some logic behind a serverless function (and update the PRD/open questions accordingly).
  - [x] 1.3 Add or refine error handling around `emailjs.send` in `Contact.tsx` so that failures show a clear, localized toast/message (without exposing technical details) and reset the form/submitting state correctly.
  - [x] 1.4 Audit the codebase for any `console.log` / `console.error` that might log form values, EmailJS responses, or other PII and remove or sanitize them.
  - [x] 1.5 Review external links in `Footer.tsx` and other components (LinkedIn, GitHub, BuyMeACoffee, mailto) to ensure appropriate `rel` attributes (e.g., `rel="noreferrer noopener"` for `target="_blank"`) and no unsafe inline scripts or `dangerouslySetInnerHTML` use.
  - [ ] 1.6 Confirm that `i18n.ts` and the i18next HTTP backend only serve static JSON translation files from `/public/locales` and do not expose any sensitive endpoints or tokens.

- [ ] 2.0 Improve performance via bundling, lazy loading, and image optimization
  - [ ] 2.1 Run a fresh Lighthouse Performance audit on mobile and note the main bottlenecks (bundle size, image payload, main-thread work, animations).
  - [ ] 2.2 Review `vite.config.ts` and current lazy-loading patterns (e.g., `MobileMenu` via `lazy`) to identify opportunities for additional code-splitting (such as heavy animation components like `Grid.tsx` or rarely used UI pieces).
  - [ ] 2.3 Audit `LazyImage.tsx` usage across `Projects.tsx`, `Header.tsx`, `About.tsx` to ensure `sizes` and `srcSet` are used appropriately and that images not above the fold are lazily loaded.
  - [ ] 2.4 Identify the heaviest images (e.g., project screenshots, profile images) and create optimized versions (compressed and/or resized) to reduce total image weight while maintaining visual quality.
  - [ ] 2.5 Consider whether some always-visible images (e.g., hero image) should load normally instead of lazily to avoid layout shifts, while still keeping non-critical images lazy.
  - [ ] 2.6 Re-run `npm run build` and Lighthouse, verifying that Performance moves toward or above the target score and adjusting the plan if any unexpected regressions appear.

- [ ] 3.0 Enhance accessibility and keyboard navigation across navigation, dialogs, and forms
  - [ ] 3.1 Review all ARIA roles in `Navbar.tsx`, `MobileMenu.tsx`, `Contact.tsx`, and `Grid.tsx` to confirm they follow WAI-ARIA Authoring Practices and that semantic HTML is used where possible instead of `role="menu"`/`role="menuitem"` patterns.
  - [ ] 3.2 Verify the mobile menu dialog behavior: opening via the hamburger button, initial focus moving into the dialog, ESC closing the dialog, and focus returning to the trigger.
  - [ ] 3.3 Test keyboard-only navigation across the entire site (desktop and mobile layouts): skip link, nav links, locale switchers, contact form fields, and submit button, ensuring visible focus states everywhere.
  - [ ] 3.4 Perform a color contrast audit (using dev tools or axe) focusing on text over gray backgrounds and pink accent colors; adjust Tailwind/CSS classes where needed to reach WCAG AA contrast.
  - [ ] 3.5 Confirm that form errors in `Contact.tsx` are correctly associated with fields via `aria-describedby` and announced by `aria-live` regions, and that the submit button state (e.g., sending vs. idle) is reflected via accessible labels.
  - [ ] 3.6 Re-run Lighthouse Accessibility and an additional tool like axe DevTools to confirm there are no remaining ARIA or keyboard-related issues.

- [ ] 4.0 Improve SEO and localization for en-CA / fr-CA and "développeur à Saint-Hyacinthe"
  - [ ] 4.1 Validate `public/robots.txt` syntax and behavior (e.g., by opening `/robots.txt` in the browser) and confirm Lighthouse no longer reports it as invalid.
  - [ ] 4.2 Refine `index.html` meta tags (description, keywords, OG, Twitter) to ensure they:
    - [ ] 4.2.1 Reflect Jessica as a full-stack developer in Saint-Hyacinthe, Québec, Canada.
    - [ ] 4.2.2 Naturally incorporate the French keyword "développeur à Saint-Hyacinthe" in at least one French-facing description.
  - [ ] 4.3 Ensure the HTML `lang` attribute and i18next configuration correctly reflect the active language (en/fr) and align with en-CA / fr-CA targeting.
  - [ ] 4.4 Review French translation strings (in `public/locales`) for at least one heading or prominent section to include "développeur à Saint-Hyacinthe" in a natural, human-readable way.
  - [ ] 4.5 Optionally design and implement basic JSON-LD structured data for `Person` (name, job title, location, sameAs links for LinkedIn/GitHub) and embed it in `index.html` to improve rich results.
  - [ ] 4.6 Run a Lighthouse SEO audit and adjust any remaining issues (e.g., missing meta tags, incorrect canonical URL).

- [ ] 5.0 Strengthen best practices and mobile responsiveness (console errors, tap targets, layout, caching)
  - [ ] 5.1 Run the app in development and production builds while watching the browser console; list any runtime warnings or errors (React, i18next, network failures, etc.).
  - [ ] 5.2 Update `i18n.ts` so that `debug: true` is only enabled in development (e.g., via `import.meta.env.MODE`) and confirm that production builds do not log i18n debug info.
  - [ ] 5.3 Verify the viewport meta tag in `index.html` and check common mobile breakpoints (320px, 375px, 414px) to ensure there is no horizontal scrolling and text remains readable without zooming.
  - [ ] 5.4 Check tap targets (navigation buttons, mobile menu items, locale switchers, contact form controls) to ensure they meet recommended minimum touch sizes and have sufficient spacing.
  - [ ] 5.5 Review layout behavior of key sections (Header, Projects, Contact) on small screens to ensure elements don’t overlap or become cramped; adjust Tailwind/CSS classes as needed.
  - [ ] 5.6 Confirm that static assets (icons, `og.png`, manifest) are referenced via HTTPS URLs, are cacheable, and do not produce mixed-content warnings.
  - [ ] 5.7 Run `npm run lint` and `npm run build` to verify the codebase passes linting and builds cleanly after the changes.
