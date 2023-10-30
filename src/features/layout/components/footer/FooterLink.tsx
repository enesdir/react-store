import type { FooterLinkType } from '@/features/layout/types/FooterElementsType'

import Link from '@mui/material/Link'

export function FooterLink({ text, to }: FooterLinkType) {
	return (
		<Link href={to} my={2} fontSize='20px' display={{ xs: 'none', md: 'block' }} variant='CTA2' color='common.white'>
			{text}
		</Link>
	)
}
