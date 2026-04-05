import sharp from 'sharp';

const inputPath = './public/images/factory.png';
const outputPath = './public/images/factory.png';

// Read the image and crop out black bars (top and bottom)
const image = sharp(inputPath);
const metadata = await image.metadata();

console.log('Original dimensions:', metadata.width, 'x', metadata.height);

// The image has black bars at top and bottom
// Crop to remove them - extracting the middle portion
const cropTop = 60;  // pixels to remove from top
const cropBottom = 60;  // pixels to remove from bottom
const newHeight = metadata.height - cropTop - cropBottom;

await sharp(inputPath)
  .extract({
    left: 0,
    top: cropTop,
    width: metadata.width,
    height: newHeight
  })
  .toFile('./public/images/factory_cropped.png');

// Replace original with cropped version
await sharp('./public/images/factory_cropped.png')
  .toFile(outputPath.replace('.png', '_final.png'));

console.log('Cropped image saved. New height:', newHeight);
