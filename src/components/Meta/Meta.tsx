import { APP_NAME, defaultMetaTags } from '@/app/config/generalSettings'

import type { MetaProps } from './types'

export function Meta({
	description = defaultMetaTags.description,
	meta = [],
	title,
	image = defaultMetaTags.image,
}: MetaProps) {
	const pageTitle = `${APP_NAME}${title ? ' | ' + title : ''}`

	const metaTags = [
		{ name: 'description', content: description },
		{ property: 'og:title', content: pageTitle },
		{ property: 'og:description', content: description },
		{ property: 'og:type', content: 'website' },
		{ property: 'og:image', content: image },
		{ name: 'twitter:card', content: 'summary' },
		{ name: 'twitter:title', content: pageTitle },
		{ name: 'twitter:description', content: description },
		...meta,
	]

	return (
		<>
			<title>{pageTitle}</title>
			{metaTags.map((tag, index) => {
				if ('name' in tag) {
					return <meta key={`meta-${index}`} name={tag.name} content={tag.content} />
				} else if ('property' in tag) {
					return <meta key={`meta-${index}`} property={tag.property} content={tag.content} />
				}
				return null
			})}
		</>
	)
}
