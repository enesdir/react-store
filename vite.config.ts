/// <reference types="vite/client" />
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		million.vite({ auto: true }),
		react(),
		checker({ typescript: true, eslint: { lintCommand: 'eslint src' } }),
		tsConfigPaths(),
	],
	server: {
		open: true,
	},
})
