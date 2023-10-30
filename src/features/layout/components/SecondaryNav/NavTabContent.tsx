import type { MouseEventHandler } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'

import { secondaryNavItems } from '@/app/config/secondaryNavItems'
import { NavTabLinkContainer } from './NavTabLinkContainer'

type NavTabContentProps = {
	onClick?: MouseEventHandler<HTMLElement>
	itemsValue: number
}
export function NavTabContent({ onClick, itemsValue }: NavTabContentProps) {
	return (
		<Paper onClick={onClick} sx={{ background: '#F4F5F6', paddingY: 3, paddingX: 5, width: '100%' }}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-start',
					alignItems: 'flex-start',
					gap: '96px',
				}}
			>
				<NavTabLinkContainer itemsValue={itemsValue} />
				<img
					width={776}
					height={240}
					style={{ borderRadius: 2 }}
					src={secondaryNavItems[itemsValue].menuImage}
					alt={`${secondaryNavItems[itemsValue].title} 'Image'`}
				/>
			</Box>
		</Paper>
	)
}
