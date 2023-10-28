import { FC } from 'react'
import { PathRouteProps } from 'react-router-dom'

export enum Pages {
	Home,
	TemplateTest,
	NotFound,
}

export type PathRouteCustomProps = {
	title?: string
	component: FC
}

export type Routes = Record<Pages, PathRouteProps & PathRouteCustomProps>
