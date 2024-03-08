import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist', // Substitua 'nome-do-seu-diretorio' pelo nome do diretório que deseja usar como saída
  },
  plugins: [react()],
})
