# Portfolio Development Notes

This site should stay minimal and project-first.

## Design Direction

- Use a dark charcoal background, soft off-white text, muted amber accents, thin borders, and generous spacing.
- Keep the feel approximately 80% modern minimalism and 20% retro computer graphics influence.
- Avoid fake terminals, CRT effects, heavy gradients, excessive animation, skill bars, and decorative filler.
- Project images, videos, short descriptions, and links are the main content.

## Content Rules

- Keep exactly the intended project list unless Jesse adds or removes projects in `src/data/projects.ts`.
- Do not reintroduce Music or Blockzard unless explicitly requested.
- Do not invent YouTube videos, screenshots, links, or LinkedIn/profile URLs.
- Use subtle placeholders only when real project images are not available.

## Project Data

Project content is centralized in `src/data/projects.ts`.

- `videos: []` hides the video section.
- `images: []` hides the gallery.
- Store future project images in `public/images/`.
- Use YouTube video IDs, not full embed markup.
- Keep homepage summaries to one line when practical.
- Keep project descriptions concise: usually 2-4 short paragraphs.

## Routing

The site uses simple path-based routing from `window.location.pathname`. The production build creates `404.html` from `index.html` for GitHub Pages refresh support.
