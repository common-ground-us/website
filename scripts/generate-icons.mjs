import sharp from "sharp";
import { readFileSync } from "fs";

const svg = readFileSync("public/logos/logo-mark.svg");

// Standard icons (transparent background, logo fills frame)
await sharp(svg).resize(192, 192).png().toFile("public/icons/icon-192.png");
await sharp(svg).resize(512, 512).png().toFile("public/icons/icon-512.png");
await sharp(svg).resize(180, 180).png().toFile("public/icons/apple-touch-icon.png");

// Maskable icons (navy background, logo inset ~70% of frame)
const bgSvg = Buffer.from(
  '<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><rect width="512" height="512" fill="#1a2a4a"/></svg>'
);

const logo134 = await sharp(svg).resize(134, 134).png().toBuffer();
await sharp(bgSvg)
  .resize(192, 192)
  .composite([{ input: logo134, gravity: "centre" }])
  .png()
  .toFile("public/icons/icon-192-maskable.png");

const logo360 = await sharp(svg).resize(360, 360).png().toBuffer();
await sharp(bgSvg)
  .resize(512, 512)
  .composite([{ input: logo360, gravity: "centre" }])
  .png()
  .toFile("public/icons/icon-512-maskable.png");

console.log("✓ Generated PWA icons in public/icons/");
