import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react(), mdx()],

  vite: {
    // Example: Add custom vite plugins directly to your Astro project
    plugins: [vanillaExtractPlugin()],
  },
});
