/// <reference types="vite/client" />
import { resolve } from 'path'

import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [million.vite({ auto: true }), react()],
	server: {
		open: false,
		strictPort: true,
		port: 3000, // you can replace this port with any port
	},
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
})
