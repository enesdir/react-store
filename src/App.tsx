import { CssBaseline } from '@mui/material'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from '@/features/layout'
import Routings from '@/router/Routings'

const App = () => (
	<Router>
		<CssBaseline />
		<Layout>
			<Routings />
		</Layout>
	</Router>
)

export default App
