import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'

import { mobileNavItems } from '@/app/config/mobileNavItems'
import { ProductSearch } from '@/features/productSearch/components/ProductSearch'
import { Logo } from './Logo'
import { SecondaryNav } from './SecondaryNav/SecondaryNav'

const drawerWidth = '100%'

type NavbarProps = {
	/** Injected by the documentation to work in an iframe. You won't need it on your project. */
	window?: () => Window
}
export function Navbar(props: NavbarProps) {
	const { window } = props
	const [mobileOpen, setMobileOpen] = useState<boolean>(false)

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState)
	}

	const drawer = (
		<Box
			onClick={handleDrawerToggle}
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
			<Box component='nav'>
				<Container>
					<Toolbar
						sx={{
							justifyContent: 'space-between',
							gap: 1,
							flexDirection: { xs: 'column', sm: 'row' },
							display: 'flex',
							paddingY: '1rem',
						}}
						disableGutters
					>
						<Box width={{ xs: '100%', sm: 'unset' }} justifyContent='space-between' display='flex' alignItems='center'>
							<Logo />
							<IconButton
								color='inherit'
								aria-label='open drawer'
								edge='start'
								onClick={handleDrawerToggle}
								sx={{ display: { sm: 'none' } }}
							>
								<MenuIcon />
							</IconButton>
						</Box>
						<ProductSearch />
					</Toolbar>
				</Container>
				<Divider sx={{ borderBottom: '1px solid #89919A', display: { xs: 'none', sm: 'block' } }} />
				<Container component='nav' sx={{ display: { xs: 'none', sm: 'block' } }}>
					<SecondaryNav />
				</Container>
			</Box>
			<nav>
				<Drawer
					container={container}
					variant='temporary'
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					{drawer}
				</Drawer>
			</nav>
		</>
	)
}
