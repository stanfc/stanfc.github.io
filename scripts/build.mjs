import { cp, mkdir, mkdtemp, readFile, rm, writeFile, access } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
const temporary = await mkdtemp(path.join(tmpdir(), 'odd-pocket-build-'));
try {
  // Only the generated dist directory is replaced. Source repositories stay intact.
  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  for (const file of ['index.html', 'portal.css']) await cp(path.join(root, file), path.join(output, file));
  await cp(path.join(root, 'windcity-sidewalk'), path.join(output, 'windcity-sidewalk'), {
    recursive: true,
    filter: source => !path.basename(source).startsWith('.'),
  });
  const gameSource = path.join(temporary, 'guess-party');
  execFileSync('git', ['clone', '--quiet', '--depth', '1', '--branch', 'main', 'https://github.com/stanfc/guess-party.git', gameSource], { stdio: 'inherit', timeout: 120000 });
  const gameCommit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: gameSource, encoding: 'utf8' }).trim();
  const gameOutput = path.join(output, 'guess-party');
  await mkdir(gameOutput, { recursive: true });
  for (const file of ['index.html', 'style.css', 'app.js', 'game.js', 'decks.js', 'catalog.js', 'pwa.js', 'sw.js', 'manifest.webmanifest', 'icons']) {
    await cp(path.join(gameSource, file), path.join(gameOutput, file), { recursive: true });
  }
  const workerFile = path.join(gameOutput, 'sw.js');
  const worker = await readFile(workerFile, 'utf8');
  if (!worker.includes('__BUILD_ID__')) throw new Error('Game Service Worker build ID placeholder is missing.');
  await writeFile(workerFile, worker.replaceAll('__BUILD_ID__', gameCommit));
  for (const file of ['index.html', 'guess-party/index.html', 'guess-party/icons/icon-192.png', 'windcity-sidewalk/index.html', 'windcity-sidewalk/cover.jpg']) await access(path.join(output, file));
  console.log(`Odd Pocket ready in dist/; guess-party revision: ${gameCommit}`);
} finally {
  await rm(temporary, { recursive: true, force: true });
}
