import { GlobalMeta } from '@/components/Meta'
import { Layout } from '@/features/layout'
import { Routings } from '@/router/Routings'

const App = () => (
	<>
		<GlobalMeta />
		<Layout>
			<Routings />
		</Layout>
	</>
)

export default App
