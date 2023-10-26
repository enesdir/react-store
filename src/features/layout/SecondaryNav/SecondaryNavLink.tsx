import type { FooterLinkType } from '@/features/layout/types/FooterElementsType'

import Link from '@mui/material/Link'

export function SecondaryNavLink({ text, to }: FooterLinkType) {
	return (
		<Link href={to} my={1.5} variant='Body1' display='block' color='#000000'>
			{text}
		</Link>
	)
}
