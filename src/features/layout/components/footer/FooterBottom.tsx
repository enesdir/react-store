import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import { FooterSocial } from './FooterSocial'

export const FooterBottom = () => {
	return (
		<Box
			sx={{
				py: 2,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
			<Link
				href='mailto:contact@nttdata.com'
				aria-label='Our E-Mail Address'
				fontSize={{ xs: '12px', sm: '20px' }}
				color='common.white'
				sx={{ textDecoration: 'none' }}
			>
				contact@nttdata.com
			</Link>
			<Typography fontWeight={400} color='common.white' fontSize={{ xs: '12px', sm: '20px' }}>
				+3 9876 765 444
			</Typography>
			<FooterSocial />
		</Box>
	)
}
