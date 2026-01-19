import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Имя репозитория заменяй на своё!
export default defineConfig({
  base: "/build-our-story/", 
  plugins: [react()],
});
