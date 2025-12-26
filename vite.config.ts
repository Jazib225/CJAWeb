import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
      {
        // Resolve imports like "figma:asset/<name>.png" -> "src/assets/<name>.png"
        find: /^figma:asset\/(.*)$/,
        replacement: path.resolve(__dirname, 'src', 'assets') + '/$1',
      },
    ],
  },
})