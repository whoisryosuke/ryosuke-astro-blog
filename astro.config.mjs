import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

import mdx from "@astrojs/mdx";

// Swap out elements in MDX file with React components
// e.g. `<p>` becomes `<Text>`
const mdxProvider = () => {
  return {
    name: "mdx-components-provider",
    enforce: "post",
    transform(code, id) {
      if (!id.endsWith(".mdx")) return;
      code = `import { components } from '@/components/MDXComponents/MDXComponents';\n${code}`;
      code = code.replace(
        "export default MDXContent;",
        `
        export default function (props) {
          const newProps = {
            ...props,
            components
          }
          return MDXContent(newProps);
        };`
      );
      return code;
    },
  };
};

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  integrations: [react(), mdx()],

  vite: {
    // Example: Add custom vite plugins directly to your Astro project
    plugins: [vanillaExtractPlugin(), mdxProvider()],
  },
});
