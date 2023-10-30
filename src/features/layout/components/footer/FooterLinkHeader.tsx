import type { CustomLinkType } from '@/features/layout'

import Link from '@mui/material/Link'

export function FooterLinkHeader({ title, url }: CustomLinkType) {
	return (
		<Link variant='CTA1' sx={{ mb: 0.5 }} fontSize={{ base: 'lg', md: 'xl' }} color='common.white' href={url}>
			{title}
		</Link>
	)
}
