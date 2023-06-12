import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import makeManifest from './utils/plugins/make-manifest'
import { outputFolderName } from './utils/constants'

// __dirname
const root = resolve(__dirname, 'src')
const publicDir = resolve(__dirname, 'public')
const outDir = resolve(__dirname, outputFolderName)

// root
const assetsDir = resolve(root, 'assets')
const pagesDir = resolve(root, 'pages')

export default defineConfig({
  resolve: {
    alias: {
      '@src': root,
      '@assets': assetsDir,
      '@pages': pagesDir,
    },
  },
  plugins: [react(), makeManifest()],
  publicDir: publicDir,
  build: {
    outDir: outDir,
    sourcemap: process.env.__DEV__ === 'true',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        popup: resolve(pagesDir, 'popup', 'index.html'),
        options: resolve(pagesDir, 'options', 'index.html'),
        background: resolve(pagesDir, 'background', 'index.ts'),
      },
      output: {
        entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`,
      },
    },
  },
})
