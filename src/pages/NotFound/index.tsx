import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

import { Meta } from '@/components/Meta'
import { CenteredFlexBox } from '@/components/styled'

const NotFound = () => {
	return (
		<>
			<Meta title='Not Found' />
			<CenteredFlexBox
				className='md:flex md:items-center'
				minHeight={{ xs: '40vh', md: '60vh', lg: '70vh', flexFlow: 'column' }}
				gap={2}
			>
				<Box sx={{ justifyContent: 'center' }}>
					<img width={500} src='/assets/404 Error-rafiki.svg' alt='404' />
				</Box>

				<Box sx={{ justifyContent: 'center', alignItems: 'flex-start', paddingBottom: 10 }}>
					<Typography variant='h1'>Page not Found</Typography>
					<Link to={'/'}>Go Home</Link>
				</Box>
			</CenteredFlexBox>
		</>
	)
}

export default NotFound
