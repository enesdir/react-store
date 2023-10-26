/**
 * @note
 * for hook alternative of route element composition:
 * - https://reactrouter.com/docs/en/v6/upgrading/v5#use-useroutes-instead-of-react-router-config
 * - https://reactrouter.com/docs/en/v6/examples/route-objects
 *
 * might need to take notes on:
 * - https://reactrouter.com/docs/en/v6/upgrading/v5#note-on-link-to-values
 */

import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import Page404 from '@/pages/404'
import { routes } from './routes'

const Routings = () => {
	return (
		<Suspense>
			<Routes>
				{routes.map((routeProps) => (
					<Route {...routeProps} key={routeProps.path as string} />
				))}
				<Route path='*' element={<Page404 />} />
			</Routes>
		</Suspense>
	)
}

export default Routings
