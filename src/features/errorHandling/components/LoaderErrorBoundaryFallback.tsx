import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { appErrorMessages } from '@/app/config/generalSettings'

function LoaderErrorBoundaryFallback() {
	return (
		<Box>
			<Typography variant='h5'>{appErrorMessages.loader.fail}</Typography>
		</Box>
	)
}

export default LoaderErrorBoundaryFallback
