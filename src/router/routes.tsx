import asyncComponentLoader from '@/utils/loader'
import { Pages, Routes } from './types'

export const routes: Routes = {
	[Pages.Home]: {
		component: asyncComponentLoader(() => import('@/pages/Home')),
		path: '/',
		title: 'Home',
	},
	[Pages.TemplateTest]: {
		component: asyncComponentLoader(() => import('@/pages/TemplateTest')),
		path: '/templatetest',
		title: 'Template Test',
	},

	[Pages.NotFound]: {
		component: asyncComponentLoader(() => import('@/pages/NotFound')),
		path: '*',
	},
}
