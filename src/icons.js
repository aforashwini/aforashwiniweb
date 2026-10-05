// Line-art icons. Tile icons use a 100 by 100 viewBox; social icons use 24 by 24.

const tile = (paths) =>
  `<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;

export const tileIcons = {
  dress: tile(
    '<path d="M42 14 L46 26 L50 20 L54 26 L58 14"/><path d="M42 14 Q40 24 44 32 L56 32 Q60 24 58 14"/><path d="M44 32 L30 84 L70 84 L56 32"/><path d="M50 32 L50 84"/>'
  ),
  microphone: tile(
    '<rect x="40" y="14" width="20" height="40" rx="10"/><path d="M30 46 Q30 68 50 68 Q70 68 70 46"/><path d="M50 68 L50 84"/><path d="M38 84 L62 84"/>'
  ),
  cap: tile(
    '<path d="M50 28 L88 44 L50 60 L12 44 Z"/><path d="M28 51 L28 68 Q50 80 72 68 L72 51"/><path d="M84 46 L84 70"/><circle cx="84" cy="73" r="3"/>'
  ),
  apple: tile(
    '<path d="M50 34 Q40 26 32 30 Q20 36 22 54 Q24 74 38 82 Q44 85 50 81 Q56 85 62 82 Q76 74 78 54 Q80 36 68 30 Q60 26 50 34 Z"/><path d="M50 34 Q50 24 54 16"/><path d="M54 24 Q62 14 70 18 Q64 28 54 24 Z"/>'
  ),
  play: tile(
    '<rect x="16" y="26" width="68" height="48" rx="6"/><path d="M43 38 L61 50 L43 62 Z"/>'
  ),
  book: tile(
    '<path d="M50 30 Q36 22 16 26 L16 76 Q36 72 50 80 Q64 72 84 76 L84 26 Q64 22 50 30 Z"/><path d="M50 30 L50 80"/>'
  ),
  calendar: tile(
    '<rect x="18" y="24" width="64" height="58" rx="6"/><path d="M18 38 L82 38"/><path d="M34 16 L34 30"/><path d="M66 16 L66 30"/><circle cx="36" cy="54" r="2.6"/><circle cx="50" cy="54" r="2.6"/><circle cx="64" cy="54" r="2.6"/><circle cx="36" cy="68" r="2.6"/><circle cx="50" cy="68" r="2.6"/>'
  ),
  pin: tile(
    '<path d="M50 88 Q24 56 24 40 Q24 14 50 14 Q76 14 76 40 Q76 56 50 88 Z"/><circle cx="50" cy="38" r="10"/>'
  ),
};

const social = (paths) =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths}</svg>`;

export const socialIcons = {
  instagram: social(
    '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.3" cy="6.7" r="0.6" fill="currentColor"/>'
  ),
  tiktok: social(
    '<path d="M13 4 L13 15.5 A3.5 3.5 0 1 1 9.5 12"/><path d="M13 4 Q14 8 18 8.5"/>'
  ),
};
