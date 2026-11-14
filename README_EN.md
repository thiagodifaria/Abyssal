# Abyssal — Ocean Exploration Showcase

**An immersive ocean-exploration visual experience, built as a front-end showcase.**

## Live demo

[Open Abyssal](https://abyssal-thiagodifaria.netlify.app/)

## About the project

Abyssal is a cinematic interface inspired by the scale, tension and mystery of deep-ocean expeditions. Video, motion, a custom cursor and narrative expedition pages combine into an editorial journey rather than a conventional product interface.

> **Important notice:** Abyssal is a conceptual front-end showcase. The expeditions, studio and services are fictional and do not represent an operating company, commercial product or real scientific programme.

## Features

- **Deep Dive identity:** a fixed opening signature, preserved in every language.
- **Immersive landing page:** full-screen video, animated typography and an interactive canvas-erasing effect.
- **Expedition archive:** five fictional narratives with individually generated static pages.
- **Motion-led navigation:** animated menu, video previews and custom cursor feedback.
- **Internationalisation:** complete Portuguese and English interface/content, with the preference persisted locally.
- **Visual themes:** light/dark switching through the brand-mark interaction.
- **Responsive layout:** composition adapted for desktop, tablet and mobile devices.

## Technology

| Area | Technology | Responsibility |
| --- | --- | --- |
| Application | Next.js 10 + React 17 | File-system routing and static pages. |
| Styling | styled-components | Themes, visual components and breakpoints. |
| Motion | Framer Motion | Reveals, transitions, hover states and menu animation. |
| Content | Local JavaScript modules | Expedition data and localized copy. |
| Assets | MP4 video and local fonts | Visual direction without external media dependencies. |

The visual language uses abyssal blue, bright typography, bioluminescent accents and negative space. The language selector lives inside the menu to keep the header clean.

## Prerequisites

- Node.js 14 or newer
- npm

## Installation and local run

```bash
git clone https://github.com/thiagodifaria/Abyssal.git
cd Abyssal/client-web
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Commands

Run from `client-web/`.

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server. |
| `npm run lint` | Checks syntax, Hooks, accessibility and formatting. |
| `npm run build` | Creates and validates the optimized production build. |
| `npm run start` | Serves the production build locally. |

## Project structure

```text
client-web/
├── components/          reusable components and visual sections
│   ├── Home/            landing-page sections
│   ├── Expedition/      expedition detail presentation
│   └── Icons/           local SVG icons
├── context/             cursor, language, menu and theme state
├── hooks/               UI and responsive behaviour hooks
├── pages/               Next.js routes and entry points
│   └── projects/        static expedition routes
├── public/              videos, fonts and favicon
├── styles/              global styles, themes and shared primitives
├── utils/constants/     localized content, routes and expedition data
├── package.json         frontend scripts and dependencies
└── .eslintrc.js         frontend linting rules
```

The repository root stays intentionally small: documentation, licence, repository configuration and the isolated `client-web/` application. This matches the frontend boundary used across the other personal projects, including Tesori di Bacco.

## Content and languages

Interface data is separated from the visual layer under `client-web/utils/constants/`:

- `site-content.js` stores global copy, contact metadata and shared labels.
- `expedition-data.js` contains the five expeditions and their PT/EN versions.
- `routes.js` and `services-items.js` provide localized navigation and creative-discipline data.

The chosen language is saved in `localStorage`, and the document’s `lang` attribute is updated to improve assistive-technology support. **DEEP DIVE** is a brand signature and intentionally remains untranslated.

## Quality and build

```bash
cd client-web
npm run lint
npm run build
```

The production build statically generates every expedition route. Linting applies JavaScript/React, Hooks, accessibility and Prettier rules.

## Contact

**Thiago Di Faria** — [thiagodifaria@gmail.com](mailto:thiagodifaria@gmail.com)

[GitHub](https://github.com/thiagodifaria) · [LinkedIn](https://www.linkedin.com/in/thiagodifaria/)

## License

Licensed under the [MIT License](LICENSE).
