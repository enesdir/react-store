/// <reference types="vite/client" />
import { resolve } from 'node:path'
import react from '@vitejs/plugin-react-swc'
import million from 'million/compiler'
import { defineConfig, loadEnv } from 'vite'
import Inspect from 'vite-plugin-inspect'
import { VitePWA } from 'vite-plugin-pwa'

const vitePluginPWA = () =>
	VitePWA({
		registerType: 'autoUpdate',
		injectRegister: 'auto',
		devOptions: {
			enabled: true,
		},
		workbox: {
			globPatterns: ['**/*'],
		},
		includeAssets: ['**/*'],
		manifest: {
			id: 'com.enesesen.reactstore',
			name: 'React Store',
			short_name: 'react-store',
			description: 'Vite PWA React Redux E-Commerce Application',
			lang: 'en',
			dir: 'ltr',
			scope: '/',
			start_url: '/',
			display: 'standalone',
			orientation: 'portrait',
			background_color: '#FFFFFF',
			theme_color: '#0059BC',
			prefer_related_applications: false,
			icons: [
				{
					src: '/assets/favicon/favicon-16x16.png',
					sizes: '16x16',
					type: 'image/png',
				},
				{
					src: '/assets/favicon/favicon-32x32.png',
					sizes: '32x32',
					type: 'image/png',
				},
				{
					src: '/assets/favicon/android-chrome-192x192.png',
					sizes: '192x192',
					type: 'image/png',
					purpose: 'any',
				},
				{
					src: '/assets/favicon/android-chrome-512x512.png',
					sizes: '512x512',
					type: 'image/png',
					purpose: 'any',
				},
				{
					src: '/assets/favicon/maskable_icon_x192.png',
					sizes: '192x192',
					type: 'image/png',
					purpose: 'maskable',
				},
			],
		},
	})

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	// Load env file based on `mode` in the current working directory.
	// Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
	const env = loadEnv(mode, process.cwd(), '')
	return {
		// vite config
		plugins: [million.vite({ auto: true }), react(), Inspect(), vitePluginPWA()],
		server: {
			open: false,
			strictPort: true,
			port: 3000, // you can replace this port with any port
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
				'~': resolve(__dirname, './'),
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
