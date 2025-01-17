import * as React from 'react'
import { Button, CssBaseline } from '@mui/material'
import { ErrorBoundary } from 'react-error-boundary'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { setupStore } from './app/store'
import { AppThemeProvider } from './themes/AppThemeProvider'

const store = setupStore()

function ErrorFallback() {
	return (
		<div role='alert'>
			<h2>Ooops, something went wrong :( </h2>
			<Button onClick={() => globalThis.location.assign(globalThis.location.origin)}>Refresh</Button>
		</div>
	)
}

type AppProviderProps = {
	children: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<Provider store={store}>
				<AppThemeProvider>
					<CssBaseline />
					<ErrorBoundary FallbackComponent={ErrorFallback}>
						<Router>{children}</Router>
					</ErrorBoundary>
				</AppThemeProvider>
			</Provider>
		</React.Suspense>
	)
}
