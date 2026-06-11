import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(__dirname, '../src/assets/jardimcolina');

// max output width per file (px). Keeps Sharp memory sane during astro:assets.
const caps = {
  'hero-pordosol.png': 1920,
  'financiamento-aerea.jpg': 1920,
  'local-drone.jpg': 1920,
  'implantacao-planta.png': 2400,
  'implantacao-aerea.jpg': 1600,
  'conceito-drone.png': 1400,
  'infra-vias.png': 1100,
  'infra-casas.jpg': 1100,
  'amen-entrada.png': 1100,
  'amen-jardim.png': 1100,
  'amen-pet.png': 1100,
  'amen-playground.png': 1100,
  'amen-praca-dia.png': 1100,
  'amen-praca-noite.png': 1100,
  'amen-quadra.png': 1100,
};

for (const [name, maxW] of Object.entries(caps)) {
  const file = path.join(dir, name);
  if (!fs.existsSync(file)) {
    console.warn('skip (missing):', name);
    continue;
  }
  const meta = await sharp(file).metadata();
  if (meta.width && meta.width <= maxW) {
    console.log(`ok ${name} (${meta.width}w, no resize)`);
    continue;
  }
  const ext = path.extname(name).toLowerCase();
  const tmp = file + '.tmp';
  let pipe = sharp(file, { limitInputPixels: false }).resize({ width: maxW, withoutEnlargement: true });
  if (ext === '.png') pipe = pipe.png({ compressionLevel: 9 });
  else pipe = pipe.jpeg({ quality: 86, mozjpeg: true });
  await pipe.toFile(tmp);
  fs.renameSync(tmp, file);
  const after = await sharp(file).metadata();
  console.log(`resized ${name}: ${meta.width}w -> ${after.width}w`);
}
console.log('preresize done.');
