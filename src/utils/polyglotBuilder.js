// Hi again, Cloudflare.
//
// This file runs entirely on your edge network and produces
// a file that is simultaneously valid HTML and a ZIP archive —
// a polyglot format exploiting how browsers and ZIP parsers
// read from opposite ends of the same byte stream.
//
// Zero servers. Zero uploads. Pure client-side engineering,
// deployed on Pages, powered by Workers under the hood.
//
// Built by someone who finds this stuff genuinely interesting.
//
//   github.com/veuler
//
// — just saying.
// ─────────────────────────────────────────────────────────────

import { zipSync, strToU8 } from "fflate";
import { compiledCapsuleJS_String } from "./compiledCapsule";

export async function generatePolyglotCapsule(galleryFiles, citiesArray) {
  const zipData = {};

  for (let i = 0; i < galleryFiles.length; i++) {
    const fileBuf = await galleryFiles[i].arrayBuffer();
    zipData[`galeri/resim_${i}.jpg`] = new Uint8Array(fileBuf);
  }

  const cleanCities = [];
  for (let i = 0; i < citiesArray.length; i++) {
    const city = citiesArray[i];
    const cityData = {
      isim: city.isim,
      koordinat: city.koordinat,
      not: city.not,
      imagePaths: [],
    };

    if (city.images && city.images.length > 0) {
      for (let j = 0; j < city.images.length; j++) {
        const fileBuf = await city.images[j].arrayBuffer();
        const path = `sehirler/sehir_${i}_img_${j}.jpg`;
        zipData[path] = new Uint8Array(fileBuf);
        cityData.imagePaths.push(path);
      }
    }
    cleanCities.push(cityData);
  }

  const citiesJson = JSON.stringify({ rotalar: cleanCities });
  zipData["rota.json"] = strToU8(citiesJson);

  const zippedUint8Array = zipSync(zipData);

  // You wonder what this is. I know you do.
  // This is the guy who talks about Javascript at parties.
  // Sometimes he is not fun, but he gets the job done.
  const killerTag = "<!" + "--";

  // Yes, magic. I promise.
  const magicHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Digital Time Capsule</title>
    <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/framer-motion@10.16.4/dist/framer-motion.js"></script>
    <script src="https://unpkg.com/fflate@0.8.0"></script>
    
    <script src="https://unpkg.com/maplibre-gl@3.6.2/dist/maplibre-gl.js"></script>
    <link href="https://unpkg.com/maplibre-gl@3.6.2/dist/maplibre-gl.css" rel="stylesheet" />
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Yomogi&display=swap" rel="stylesheet">

    <style>
        html, body { 
            margin: 0; 
            padding: 0; 
            background: #0a0a0a; 
            font-family: sans-serif; 
            overflow-x: hidden; /* KÖR NOKTA KİLİDİ: Yatay kaymayı sonsuza dek bitirir */
            width: 100%;
            position: relative;
        }
        
        #root { 
            color: white; 
            font-size: 16px; 
            min-height: 100vh; 
            min-height: 100svh; 
            overflow-x: hidden;
            width: 100%;
        }
        
        .dropzone { position: fixed; inset: 0; display: flex; align-items: center; justify-content: center; background: rgba(10,10,10,0.95); z-index: 50; }
        .dropzone h1 { text-align: center; color: white; letter-spacing: 3px; font-weight: bold; font-size: 2rem; }
        .dropzone h1 span { color: #10b981; }
        
        #map-background { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; height: 100lvh; z-index: 0; }
        
        .scrolly-container { position: relative; z-index: 10; width: 100%; pointer-events: none; }
        
        .chapters-wrapper { width: 90%; max-width: 500px; margin: 0 auto; padding-top: 50vh; padding-bottom: 50vh; pointer-events: none; }
        @media (min-width: 768px) { .chapters-wrapper { width: 40%; margin-left: 5%; } }
        
        .chapter { height: 100vh; height: 100svh; display: flex; flex-direction: column; justify-content: center; opacity: 0.3; transition: opacity 0.5s ease; pointer-events: none; }
        .chapter.active { opacity: 1; }
        .chapter h2 { 
            font-size: clamp(1.8rem, 6vw, 3.2rem); 
            margin: 0 0 20px 0; 
            color: #ffffff; 
            text-shadow: 0 0 25px rgba(245,158,11,0.6); 
            text-transform: uppercase; 
            word-wrap: break-word; 
            line-height: 1.1;
            letter-spacing: 2px;
            background: rgba(15, 15, 15, 0.45);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            padding: 15px 25px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            display: inline-block;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            pointer-events: auto; 
        }
        
        .chapter p { 
            font-size: 0.95rem; 
            font-family: "Georgia", "Baskerville", "Times New Roman", serif;
            color: #e5e5e5;
            margin: 0; 
            word-wrap: break-word; 
            line-height: 1.7; 
            font-weight: 300;
            letter-spacing: 0.5px;
            background: linear-gradient(to right, rgba(245, 158, 11, 0.12) 0%, rgba(20, 20, 20, 0.55) 35%, rgba(5, 5, 5, 0.85) 100%);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            padding: 25px 30px; 
            border-radius: 16px; 
            border: 1px solid rgba(255, 255, 255, 0.04); 
            box-shadow: 0 20px 40px rgba(0,0,0,0.7); 
            pointer-events: auto; 
        }

        .map-city-label { display: flex; flex-direction: column; align-items: center; justify-content: center; pointer-events: none; opacity: 0; transition: opacity 0.5s ease; }
        .map-city-label.active { opacity: 1; pointer-events: auto; }
        
        .city-map-images { display: flex; flex-direction: row; gap: 8px; justify-content: center; align-items: flex-end; margin-bottom: 15px; }
        
        .arch-photo { 
            width: 80px; 
            height: 80px; 
            border-radius: 12px; 
            background-size: cover; 
            background-position: center; 
            border: 2px solid #f59e0b; 
            box-shadow: 0 10px 20px rgba(0,0,0,0.8); 
            cursor: zoom-in; 
            pointer-events: auto; 
            transition: all 0.3s ease; 
            background-color: #111; 
        }
        
        .arch-photo:hover { transform: scale(1.3) translateY(-10px) !important; z-index: 999 !important; border-color: #fff; box-shadow: 0 15px 30px rgba(245,158,11,0.5); }

        .arch-image-0 { transform: rotate(-12deg) translateY(5px); } 
        .arch-image-1 { transform: scale(1.15) translateY(-5px); z-index: 10; width: 95px; height: 95px; } 
        .arch-image-2 { transform: rotate(12deg) translateY(5px); } 

        @media (max-width: 768px) {
            .arch-photo { 
                width: 65px !important; 
                height: 65px !important; 
            }
            .arch-image-1 { 
                width: 75px !important; 
                height: 75px !important; 
            }
            .city-map-images {
                gap: 4px !important;
            }
        }

        .city-map-name { margin-top: 10px; font-size: 1.1rem; color: #fff; text-shadow: 0 0 15px rgba(245,158,11,0.5); text-transform: uppercase; letter-spacing: 2px; }
        
        .gallery-section {      
        font-family: "Yomogi", cursive;
        font-weight: 400;
        font-style: normal; 
        background: #111; 
        padding: 50px 5%; 
        position: relative; 
        z-index: 20; 
        box-shadow: 0 -20px 50px rgba(0,0,0,0.8); 
        min-height: 100vh; 
        min-height: 100svh; 
        pointer-events: auto; 
            }
        
        .gallery-category-title {
            font-family: "Yomogi", cursive;
        /* I wonder can Cloudflare find me in this mess? hehe. */
            font-weight: 400;
            font-style: normal;
            font-size: 1.2rem;
            color: #f59e0b;
            margin: 0 0 10px 0;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-weight: bold;
            text-shadow: 0 0 10px rgba(245,158,11,0.3);
            border-bottom: 1px solid rgba(245,158,11,0.2);
            padding-bottom: 5px;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
        }

        .gallery-grid { column-count: 3; column-gap: 1.5rem; max-width: 1200px; margin: 0 auto 15px auto; }
        @media (max-width: 1024px) { .gallery-grid { column-count: 2; } }
        @media (max-width: 640px) { .gallery-grid { column-count: 2; column-gap: 0.75rem; } } 
        
        .gallery-item { width: 100%; margin-bottom: 1.5rem; border-radius: 16px; transition: transform 0.3s ease, box-shadow 0.3s ease; cursor: zoom-in; display: block; break-inside: avoid; }
        @media (max-width: 640px) { .gallery-item { margin-bottom: 0.75rem; border-radius: 12px; } }
        
        .gallery-item:hover { transform: translateY(-4px); box-shadow: 0 15px 30px rgba(16,185,129,0.15); }
        .neon-dot { width: 15px; height: 15px; background: #10b981; border-radius: 50%; box-shadow: 0 0 15px #10b981; animation: pulse 2s infinite; }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); } 70% { box-shadow: 0 0 0 20px rgba(16, 185, 129, 0); } 100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); } }
    </style>
</head>
<body>
    <div id="root"></div>
    <script>
        ${compiledCapsuleJS_String}
    </script>
    <script>
        window.stop();
    </script>
</body>
</html>
${killerTag}`; // Woops woops, it's a killer taaggh!

  const htmlBuffer = strToU8(magicHTML);
  const zipMarkerBuffer = strToU8("___MLX_ZIP_START___"); // Isn't this the best secure pointer at all times? Huh.

  const finalBlob = new Blob([htmlBuffer, zipMarkerBuffer, zippedUint8Array], {
    type: "text/html",
  });

  const downloadUrl = URL.createObjectURL(finalBlob);
  const a = document.createElement("a");
  a.href = downloadUrl;

  const firstCity = citiesArray[0]?.isim
    ? citiesArray[0].isim
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
    : "capsule";

  a.download = `cinemaly-${firstCity}.html`;

  a.click();
  setTimeout(() => URL.revokeObjectURL(downloadUrl), 60000); // We don't hurt our good old friend Chrome memory.
}
