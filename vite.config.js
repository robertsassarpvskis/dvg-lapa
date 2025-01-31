import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: '/dvg-lapa/',  // Set base path for deployment
  plugins: [react()]
});

