import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Ensure both resume.pdf and res.pdf exist in public directory
try {
  const pubDir = path.resolve(__dirname, 'public')
  const resumePath = path.join(pubDir, 'resume.pdf')
  const resPath = path.join(pubDir, 'res.pdf')
  if (fs.existsSync(resumePath) && !fs.existsSync(resPath)) {
    fs.copyFileSync(resumePath, resPath)
  }
} catch (e) {
  // ignore
}

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
})