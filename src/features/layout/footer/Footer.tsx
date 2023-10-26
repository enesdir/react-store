import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { Logo } from '../Logo'
import { EmailSubscribe } from './EmailSubscribe'
import { FooterBottom } from './FooterBottom'
import { FooterLinkContainer } from './FooterLinkContainer'

export default function AppFooter() {
	return (
		<Typography component='footer' sx={{ display: 'flex', bgcolor: 'primary.main' }} paddingTop={4}>
			<Box sx={{ display: 'block', width: '100%' }}>
				<Container>
					<Stack
						direction='row'
						justifyContent={{ xs: 'flex-start', md: 'space-between' }}
						alignItems='flex-start'
						spacing={4}
					>
						<Box sx={{ width: { md: '35%', xs: '80%' } }}>
							<Logo isBottom />
							<Typography variant='subtitle1' color={'white'} sx={{ display: { xs: 'none', md: 'block' } }}>
								Lorem ipsum dolor sit amet consectetur. Auctor tempor pretium aliquam neque.
							</Typography>
							<EmailSubscribe />
						</Box>
						<FooterLinkContainer />
					</Stack>
				</Container>
				<Divider />
				<Container>
					<FooterBottom />
				</Container>
			</Box>
		</Typography>
	)
}
