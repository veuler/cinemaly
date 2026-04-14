# Cinemaly

**Transform your travel photos and route into a cinematic, interactive map documentary — entirely in your browser.**

No login. No server. No data ever leaves your device.

![Cinemaly](public/og-image.jpg)

---

## What It Does

You upload your travel photos, add the cities you visited, and Cinemaly compiles everything into a single `.html` file. Open that file in any browser and you get an interactive map that flies between your destinations as you scroll — with your photos and notes appearing alongside each location.

The output file is also a valid `.zip` archive. Open it with 7-Zip or WinRAR to extract your original photos and route data at any time.

---

## Privacy

| Claim                | How It Works                                                   |
| -------------------- | -------------------------------------------------------------- |
| **No login**         | No account, email, or sign-up required                         |
| **Zero data stored** | All processing happens in your browser — nothing is uploaded   |
| **No server**        | The app has no backend. Your photos never leave your device    |
| **Portable output**  | One downloadable file; the viewer loads React, MapLibre, etc. from public CDNs on first open (no Next.js server involved) |

You can verify this yourself: open DevTools → Network tab while creating a capsule. The only external request is to [Nominatim](https://nominatim.org) for city coordinates — no photos, no route data, nothing personal.

---

## Platform Support

| Platform                                | Create Capsule | View Capsule |
| --------------------------------------- | -------------- | ------------ |
| Desktop — Chrome, Firefox, Edge, Safari | ✅             | ✅           |
| Android — Chrome                        | ✅             | ✅           |
| iOS — Safari, Chrome, Edge              | ✅             | ❌           |

> **iOS note:** Creating a capsule works on iOS. Viewing one does not — this is a WebKit platform limitation with binary file reading (`arrayBuffer` API). No workaround is currently available within the browser environment.

---

## How It Works — The Polyglot Engine

The generated `.html` file is simultaneously a valid web page and a valid ZIP archive. This is possible because:

- **ZIP** specification reads from the _end_ of a file (EOCD record)
- **HTML** parsers read from the _beginning_ and stop at `<!--` comment tag

So the file structure is:

```
[HTML + embedded React app]
<!--                          ← browser stops here
___MLX_ZIP_START___           ← magic pointer for the app to find the ZIP
[ZIP binary: photos + route]  ← 7-Zip reads this from the end
```

When you drop the file back into the app, the JavaScript reads it as an `ArrayBuffer`, scans backward for the magic pointer, slices out the ZIP portion, decompresses it in memory using [fflate](https://github.com/101arrowz/fflate), and renders everything — without a single byte touching a server.

---

## Tech Stack

**Web app**

- [Next.js 16](https://nextjs.org) — App Router, Edge Runtime
- [React 19](https://react.dev) & [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)

**Capsule engine**

- [fflate](https://github.com/101arrowz/fflate) — ZIP compression/decompression
- [MapLibre GL](https://maplibre.org) — interactive 3D map
- [Framer Motion](https://www.framer.com/motion) — gallery animations
- [esbuild](https://esbuild.github.io) — compiles `CapsuleApp.jsx` to an embedded IIFE string (the opened capsule still uses **React 18** from CDN inside the HTML, separate from the Next.js app)

**Infrastructure**

- [Cloudflare Pages](https://pages.cloudflare.com) — hosting + CDN
- [`@cloudflare/next-on-pages`](https://github.com/cloudflare/next-on-pages) — Next.js → Workers adapter

---

## Project Structure

```
cinemaly/
├── next.config.ts         # Next.js configuration
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout, fonts, metadata, NavLogo, Footer
│   │   ├── globals.css
│   │   ├── page.tsx       # Landing (CapsuleGenerator, PromoVideo)
│   │   ├── robots.ts
│   │   ├── sitemap.ts
│   │   ├── guide/
│   │   └── contact/
│   ├── components/        # Shared UI (NavLogo, Footer, CapsuleGenerator, …)
│   ├── capsule-src/
│   │   └── CapsuleApp.jsx # React app embedded in the generated capsule
│   ├── scripts/
│   │   └── compile.js     # esbuild: CapsuleApp → minified IIFE string
│   └── utils/
│       ├── compiledCapsule.js  # Output of compile.js (committed)
│       └── polyglotBuilder.js  # Builds polyglot HTML/ZIP in the browser
├── public/                # Static assets, site.webmanifest, _headers (CF)
└── wrangler.toml
```

---

## Local Development

**Prerequisites:** Node.js 20+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Recompiling the Capsule Engine

If you modify `src/capsule-src/CapsuleApp.jsx`, recompile before committing. Paths inside `compile.js` are relative to **`src`**, so run:

```bash
cd src
node scripts/compile.js
```

This updates **`src/utils/compiledCapsule.js`** — commit `CapsuleApp.jsx` and `compiledCapsule.js` together.

**Why esbuild instead of the Next.js build?**
`CapsuleApp.jsx` runs inside the generated `.html` file, not in the Next.js app. It uses React and other libraries from CDN via `window.React`, `window.Motion`, etc. The `tsconfigRaw: { jsx: "react" }` override forces classic JSX transform to avoid implicit `require("react")` calls.

---

## Deploying to Cloudflare Pages

```bash
# Install CF tooling (if not already installed)
npm install -D @cloudflare/next-on-pages wrangler

# Production-style Pages build (see package.json → pages:build)
npm run pages:build

# Local preview of the Pages output
npm run preview
```

**Build settings in CF Pages dashboard:**

| Setting                | Value                             |
| ---------------------- | --------------------------------- |
| Build command          | `npx @cloudflare/next-on-pages@1` |
| Build output directory | `.vercel/output/static`           |
| Environment variable   | `NODE_VERSION=20`                 |

---

## Security

- No API keys or secrets are used anywhere in this codebase
- The only external service called at runtime is [Nominatim](https://nominatim.openstreetmap.org) (OpenStreetMap geocoding) — called from the user's browser, not from a server
- The generated capsule file is auditable HTML/JS — inspect `src/capsule-src/CapsuleApp.jsx` and `src/utils/polyglotBuilder.js`
- If your browser or antivirus warns about the downloaded `.html` file, this is a false positive — `.html` files containing JavaScript trigger heuristic warnings by design. The source code is fully auditable here.

---

## Contributing

Issues and pull requests are welcome. If you find a bug or have a feature idea, open an issue first to discuss it.

---

## License

Source-available, all rights reserved. You may view and audit the code,
but may not use, copy, modify, or distribute it without explicit written
permission. See [LICENSE](LICENSE) for full terms.

---

_Built by [@veuler](https://github.com/veuler)_
