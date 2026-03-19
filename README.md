# abelsturm.com

Personal website of Abel Sturm — developer & adventurer based in Girona.

Built with [Astro](https://astro.build), Tailwind CSS, and TypeScript.

## Stack

- **Framework:** Astro 5 (static + view transitions)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Syne (headings) + Inter (body)
- **Deployment:** abelsturm.com

## Features

- 4 languages: Spanish, English, Catalan, German
- Dark / light mode with no flash on load
- Custom animated cursor
- Scroll reveal animations
- View transitions between pages
- Sections: Projects, Adventures, Technologies, Hobbies, About

## Project structure

```
src/
├── components/       # Nav, ProjectCard, AdventureCard, Cursor
├── content/          # Markdown content (projects, adventures)
├── i18n/             # Translations (es, en, ca, de)
├── layouts/          # BaseLayout
├── pages/
│   └── [lang]/       # index, projects, adventures, about
├── scripts/          # cursor.ts, theme.ts, scroll-reveal.ts
└── styles/           # global.css (tokens, components)
public/               # Static assets (logo, og image)
```

## Commands

| Command            | Action                              |
| :----------------- | :---------------------------------- |
| `npm install`      | Install dependencies                |
| `npm run dev`      | Start dev server at localhost:4321  |
| `npm run build`    | Build for production to `./dist/`   |
| `npm run preview`  | Preview production build locally    |
| `astro check`      | Type-check all Astro files          |
