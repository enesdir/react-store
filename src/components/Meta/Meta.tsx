import { Helmet } from 'react-helmet-async'

import { APP_NAME, defaultMetaTags } from '@/app/config/generalSettings'

import type { MetaProps } from './types'

export function Meta({
	description = defaultMetaTags.description,
	meta = [],
	title,
	image = defaultMetaTags.image,
}: MetaProps) {
	const pageTitle = `${APP_NAME}${title ? ' | ' + title : ''}`

	return (
		<Helmet
			title={pageTitle}
			meta={[
				{
					name: 'description',
					content: description,
				},
				{
					property: 'og:title',
					content: pageTitle,
				},
				{
					property: 'og:description',
					content: description,
				},
				{
					property: 'og:type',
					content: 'website',
				},
				{
					property: 'og:image',
					content: image,
				},
				{
					name: 'twitter:card',
					content: 'summary',
				},
				{
					name: 'twitter:title',
					content: pageTitle,
				},
				{
					name: 'twitter:description',
					content: description,
				},
			].concat(meta)}
		/>
	)
}
