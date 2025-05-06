import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    tailwindcss(), react(),
  ],
  theme: {
    extend: {
      colors: {
        theme: 'rgb(var(--px-theme-rgb))',
        black: '#040c16',
        white: '#fff',
        text: '#707476',
        heading: '#fff',
      },
    },
  },
})
