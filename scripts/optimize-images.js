const fs = require('fs');
const path = require('path');
const axios = require('axios');
const sharp = require('sharp');

const IMAGE_LIST = [
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1520986606214-8b456906c813%3Fauto%3Dformat%26fit%3Dcrop%26q%3D60%26w%3D1200&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1529260830199-42c24126f198%3Fauto%3Dformat%26fit%3Dcrop%26q%3D60%26w%3D1200&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1543429776-2782fc8e1acd%3Fauto%3Dformat%26fit%3Dcrop%26q%3D60%26w%3D1200&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=%2Fimages%2Ftaxis-1.jpg&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fen.kampaoh.com%2Fwp-content%2Fuploads%2F2024%2F08%2FSPAIN-2024-08-20T094954.660-1-1024x757.jpg&w=1920&q=75',
  'https://www.italytaxiservice.com/images/almafi.webp',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1464822759023-fed622ff2c3b%3Fauto%3Dformat%26fit%3Dcrop%26q%3D60%26w%3D1200&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fwww.italia.it%2Fcontent%2Fdam%2Ftdh%2Fen%2Fdestinations%2Fpuglia%2Fotranto%2Fmedia%2FOtranto-Puglia-shutterstock_300028358-1024x768-6c996d673b7efdcb6b7e67045d179c7a.jpg&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1530521954074-e64f6810b32d%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D2070&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=%2Fimages%2Fnaples.jpg&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=%2Fimages%2Fvenice%20airport.webp&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1518509562904-e7ef99cdcc86%3Fauto%3Dformat%26fit%3Dcrop%26q%3D60%26w%3D1200&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=%2Fimages%2Fservices.png&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=%2Fimages%2FTuscany%20Wine.jpeg&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1516550893923-42d28e5677af%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D2070&w=1920&q=75',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=60&w=1200',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fa.storyblok.com%2Ff%2F306333%2F1920x1080%2F6d1b795a3d%2Fcostasmeralda.jpg%2Fm%2F1920x1080%2Ffilters%3Aformat(webp)%3Aquality(70)&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=%2Fimages%2Fflorence%20airport.jpg&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=%2Fimages%2Fhero.png&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=%2Fimages%2FLake%20Como.avif&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=%2Fimages%2Frome%20airport.png&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1533929736458-ca588d08c8be%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D2070&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2F9KRcyeyTjZ25RfMUmNg8fk.png&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fwww.sardegnaturismo.it%2Fsites%2Fdefault%2Ffiles%2Fgalleria%2F003_cala_luna_13_tn.jpg&w=1920&q=75',
  'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&q=60&w=1200',
  'https://www.italytaxiservice.com/images/Lake%20Como.avif',
  'https://www.italytaxiservice.com/_next/image?url=%2Fimages%2Fvenice.webp&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1467269204594-9661b134dd2b%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D2070&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=%2Fimages%2FBologna.jpg&w=1920&q=75',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1510414842594-a61c69b5ae57%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D2070&w=1920&q=75',
  'https://www.italytaxiservice.com/images/Tuscany%20Wine.jpeg',
  'https://www.italytaxiservice.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1549144511-f099e773c147%3Fauto%3Dformat%26fit%3Dcrop%26q%3D80%26w%3D2070&w=1920&q=75'
];

const PUBLIC_PATH = path.join(__dirname, '..', 'public');
const IMAGES_PATH = path.join(PUBLIC_PATH, 'images');

if (!fs.existsSync(IMAGES_PATH)) {
  fs.mkdirSync(IMAGES_PATH, { recursive: true });
}

async function optimize(url) {
  try {
    let sourceUrl = url;
    let fileName = '';

    // Handle Next.js image optimization URLs
    if (url.includes('_next/image?url=')) {
      const urlParams = new URL(url).searchParams;
      sourceUrl = decodeURIComponent(urlParams.get('url'));
    }

    // Determine filename
    if (sourceUrl.startsWith('/') || sourceUrl.startsWith('http')) {
        const basename = path.basename(sourceUrl.split('?')[0]);
        const nameWithoutExt = basename.split('.')[0];
        fileName = `${nameWithoutExt}.webp`;
    }

    // If source is local, use local path
    let sourceBuffer;
    if (sourceUrl.startsWith('/')) {
        const localPath = path.join(PUBLIC_PATH, sourceUrl);
        if (fs.existsSync(localPath)) {
            sourceBuffer = fs.readFileSync(localPath);
        } else {
            console.error(`Local file not found: ${localPath}`);
            return;
        }
    } else {
        // External URL
        console.log(`Downloading: ${sourceUrl}`);
        const response = await axios.get(sourceUrl, { responseType: 'arraybuffer' });
        sourceBuffer = Buffer.from(response.data);
    }

    const outputPath = path.join(IMAGES_PATH, fileName);
    
    // Process with sharp
    // We aim for < 100KB. We'll start with 80 quality and resize if needed.
    // 1920 width is usually fine for hero images, but maybe too big for < 100KB in some cases.
    // Let's try 1200 as a reasonable maximum beauty/size trade-off.
    
    let quality = 80;
    let width = 1200;
    
    let buffer = await sharp(sourceBuffer)
      .resize({ width: width, withoutEnlargement: true })
      .webp({ quality: quality })
      .toBuffer();
    
    // If it's still > 100KB, reduce quality or size
    while (buffer.length > 100 * 1024 && quality > 10) {
        quality -= 10;
        buffer = await sharp(sourceBuffer)
            .resize({ width: width, withoutEnlargement: true })
            .webp({ quality: quality })
            .toBuffer();
            
        if (buffer.length > 100 * 1024 && quality <= 10 && width > 400) {
            width -= 200;
            quality = 80; // reset quality and try smaller width
            buffer = await sharp(sourceBuffer)
                .resize({ width: width, withoutEnlargement: true })
                .webp({ quality: quality })
                .toBuffer();
        }
    }

    fs.writeFileSync(outputPath, buffer);
    console.log(`Optimized: ${fileName} (${(buffer.length / 1024).toFixed(2)} KB)`);

  } catch (error) {
    console.error(`Error processing ${url}:`, error.message);
  }
}

async function main() {
  for (const url of IMAGE_LIST) {
    await optimize(url);
  }
  console.log('All images processed.');
}

main();
