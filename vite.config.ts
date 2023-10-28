/// <reference types="vite/client" />
import * as path from 'path'

import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [million.vite({ auto: true }), react()],
	server: {
		open: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
})
