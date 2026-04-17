# Zubair Hussain Portfolio

A modern React + Vite portfolio and resume website built for **Zubair Hussain**, positioned as a **Senior Full Stack Developer** with strong ASP.NET Core, React, Angular, and frontend architecture expertise.

## Stack

- React
- JavaScript
- Vite
- Custom CSS

## Key Features

- Premium dark UI with glassmorphism panels and gradient accents
- Scroll progress bar
- Typing text effect
- Animated counters
- Scroll reveal transitions
- Mobile-friendly responsive layout
- Reusable component-based structure
- Separate social links config
- Downloadable resume file
- Netlify-friendly frontend-only setup

## Project Structure

```text
Portfolio/
|-- public/
|   `-- zubair-hussain-resume.pdf
|-- src/
|   |-- components/
|   |   |-- AboutSection.jsx
|   |   |-- BackToTopButton.jsx
|   |   |-- ContactSection.jsx
|   |   |-- ExperienceSection.jsx
|   |   |-- Footer.jsx
|   |   |-- HeroSection.jsx
|   |   |-- Navbar.jsx
|   |   |-- ProjectsSection.jsx
|   |   |-- ScrollProgress.jsx
|   |   |-- SectionHeading.jsx
|   |   `-- SkillsSection.jsx
|   |-- data/
|   |   |-- portfolioData.js
|   |   `-- socialLinks.js
|   |-- hooks/
|   |   |-- useCountUp.js
|   |   `-- useTypingText.js
|   |-- styles/
|   |   `-- index.css
|   |-- App.jsx
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```

## File Purpose

- [`index.html`](C:/Users/HP/Desktop/Projects/Github/Portfolio/index.html): Vite HTML entry with SEO metadata and font loading.
- [`src/main.jsx`](C:/Users/HP/Desktop/Projects/Github/Portfolio/src/main.jsx): React mount entry.
- [`src/App.jsx`](C:/Users/HP/Desktop/Projects/Github/Portfolio/src/App.jsx): assembles the full page and enables scroll reveal behavior.
- [`src/components`](C:/Users/HP/Desktop/Projects/Github/Portfolio/src/components): reusable UI sections and interaction components.
- [`src/data/portfolioData.js`](C:/Users/HP/Desktop/Projects/Github/Portfolio/src/data/portfolioData.js): text content, stats, skills, experience, projects, and floating tech labels.
- [`src/data/socialLinks.js`](C:/Users/HP/Desktop/Projects/Github/Portfolio/src/data/socialLinks.js): centralized social and resume URLs.
- [`src/hooks`](C:/Users/HP/Desktop/Projects/Github/Portfolio/src/hooks): small reusable animation hooks for typing text and counters.
- [`src/styles/index.css`](C:/Users/HP/Desktop/Projects/Github/Portfolio/src/styles/index.css): all theme, layout, animation, and responsive styling.
- [`public/zubair-hussain-resume.pdf`](C:/Users/HP/Desktop/Projects/Github/Portfolio/public/zubair-hussain-resume.pdf): downloadable resume asset.

## How It Connects

1. Vite serves [`index.html`](C:/Users/HP/Desktop/Projects/Github/Portfolio/index.html).
2. `index.html` loads [`src/main.jsx`](C:/Users/HP/Desktop/Projects/Github/Portfolio/src/main.jsx).
3. `main.jsx` renders [`src/App.jsx`](C:/Users/HP/Desktop/Projects/Github/Portfolio/src/App.jsx).
4. `App.jsx` composes all page sections from `src/components`.
5. Components pull text and links from `src/data`, keeping content easy to update without rewriting layout code.
6. All visuals and animations are controlled from [`src/styles/index.css`](C:/Users/HP/Desktop/Projects/Github/Portfolio/src/styles/index.css).

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The output is generated in `dist/` and can be deployed directly to Netlify.

## Netlify Deployment

- Build command: `npm run build`
- Publish directory: `dist`

## Notes

- This project is **frontend only**.
- No PHP, server-side code, or backend dependency is required by the app.
- Update placeholder social/contact values in [`src/data/socialLinks.js`](C:/Users/HP/Desktop/Projects/Github/Portfolio/src/data/socialLinks.js) when real links are available.
