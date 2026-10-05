# aforashwini.com

Static site with four deep-linkable pages: `/`, `/resources/`, `/events/`, `/one-to-one/`. No dependencies beyond Node 18+.

- `npm run build` writes the site to `dist/`. Deploy that folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
- `npm run dev` builds and previews at http://localhost:4321.

Where things live:

- `src/content.js`: all copy, page titles and meta descriptions, social links and booking links (booking buttons open a pre-filled email to biz@aforashwini.com).
- `src/styles.css`: design tokens in the `:root` block at the top, then layout.
- `src/icons.js`: line-art tile icons and social icons.
- `public/images/ashwini-bright.jpg`: the brightened portrait.

## Hosting

Hosted on Netlify, which deploys the `main` branch automatically using `netlify.toml`. The domain aforashwini.com is registered at Porkbun, with its DNS records pointing to Netlify.
