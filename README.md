# Abyssal

![Abyssal](https://img.shields.io/badge/Abyssal-Ocean%20Exploration-003B52?style=for-the-badge)

**An immersive ocean-exploration visual experience, built as a front-end showcase.**

[![Next.js](https://img.shields.io/badge/Next.js-10.2.3-000000?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-17.0.1-61DAFB?style=flat&logo=react&logoColor=111827)](https://react.dev/)
[![Styled Components](https://img.shields.io/badge/Styled%20Components-5.2.0-DB7093?style=flat&logo=styledcomponents&logoColor=white)](https://styled-components.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Animations-0055FF?style=flat&logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-success?style=flat)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.1-0B8FA8?style=flat)](https://github.com/thiagodifaria/Abyssal/releases)

**[Live demo / Demonstração online](https://abyssal-thiagodifaria.netlify.app/)**

---

## Documentation / Documentação

**[Read the detailed English documentation](README_EN.md)**  
**[Leia a documentação detalhada em português](README_PT.md)**

---

## What is Abyssal?

Abyssal is a cinematic interface inspired by the tension, scale and mystery of deep-ocean expeditions. Video, motion, a custom cursor and long-form expedition pages work together to create a paced, editorial journey instead of a conventional product interface.

> **Showcase notice:** Abyssal is a conceptual front-end showcase. Its expeditions, studio and services are fictional and do not represent an operating company, commercial product or scientific programme.

## Main Capabilities

- **Deep Dive identity** — a fixed opening signature that remains intact in every language.
- **Immersive landing experience** — full-screen video, animated typography and an interactive canvas eraser.
- **Expedition archive** — five fictional narratives with dedicated, statically generated detail pages.
- **Motion-first navigation** — animated menu, route previews and custom cursor feedback.
- **Bilingual content** — complete Portuguese and English interface/content switching persisted in local storage.
- **Theme support** — light and dark visual themes, switched from the mark interaction.
- **Responsive composition** — layouts, typography and navigation adapt to tablet and mobile breakpoints.

## Technology and Design

| Area | Choice | Purpose |
| --- | --- | --- |
| Application | Next.js 10 + React 17 | File-system routing and static expedition pages. |
| Styling | styled-components | Theme-aware components and responsive style primitives. |
| Motion | Framer Motion | Page, menu, hover and reveal animations. |
| Content | Local JavaScript content modules | Localized expedition, navigation and service data. |
| Assets | MP4 video and local fonts | Immersive visual direction without external media dependencies. |

The visual language is intentionally minimal: abyssal blue, white typography, bioluminescent accents and generous negative space. The language selector is deliberately kept inside the navigation menu to preserve the clean header.

## Quick Start

Requirements: Node.js 14+ and npm.

```bash
git clone https://github.com/thiagodifaria/Abyssal.git
cd Abyssal/client-web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Commands

Run these commands from `client-web/`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run lint` | Run ESLint and Prettier checks. |
| `npm run build` | Create and validate the optimized production build. |
| `npm run start` | Serve a production build locally. |

## Project Structure

```text
client-web/
├── components/          reusable UI, visual effects and page sections
│   ├── Home/            landing-page sections
│   ├── Expedition/      expedition detail presentation
│   └── Icons/           local SVG icon components
├── context/             cursor, language, menu and theme state
├── hooks/               UI and responsive behaviour hooks
├── pages/               Next.js application and route entry points
│   └── projects/        statically generated expedition routes
├── public/              videos, fonts and favicon
├── styles/              global styles, themes and shared primitives
├── utils/constants/     localized content, routes and expedition data
├── package.json         frontend scripts and dependencies
└── .eslintrc.js         frontend linting rules
```

The repository root remains intentionally small: documentation, licence, repository configuration and the isolated `client-web` application. This follows the same frontend boundary used by the other personal projects in this workspace.

## Content and Localisation

Content is separated from presentation under `client-web/utils/constants/`:

- `site-content.js` contains global UI copy, contact metadata and shared labels.
- `expedition-data.js` holds the five narrative entries and their PT/EN versions.
- `routes.js` and `services-items.js` provide localized navigation and service data.

The selected language is stored in `localStorage`, and the document language attribute is updated at runtime for assistive technologies. `DEEP DIVE` is a brand signature, so it remains untranslated by design.

## Quality Checks

```bash
cd client-web
npm run lint
npm run build
```

The production build statically generates every expedition route. Linting applies the repository’s ESLint, React Hooks, accessibility and Prettier rules.

## Contact

**Thiago Di Faria** — [thiagodifaria@gmail.com](mailto:thiagodifaria@gmail.com)

[GitHub](https://github.com/thiagodifaria) · [LinkedIn](https://www.linkedin.com/in/thiagodifaria/)

## License

Licensed under the [MIT License](LICENSE).
