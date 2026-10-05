// Tiny local preview server for dist/. Not used in production.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';

const root = join(import.meta.dirname, 'dist');
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml' };
const port = process.env.PORT || 4321;

createServer(async (req, res) => {
  let file = join(root, normalize(decodeURIComponent(req.url.split('?')[0])));
  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404).end('Not found');
  }
}).listen(port, () => console.log(`http://localhost:${port}`));
