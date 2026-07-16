import {defineConfig} from "vite";
import react, {reactCompilerPreset} from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://api-driver.marsview.cc",
        rewrite: (path) => {
          return path.replace(/^\/api/, "")
        }
      }
    }
  },
  plugins: [react(), babel({presets: [reactCompilerPreset()]})],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
});
