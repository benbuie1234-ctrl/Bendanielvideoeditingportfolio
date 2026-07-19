# Ben Daniel video-editing portfolio

This is an Astro static site. Run `npm install` followed by `npm run dev` for local development, or `npm run build` to create `dist/`.

## Cloudflare Pages

Deploy using Cloudflare Pages with `npm run build` as the build command and `dist` as the build output directory. `wrangler.jsonc` intentionally uses `pages_build_output_dir`; no Worker or Astro Cloudflare adapter is needed for this static site.
