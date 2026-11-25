# The Infinite Detour — Shared Website Design Specification

**Version:** 1.0  
**Approved:** 25 November 2026

## Agreed design decisions
- Page density: balanced.
- Imagery: mixed photography and illustration.
- Section personality: strong.
- Animation: subtle.
- Specification status: approved.

## Guiding principle
**One website, one identity, many different personalities.**

The site is a personal, editorial collection of interests, ideas, learning, discoveries, creative work, technology and life experiences. It should feel curious, welcoming, individual and coherent rather than corporate.

## Visual identity
Dark mode is the default; light mode is available and the visitor's choice persists across pages.

| Token | Dark | Light |
|---|---|---|
| Background | #101820 | #F3F1EC |
| Soft background | #151F29 | #EBE8E0 |
| Panel | #1A2732 | #FFFEFA |
| Main text | #EDF0ED | #202A30 |
| Warm accent | #D6A96D | #9B6834 |
| Secondary accent | #8EB6B1 | #477C77 |

Sections may add their own accent colours while retaining the shared foundation.

## Typography
- DM Sans: body copy, navigation and interface.
- Playfair Display: editorial headings and emphasis.
- DM Mono: metadata, dates and technical labels.
- Body copy: generally 16–18px with comfortable line height.
- Use clear hierarchy and readable line lengths.

## Layout and density
Balanced density: enough substance to make pages useful without crowding them. Use controlled whitespace, clear headings, comfortable reading widths, purposeful cards and responsive layouts. Editorial, gallery, technical and project pages may use different compositions.

## Imagery
Use a deliberate mix of photography and illustration. Choose imagery to support the subject, use descriptive alt text for meaningful images, optimise formats and sizes, and avoid decoration without purpose.

## Section personalities
- **Explore:** adventurous, discovery-led; maps, landscapes and collections.
- **Learning:** organised and progressive; notebooks, diagrams and timelines.
- **ADHD & Me:** personal, honest and reflective; editorial writing and thoughtful imagery.
- **Create:** experimental and expressive; artwork, galleries and project showcases.
- **Technology:** contemporary and technical; screenshots, diagrams and comparisons.
- **Journal:** informal and chronological; dated entries, photographs and observations.
- **About:** welcoming and individual; a simple editorial introduction.

## Shared structure and navigation
Use a common header, navigation, theme control, page introduction where suitable, main content, related-content links and footer. Main navigation: Home, Explore, Learning, ADHD & Me, Create, Technology, Journal and About. Adapt navigation for mobile.

## Motion and interaction
Keep motion subtle: gentle hover states, restrained transitions and useful feedback. Avoid constant movement, excessive parallax and distracting effects. Respect prefers-reduced-motion.

## Accessibility
Responsive layouts, readable contrast and type, keyboard access, visible focus states, meaningful image alternatives, descriptive links, reduced-motion support and clear form feedback are baseline requirements.

## Content
Substantial pages should have a meaningful title, useful introduction, logical headings, relevant media and links to related material. Distinguish personal experience, opinion, researched facts, tutorials, fiction and ongoing projects. Cite external factual material where appropriate.

## Technical foundation
- Semantic HTML5, shared CSS and vanilla JavaScript.
- Shared design tokens and reusable interface patterns.
- Optimised images (WebP/AVIF where appropriate).
- Page-specific titles and metadata.
- HTTPS and current major browser support.
- GitHub is the source of truth; Cloudflare Pages is the intended publishing destination.
- Keep deployment paths configurable so the same source can work at a repository subpath or a domain root.

## Reusable patterns
Header/navigation, mobile menu, footer, theme switcher, page hero, content cards, article metadata, related links, image treatments, buttons and form controls.

## Governance
Develop individual sections independently where practical, but integrate finished work into the single main repository. The shared design system is the foundation; section-specific design is encouraged within its boundaries. Record deliberate changes to these standards.
