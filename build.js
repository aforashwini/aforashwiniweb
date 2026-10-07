// Builds the static site into dist/: one real HTML page per tab so every URL is deep-linkable.
import { cpSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as content from './src/content.js';
import { socialIcons, tileIcons } from './src/icons.js';

const root = dirname(fileURLToPath(import.meta.url));
const out = join(root, 'dist');

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const header = (current) => `
<header class="site-header">
  <div class="header-centre">
    <a class="site-name" href="/">${esc(content.site.name)}</a>
    <nav class="tabs" aria-label="Main">
      <ul>
        ${content.tabs
          .map(
            (t) =>
              `<li><a href="${t.href}"${t.id === current ? ' aria-current="page"' : ''}>${esc(t.label)}</a></li>`
          )
          .join('\n        ')}
      </ul>
    </nav>
  </div>
  <ul class="social">
    ${content.social
      .map((s) => `<li><a href="${s.href}" aria-label="${esc(s.label)}">${socialIcons[s.id]}</a></li>`)
      .join('\n    ')}
  </ul>
</header>`;

const footer = `
<footer class="site-footer">
  <p class="footer-name">${esc(content.site.name)}</p>
  <p class="footer-domain">${esc(content.site.domain)}</p>
</footer>`;

const iconTile = (name, bg, extra = '') =>
  `<div class="tile icon-tile ${bg}${extra}" aria-hidden="true">${tileIcons[name]}</div>`;

const layout = ({ meta, current, path, main }) => `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(meta.title)}</title>
  <meta name="description" content="${esc(meta.description)}">
  <link rel="canonical" href="https://${content.site.domain}${path}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${esc(meta.title)}">
  <meta property="og:description" content="${esc(meta.description)}">
  <meta property="og:url" content="https://${content.site.domain}${path}">
  <meta property="og:image" content="https://${content.site.domain}/images/ashwini.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="theme-color" content="#F2EFFB">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Hanken+Grotesk:wght@400;500;600&display=swap">
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${header(current)}
<main id="main">
${main}
</main>
${footer}
</body>
</html>
`;

const titleBand = (title, modifier = '') =>
  `<section class="title-band${modifier}"><h1 class="page-title">${esc(title)}</h1></section>`;

function aboutPage() {
  const a = content.about;
  return `
${titleBand(a.title, ' title-band--compact')}
<section class="mosaic" aria-label="Portrait and motto">
  <figure class="tile span-2x2 portrait">
    <img src="/images/ashwini.jpg" alt="${esc(a.photoAlt)}" width="1200" height="1492" fetchpriority="high">
  </figure>
  <div class="tile span-2x2 bg-butter quote-tile">
    <blockquote class="pull-quote"><p>${esc(a.quote)}</p></blockquote>
    <p class="pill credit">${esc(a.quoteCredit)}</p>
  </div>
</section>
<section class="reading" aria-label="My story">
  <div class="reading-text">
    <p class="lead">${esc(a.lead)}</p>
    <div class="body-copy">
      ${a.body.map((p) => `<p>${esc(p)}</p>`).join('\n      ')}
    </div>
  </div>
  <div class="icon-stack">
    ${iconTile('dress', 'bg-lilac')}
    ${iconTile('microphone', 'bg-plum')}
    ${iconTile('cap', 'bg-lemon')}
    ${iconTile('apple', 'bg-butter')}
  </div>
</section>
<section class="closing on-plum">
  <p>${esc(a.closing.before)}<em>${esc(a.closing.highlight)}</em>${esc(a.closing.after)}</p>
</section>`;
}

// Resources and Events share one layout. Replace the soon-tile row with a card grid when content arrives.
function comingSoonPage(page) {
  const [first, second] = page.icons;
  return `
${titleBand(page.title)}
<section class="mosaic" aria-label="${esc(page.badge)}">
  <div class="tile span-2 bg-lilac soon-tile">
    <p class="pill badge">${esc(page.badge)}</p>
    <p class="soon-text">${esc(page.text)}</p>
  </div>
  ${iconTile(first, 'bg-plum')}
  ${iconTile(second, 'bg-butter')}
</section>`;
}

function oneToOnePage() {
  const o = content.oneToOne;
  const card = (s) => {
    const dark = s.theme === 'dark';
    return `
  <article class="tile span-2 session ${dark ? 'bg-plum on-plum' : 'bg-butter'}">
    <p class="pill duration">${esc(s.duration)}</p>
    <h2 class="session-title">${esc(s.title)}</h2>
    <p class="session-desc">${esc(s.description)}</p>
    <div class="session-foot">
      <p class="price">${esc(s.price)}</p>
      <a class="button ${dark ? 'button--light' : 'button--plum'}" href="${s.href}">${esc(o.buttonLabel)}<span class="visually-hidden">: ${esc(s.title)}</span></a>
    </div>
  </article>`;
  };
  return `
${titleBand(o.title)}
<section class="mosaic sessions" aria-label="Sessions">
${o.sessions.map(card).join('\n')}
</section>
<section class="email-note">
  <p>${esc(o.emailNote)} <a href="mailto:${content.bookingEmail}">${esc(content.bookingEmail)}</a></p>
</section>`;
}

function partnershipsPage() {
  const pt = content.partnerships;
  const [first, second] = pt.icons;
  const href = `mailto:${content.bookingEmail}?subject=${encodeURIComponent(pt.emailSubject)}`;
  return `
${titleBand(pt.title)}
<section class="mosaic" aria-label="${esc(pt.title)}">
  <div class="tile span-2 bg-lilac soon-tile partner-tile">
    <p class="soon-text">${esc(pt.text)} <a href="${href}">${esc(content.bookingEmail)}</a>.</p>
    <p class="partner-thanks">${esc(pt.thanks)}</p>
  </div>
  ${iconTile(first, 'bg-plum')}
  ${iconTile(second, 'bg-butter')}
</section>`;
}

function notFoundPage() {
  const n = content.notFound;
  return `
${titleBand(n.title, ' title-band--compact')}
<section class="email-note">
  <p>${esc(n.text)} <a href="/">${esc(n.linkLabel)}</a>.</p>
</section>`;
}

const pages = [
  { path: '/', current: 'about', meta: content.about.meta, main: aboutPage() },
  { path: '/resources/', current: 'resources', meta: content.resources.meta, main: comingSoonPage(content.resources) },
  { path: '/events/', current: 'events', meta: content.events.meta, main: comingSoonPage(content.events) },
  { path: '/one-to-one/', current: 'one-to-one', meta: content.oneToOne.meta, main: oneToOnePage() },
  { path: '/partnerships/', current: 'partnerships', meta: content.partnerships.meta, main: partnershipsPage() },
];

// GitHub Pages serves 404.html for any unknown URL.
const notFound = { path: '/', current: null, meta: content.notFound.meta, main: notFoundPage() };

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
cpSync(join(root, 'public'), out, { recursive: true });
cpSync(join(root, 'src/styles.css'), join(out, 'styles.css'));

for (const page of pages) {
  const dir = join(out, page.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), layout(page));
}

writeFileSync(join(out, '404.html'), layout(notFound));

console.log(`Built ${pages.length} pages into dist/`);
