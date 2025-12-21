import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",          // aceita conexões externas
    port: 3000,               // mesma porta em todo lugar
    allowedHosts: [
      "landroneia-lovable.nvkwtq.easypanel.host",
      "landroneia.com",
      "www.landroneia.com",
    ],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
