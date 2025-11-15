# Portfolio Quality Improvements PRD

## 1. Introduction / Overview

This PRD describes improvements to the existing single-page portfolio site for **Jessica Iacovozzi**, built with **React + Vite + TypeScript + TailwindCSS + i18next** and deployed on Vercel.

The goal is to harden and polish the current site (no new sections or routes) so that it:

- Better supports **technical recruiters and engineering managers** as the primary audience.
- Demonstrates strong **frontend engineering practices** across **security, performance, accessibility (AA where reasonable), SEO, and mobile responsiveness**.
- Targets **English (en-CA)** and **French (fr-CA)** users in **Saint-Hyacinthe, Québec, Canada**, including the keyword **"développeur à Saint-Hyacinthe"**.

This PRD assumes **static code edits only** (no CMS, auth, or backend work) and maintains **minimal tracking** for user privacy.

---

## 2. Goals

1. **Security & Privacy**
   1.1. Avoid exposing secrets or unnecessary identifiers in the client while still allowing the contact form to function.
   1.2. Ensure third-party integrations (e.g., EmailJS, i18next backend) are used safely and fail gracefully.

2. **Performance**
   2.1. Achieve **Lighthouse Performance ≥ 90 on mobile** on production.
   2.2. Reduce initial load time and JavaScript payload where practical (e.g., code-splitting, image optimizations).
   2.3. Ensure lazy loading is used effectively for non-critical content.

3. **Accessibility (A11y)**
   3.1. Aim for **Lighthouse Accessibility ≥ 95** and alignment with **WCAG 2.1 AA where reasonable**.
   3.2. Fix Lighthouse issues around **ARIA roles and required children**.
   3.3. Ensure full **keyboard navigation**, visible focus states, and acceptable **color contrast**.

4. **SEO & Internationalization**
   4.1. Achieve **Lighthouse SEO ≥ 95–100**.
   4.2. Ensure **robots.txt is valid** and accurately reflects the desired indexing behavior.
   4.3. Improve search relevance for **"développeur à Saint-Hyacinthe"** and related queries in **en-CA / fr-CA**.

5. **Best Practices & Mobile Responsiveness**
   5.1. Achieve **Lighthouse Best Practices ≥ 95**.
   5.2. Ensure the site provides a **high-quality mobile experience** (layout, tap targets, performance) on typical smartphone viewports.

---

## 3. User Stories

1. **Recruiter reviewing a candidate**
   - *As a technical recruiter, I want the site to load quickly and be readable on my phone so that I can quickly judge the candidate’s skills and experience during a busy day.*

2. **Engineering manager evaluating frontend skills**
   - *As an engineering manager, I want to see that the site follows best practices for performance, accessibility, and security so that I trust the candidate can build production-grade frontends.*

3. **Local French-speaking client**
   - *As a French-speaking client in Saint-Hyacinthe, I want to find the portfolio when searching for a local "développeur à Saint-Hyacinthe" so that I can contact someone nearby for a project.*

4. **Keyboard-only or assistive tech user**
   - *As a keyboard-only user or screen reader user, I want to navigate the site and use the contact form without getting trapped or confused by ARIA roles so that I can access the same information as everyone else.*

5. **Privacy-conscious visitor**
   - *As a privacy-conscious visitor, I want the site to minimize tracking and avoid invasive analytics so that I feel comfortable browsing it.*

---

## 4. Functional Requirements

> Note: Numbers are for reference, not implementation order.

### 4.1 Security & Privacy

1. **FR-SEC-1** – Audit the EmailJS integration in `Contact.tsx`:
   - Confirm whether the current `service`, `template`, and `public key` values are intended to be public. If not, replace them with environment variables and update EmailJS settings accordingly.
   - Add clear error handling and user feedback when `emailjs.send` fails (e.g., toast with a localized error message).

2. **FR-SEC-2** – Ensure minimal logging of sensitive data:
   - Avoid logging form contents, EmailJS responses, or personally identifiable information (PII) to the browser console.

3. **FR-SEC-3** – Harden external resource usage:
   - Verify all external URLs (LinkedIn, GitHub, BuyMeACoffee, mailto) use safe target attributes (e.g., `rel="noreferrer"` / `noopener` where appropriate).
   - Ensure no inline script injections or unsafe `dangerouslySetInnerHTML` are used.

4. **FR-SEC-4** – i18n backend safety:
   - Confirm that the `i18next-http-backend` endpoints only serve static JSON translation files from `/public/locales` and cannot leak sensitive data.

### 4.2 Performance

5. **FR-PERF-1** – Optimize bundling and code-splitting:
   - Confirm that non-critical components (like `MobileMenu`) are lazily loaded (already partially done) and evaluate if additional splitting (e.g., emojis/animations, heavy motion components like `Grid`) is beneficial.

6. **FR-PERF-2** – Optimize images:
   - Ensure all large images in `/public` or used via `LazyImage` have appropriate dimensions, compression, and `sizes` / `srcSet` where useful.
   - Consider responsive variants for the heaviest images used in the Projects and About sections.

7. **FR-PERF-3** – Confirm effective lazy loading:
   - Review `LazyImage` usage to ensure non-critical images are only loaded when near the viewport.
   - Avoid unnecessary observer work when images are always in view (e.g., hero image may not need lazy loading on desktop).

8. **FR-PERF-4** – Lighthouse performance tuning:
   - Run Lighthouse on mobile and identify top contributors to load time (e.g., `index-DSKdRZ5W.js` size, CSS size, image payload).
   - Implement at least one of: code-splitting, reducing animation cost, or compressing images to lift the score.

### 4.3 Accessibility

9. **FR-A11Y-1** – Fix ARIA `role` structure issues:
   - Review all `role="menu"`, `role="menuitem"`, `role="dialog"`, and `role="alert"` usages in `Navbar.tsx`, `MobileMenu.tsx`, `Contact.tsx`, and `Grid.tsx`.
   - Update markup to follow the WAI-ARIA Authoring Practices so that any role that requires specific children (e.g., menu items within menus, headings within dialogs) has them.
   - Re-run Lighthouse to validate that the **"Elements with an ARIA role..."** error is resolved.

10. **FR-A11Y-2** – Keyboard navigation and focus management:
    - Confirm the mobile menu `dialog` can be fully navigated via keyboard (including escape key, tab order, and focus returning to trigger).
    - Ensure all interactive elements (navigation links, locale switchers, form fields, buttons) are reachable via keyboard and have visible focus styles.

11. **FR-A11Y-3** – Color contrast and motion:
    - Audit the palette (especially text on gray backgrounds, pink accents) for WCAG AA contrast.
    - Adjust Tailwind classes where needed (e.g., darken backgrounds or lighten text) to pass contrast checks.
    - Ensure that animated elements (e.g., `Grid` with framer-motion, hover transitions) do not cause motion sickness and consider respecting `prefers-reduced-motion` settings.

12. **FR-A11Y-4** – Form accessibility:
    - Confirm error messages (Formik + Yup) are properly announced via `aria-live` regions and associated with their fields using `aria-describedby` (already partially implemented, ensure consistency).
    - Ensure the submit button state (e.g., "sending" vs. "send") is conveyed to assistive tech via `aria-label` or status region.

### 4.4 SEO & Internationalization

13. **FR-SEO-1** – Fix `robots.txt` issues:
    - Add a valid `robots.txt` file under `public/robots.txt` that:
      - Allows indexing of the main site.
      - Optionally disallows irrelevant paths (if any) without blocking core content.
    - Re-run Lighthouse to verify that **"robots.txt is not valid"** is resolved.

14. **FR-SEO-2** – Localization & metadata:
    - Add or refine language-specific hints (e.g., HTML `lang` attribute already set dynamically via i18n; ensure it aligns with `en-CA` / `fr-CA`).
    - Optionally add `hreflang` tags if you introduce language-specific URLs in the future (not required now, but PRD can mention as an extension).

15. **FR-SEO-3** – Keyword and content alignment:
    - Ensure at least one prominent heading or section text naturally includes **"développeur à Saint-Hyacinthe"** (likely in French version) in a way that reads well to humans.
    - Keep meta description and titles aligned to the full-stack / frontend developer role, including location cues (Saint-Hyacinthe, Québec, Canada) where appropriate.

16. **FR-SEO-4** – Structured data (optional but beneficial):
    - Consider adding JSON-LD schema for `Person` with job title, location, and sameAs links (LinkedIn, GitHub) to improve search result quality.

### 4.5 Best Practices & Mobile Responsiveness

17. **FR-BP-1** – Console error cleanup:
    - Investigate and fix any runtime console errors noted by Lighthouse (e.g., i18next debug logs, missing resources, React warnings).
    - Disable `debug: true` in `i18n.ts` for production builds, or conditionally enable it only in development.

18. **FR-BP-2** – Viewport and tap-target checks:
    - Confirm the viewport meta tag is correct (it currently is) and that all tap targets (mobile menu, buttons, links) meet minimum touch sizes.

19. **FR-BP-3** – Mobile layout validation:
    - Test the site on common mobile widths (e.g., 320px, 375px, 414px) and ensure:
      - No horizontal scrolling.
      - Text is readable without zooming.
      - Sections like Projects and Contact layout correctly and avoid overlapping elements.

20. **FR-BP-4** – Asset & caching best practices:
    - Confirm static assets (icons, manifest, `og.png`) are correctly referenced and cacheable.
    - Ensure no mixed-content or insecure HTTP references are used.

---

## 5. Non-Goals (Out of Scope)

1. **NG-1** – No new sections (e.g., blog, testimonials) or additional routes/pages.
2. **NG-2** – No backend, database, or user accounts/auth system.
3. **NG-3** – No heavy new 3rd-party libraries beyond those already in use (React, Tailwind, i18next, EmailJS, etc.), unless they significantly improve performance or a11y.
4. **NG-4** – No move to a full CMS (content remains managed via static code edits).

---

## 6. Design Considerations (Optional)

1. Maintain the current **visual identity**: dark theme with pink accent, animated grid background, and modern typography.
2. If color changes are needed for contrast, keep them subtle so the overall branding remains intact.
3. Keep animations smooth but avoid overly long or blocking transitions, especially on mobile.
4. For mobile, prioritize **readability and scan-ability**: clear section headings, sufficient spacing, and large tap targets.

---

## 7. Technical Considerations (Optional)

1. **Stack**: React 18, Vite, TypeScript, TailwindCSS, i18next, EmailJS, Framer Motion.
2. **Build tooling**:
   - Vite configuration already enables JavaScript sourcemaps; ensure this remains stable as performance tweaks are applied.
   - Consider adding simple environment-based flags (e.g., disabling i18next debug in production).
3. **Deployment**: Vercel, single-page app. Ensure any `robots.txt` or additional SEO files live under `/public` so they are served from the root.
4. **Testing**:
   - Use **Lighthouse** (in Chrome DevTools) as the primary measurement tool for the target scores.
   - Validate ARIA and contrast via tools like **axe DevTools** or the built-in Chrome Accessibility pane.

---

## 8. Success Metrics

The feature is considered successful when all of the following are met on the production deployment:

1. **Performance**: Lighthouse Performance score on mobile ≥ 90.
2. **Accessibility**: Lighthouse Accessibility score ≥ 95 and no errors related to ARIA role/required children.
3. **Best Practices**: Lighthouse Best Practices score ≥ 95 and **no console errors** reported by Lighthouse.
4. **SEO**: Lighthouse SEO score ≥ 95–100, with a valid `robots.txt` and correct meta tags.
5. **Mobile UX**: Manual testing on at least two mobile viewports confirms no layout breakage, horizontal scrolling, or unreadable text.
6. **Security/Privacy**: No obvious exposure of secrets in the client and no logging of sensitive PII to the browser console.

---

## 9. Open Questions

1. **EmailJS Credentials**: Are the current EmailJS identifiers acceptable to keep in the client, or should they be rotated and partially moved behind a serverless function?
2. **Structured Data**: Should JSON-LD structured data be added now, or left for a later SEO-focused iteration?
3. **Animation Preferences**: Should the site explicitly respect `prefers-reduced-motion` (e.g., disabling Grid animations) for users who prefer minimal motion?
4. **Future Localization URLs**: If you later introduce distinct language URLs (e.g., `/fr`), should this PRD be extended to include `hreflang` tags and more advanced SEO for each locale?
