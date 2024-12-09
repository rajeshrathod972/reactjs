import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from '@svgr/plugin-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
})
