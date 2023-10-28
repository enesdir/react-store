import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { FooterSocial } from './FooterSocial'

export const FooterBottom = () => {
	return (
		<Box
			sx={{
				my: 4,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<Link
				href='mailto:contact@nttdata.com'
				aria-label='Our E-Mail Address'
				variant='CTA2'
				color='common.white'
				sx={{ textDecoration: 'none' }}
			>
				contact@nttdata.com
			</Link>

			<Typography variant='CTA2' fontWeight={400} color='common.white'>
				+3 9876 765 444
			</Typography>
			<FooterSocial />
		</Box>
	)
}
