import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  theme: {
    extend: {
      keyframes: {
        bend: {
          "0%, 100%": { transform: "skewY(0deg)" },
          "50%": { transform: "skewY(10deg)" },
        },
      },
      animation: {
        bend: "bend 1.5s ease-in-out infinite",
      },
    },
  },
});
