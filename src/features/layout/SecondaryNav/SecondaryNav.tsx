import type { Theme } from '@mui/material'

import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery'

import { ExtendItems } from './ExtendItems'
import { SecondaryHeaderTabs } from './SecondaryNavTabs'

export function SecondaryNav() {
	const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
	// const filteredList = isSmallScreen ? secondaryHeaderItems.slice(0, 6) : secondaryHeaderItems

	return (
		<Toolbar component='nav' variant='dense' sx={{ justifyContent: 'space-between' }} disableGutters>
			{!isSmallScreen && <SecondaryHeaderTabs />}
			{isSmallScreen && <ExtendItems />}
		</Toolbar>
	)
}
