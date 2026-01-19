import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Заменяй "build-our-story" на имя твоего репозитория
export default defineConfig({
  base: "/build-our-story/",
  plugins: [react()],
});
