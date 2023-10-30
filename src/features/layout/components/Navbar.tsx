import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Toolbar from '@mui/material/Toolbar'

import { ProductSearch } from '@/features/productSearch/'
import { useBoolean } from '@/hooks/useBoolean'
import { HamburgerMenu } from './HamburgerMenu'
import { Logo } from './Logo'
import { MobileNav } from './MobileNav'
import { SecondaryNav } from './SecondaryNav/SecondaryNav'

export function Navbar() {
	const { value: isMobileOpen, toggle: handleDrawerToggle } = useBoolean(false)

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
							<HamburgerMenu handleClick={handleDrawerToggle} />
						</Box>
						<ProductSearch />
					</Toolbar>
				</Container>
				<Divider sx={{ borderBottom: '1px solid #89919A', display: { xs: 'none', sm: 'block' } }} />
				<Container component='nav' sx={{ display: { xs: 'none', sm: 'block' } }}>
					<SecondaryNav />
				</Container>
			</Box>
			<MobileNav isMobileOpen={isMobileOpen} handleToggle={handleDrawerToggle} />
		</>
	)
}
