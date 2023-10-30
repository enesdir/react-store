import { ComponentType, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'

import { setupStore } from './app/store'
import { AppThemeProvider } from './themes/AppThemeProvider'

import './app/global.css'

const store = setupStore()
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

function render(App: ComponentType) {
	root.render(
		<StrictMode>
			<Provider store={store}>
				<HelmetProvider>
					<AppThemeProvider>
						<App />
					</AppThemeProvider>
				</HelmetProvider>
			</Provider>
		</StrictMode>
	)
}

export default render
