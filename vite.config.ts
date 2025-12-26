import { defineConfig } from 'vite'
// ...existing code...
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // React plugin only (Tailwind does not come from '@tailwindcss/vite')
    react(),
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
// ...existing code...