import Link from '@mui/material/Link'

import type { CustomLinkType } from '@/features/layout/'

export function NavTabSubheaderLink({ title, url }: CustomLinkType) {
	return (
		<Link href={url} fontWeight={400} fontSize='14px' color='#000000'>
			{title}
		</Link>
	)
}
