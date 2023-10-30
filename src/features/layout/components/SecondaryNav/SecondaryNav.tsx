import Toolbar from '@mui/material/Toolbar'

import { ExtendItems } from './ExtendItems'
import { SecondaryNavTabs } from './SecondaryNavTabs'

export function SecondaryNav() {
	return (
		<Toolbar component='nav' variant='dense' sx={{ justifyContent: 'space-between', paddingTop: 2 }} disableGutters>
			<SecondaryNavTabs />
			<ExtendItems />
		</Toolbar>
	)
}
