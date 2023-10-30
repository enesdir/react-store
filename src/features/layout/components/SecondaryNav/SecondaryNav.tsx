import Toolbar from '@mui/material/Toolbar'

import { ExtendItems } from './ExtendItems'
import { SecondaryHeaderTabs } from './SecondaryNavTabs'

export function SecondaryNav() {
	return (
		<Toolbar component='nav' variant='dense' sx={{ justifyContent: 'space-between', paddingTop: 2 }} disableGutters>
			<SecondaryHeaderTabs />
			<ExtendItems />
		</Toolbar>
	)
}
