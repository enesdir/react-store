import { CssBaseline } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalMeta } from '@/components/Meta'
import { AppErrorBoundaryFallback, withErrorHandler } from '@/features/errorHandling'
import { Layout } from '@/features/layout'
import { Routings } from '@/router/Routings'

const App = () => (
	<Router>
		<CssBaseline />
		<GlobalMeta />
		<Layout>
			<Routings />
		</Layout>
	</Router>
)

export default withErrorHandler(App, AppErrorBoundaryFallback)
