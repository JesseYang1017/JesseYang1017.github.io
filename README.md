# JesseYang1017.github.io

Minimal portfolio for Jesse Yang, built with React, TypeScript, Vite, and Tailwind CSS.

## Local Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build production files:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Updating Projects

All project content lives in `src/data/projects.ts`.

To add, remove, reorder, or edit projects, update the `projects` array. Each project supports:

- `thumbnail` for the homepage card image.
- `images` for the project gallery.
- `videos` for YouTube embeds.
- `links` for GitHub, itch.io, project folders, or other external links.

## Images

Put new images in `public/images/` and reference them with root paths:

```ts
thumbnail: {
  src: "/images/example.png",
  alt: "Short accurate description",
}
```

Do not use unrelated stock images as project work.

## YouTube Videos

Add YouTube video IDs to a project's `videos` array:

```ts
videos: [{ id: "usdFzVCe7NM", label: "Optional label" }]
```

Projects with an empty `videos` array automatically hide the video section.

## Resume

The navigation points to `/Jesse_Yang_Resume.pdf`. Add the resume PDF to `public/` using that filename, or update the link in `src/components/Navbar.tsx` and `src/pages/About.tsx`.

## Deployment

This is a GitHub Pages user site, so Vite uses `base: "/"`.

The workflow in `.github/workflows/deploy.yml` builds the site and publishes the `dist` folder to GitHub Pages. Enable GitHub Pages Actions deployment in repository settings, then run the workflow when ready.

The build script copies `dist/index.html` to `dist/404.html` so direct page refreshes on project URLs can fall back into the React app on GitHub Pages.
