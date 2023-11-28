/// <reference types="vite/client" />
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import { defineConfig, loadEnv } from 'vite'
import Inspect from 'vite-plugin-inspect'

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
	// Load env file based on `mode` in the current working directory.
	// Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
	const env = loadEnv(mode, process.cwd(), '')
	return {
		// vite config
		plugins: [million.vite({ auto: true }), react(), Inspect()],
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

		envPrefix: ['VITE_'],
		define: {
			VITE_API_URL: JSON.stringify(env.VITE_API_URL),
		},
		esbuild: {
			loader: 'tsx',
			include: 'src/**/*.{ts,tsx,js,jsx}',
		},
		optimizeDeps: {
			esbuildOptions: {
				loader: {
					'.js': 'jsx',
					'.ts': 'tsx',
				},
			},
		},
	}
})
