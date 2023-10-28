/// <reference types="vite/client" />
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [million.vite({ auto: true }), react(), tsConfigPaths()],
	server: {
		open: true,
	},
})
