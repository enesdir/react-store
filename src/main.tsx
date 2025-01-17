import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './app/global.css'

import App from './App'
import { AppProvider } from './AppProvider'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
	<StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</StrictMode>
)
