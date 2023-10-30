import Box from '@mui/material/Box'

import { secondaryNavItems } from '@/app/config/secondaryNavItems'
import { NavTabHeaderLink } from './NavTabHeaderLink'
import { NavTabSubheaders } from './NavTabSubheaders'

type NavTabLinkContainerProps = {
	itemsValue: number
}
export function NavTabLinkContainer({ itemsValue }: NavTabLinkContainerProps) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
				gap: '96px',
			}}
		>
			{secondaryNavItems[itemsValue].items.map((item, index) => (
				<Box key={index} sx={{ display: 'inline-flex', flexDirection: 'column', gap: '12px' }}>
					<NavTabHeaderLink title={item.title} url={item.url} />
					<NavTabSubheaders items={item.items} />
				</Box>
			))}
		</Box>
	)
}
