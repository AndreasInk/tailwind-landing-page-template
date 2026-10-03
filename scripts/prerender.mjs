import { build } from 'vite';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

await build({
  build: {
    ssr: 'src/entry-server.jsx',
    outDir: 'dist-ssr',
    copyPublicDir: false,
    rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } },
  },
});

const { renderPage } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.mjs')));
const file = path.resolve('dist/index.html');
const template = await readFile(file, 'utf8');
const placeholder = '<div id="root"></div>';
if (!template.includes(placeholder)) throw new Error('Homepage prerender placeholder missing');
await writeFile(file, template.replace(placeholder, `<div id="root">${renderPage('/')}</div>`));
console.log('Prerendered homepage product information into dist/index.html');

// Existing secondary routes are incomplete product/support surfaces. Give
// direct requests their own visible content and keep them out of indexing.
for (const route of ['pricing', 'building']) {
  const title = route === 'pricing' ? 'PingPath Pro — Plans and Support' : 'PingPath — Page in Progress';
  const html = template
    .replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="https://www.pingpath.app/${route}/" />`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, '')
    .replace('</head>', '<meta name="robots" content="noindex, follow" /></head>')
    .replace(placeholder, `<div id="root">${renderPage(`/${route}`)}</div>`);
  await mkdir(path.resolve('dist', route), { recursive: true });
  await writeFile(path.resolve('dist', route, 'index.html'), html);
}
