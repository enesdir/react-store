import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import { mobileNavItems } from '@/app/config/mobileNavItems'

type NavbarProps = {
	/** Injected by the documentation to work in an iframe. You won't need it on your project. */
	window?: () => Window
	handleToggle: () => void
	isMobileOpen: boolean
}
export function MobileNav({ window, handleToggle, isMobileOpen }: NavbarProps) {
	const drawer = (
		<Box
			onClick={handleToggle}
			sx={{
				textAlign: 'center',
				top: 0,
				left: 0,
				right: 0,
				zIndex: 9999,
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
			}}
		>
			<List sx={{ paddingTop: 20 }}>
				{mobileNavItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton sx={{ textAlign: 'start' }}>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)

	const container = window !== undefined ? () => window().document.body : undefined

	return (
		<>
			<nav>
				<Drawer
					container={container}
					variant='temporary'
					open={isMobileOpen}
					onClose={handleToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: '100%' },
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</>
	)
}
