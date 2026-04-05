import sharp from 'sharp';

const inputPath = './public/images/factory.png';
const outputPath = './public/images/factory.png';

async function cropImage() {
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  
  console.log('Original dimensions:', metadata.width, 'x', metadata.height);
  
  // The black bars appear to be at top and bottom
  // Based on the image, crop out approximately 15% from top and bottom
  const cropTop = Math.floor(metadata.height * 0.08);
  const cropBottom = Math.floor(metadata.height * 0.08);
  const newHeight = metadata.height - cropTop - cropBottom;
  
  console.log('Cropping:', cropTop, 'from top,', cropBottom, 'from bottom');
  console.log('New height:', newHeight);
  
  await image
    .extract({
      left: 0,
      top: cropTop,
      width: metadata.width,
      height: newHeight
    })
    .toFile(outputPath + '.tmp');
  
  // Replace original with cropped version
  const fs = await import('fs');
  fs.renameSync(outputPath + '.tmp', outputPath);
  
  console.log('Image cropped successfully!');
}

cropImage().catch(console.error);
