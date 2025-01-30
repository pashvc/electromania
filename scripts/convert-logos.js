const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function convertSvgToPng(inputPath, outputPath, size) {
  const svgBuffer = fs.readFileSync(inputPath);
  await sharp(svgBuffer).resize(size, size).png().toFile(outputPath);
}

async function main() {
  const sizes = [192, 512];
  for (const size of sizes) {
    await convertSvgToPng(
      path.join(__dirname, `../public/images/logo${size}.svg`),
      path.join(__dirname, `../public/images/logo${size}.png`),
      size
    );
  }
}

main().catch(console.error);
