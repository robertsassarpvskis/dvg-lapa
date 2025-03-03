import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Set base path for deployment
  plugins: [react()],
  base:"/daugavpils",
});

