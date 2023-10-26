import type { PathRouteProps } from 'react-router-dom'

import React from 'react'

import TemplateTest from '@/pages/templatetest/'

const Home = React.lazy(() => import('@/pages/home'))

export const routes: Array<PathRouteProps> = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/templatetest',
		element: <TemplateTest />,
	},
]

export const privateRoutes: Array<PathRouteProps> = []
