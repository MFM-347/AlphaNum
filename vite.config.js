import { defineConfig } from "vite";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.js"),
      name: "alpha-num",
      fileName: (format) => `alpha-num.${format}.js`,
    },
  },
});
