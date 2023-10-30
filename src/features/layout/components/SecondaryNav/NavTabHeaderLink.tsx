import type { CustomLinkType } from '@/features/layout/'

import Link from '@mui/material/Link'

export function NavTabHeaderLink({ title, url }: CustomLinkType) {
	return (
		<Link href={url} fontWeight='bold' fontSize='14px' color='#000000'>
			{title}
		</Link>
	)
}
