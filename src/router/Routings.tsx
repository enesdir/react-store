/**
 * @note
 * for hook alternative of route element composition:
 * - https://reactrouter.com/docs/en/v6/upgrading/v5#use-useroutes-instead-of-react-router-config
 * - https://reactrouter.com/docs/en/v6/examples/route-objects
 *
 * might need to take notes on:
 * - https://reactrouter.com/docs/en/v6/upgrading/v5#note-on-link-to-values
 */

import { Route, Routes } from 'react-router-dom'

import { routes } from './routes'

export const Routings = () => {
	return (
		<Routes>
			{Object.values(routes).map(({ path, component: Component }) => {
				return <Route key={path} path={path} element={<Component />} />
			})}
		</Routes>
	)
}
