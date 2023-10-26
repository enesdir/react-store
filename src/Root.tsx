import { ComponentType, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { setupStore } from './app/store'
import { AppThemeProvider } from './themes/AppThemeProvider'

const store = setupStore()
const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

function render(App: ComponentType) {
	root.render(
		<StrictMode>
			<Provider store={store}>
				<AppThemeProvider>
					<App />
				</AppThemeProvider>
			</Provider>
		</StrictMode>
	)
}

export default render
