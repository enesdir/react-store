import type { CustomLinkType } from '@/features/layout'

import Link from '@mui/material/Link'

export function FooterLink({ title, url }: CustomLinkType) {
	return (
		<Link href={url} my={2} fontSize='20px' display={{ xs: 'none', md: 'block' }} variant='CTA2' color='common.white'>
			{title}
		</Link>
	)
}
