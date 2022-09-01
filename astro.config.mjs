import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react(), mdx()]
});