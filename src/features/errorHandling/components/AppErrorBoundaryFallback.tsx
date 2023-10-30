import RestartIcon from '@mui/icons-material/RestartAlt'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

import { appErrorMessages } from '@/app/config/generalSettings'
import { FullSizeCenteredFlexBox } from '@/components/styled'
import resetApp from '@/utils/resetApp'

export function AppErrorBoundaryFallback() {
	return (
		<Box height={400}>
			<FullSizeCenteredFlexBox>
				<Paper sx={{ p: 5 }}>
					<Typography variant='h5' component='h3'>
						{appErrorMessages.app.crash.title}
					</Typography>
					<Button startIcon={<RestartIcon />} sx={{ mt: 3 }} variant='outlined' onClick={resetApp}>
						{appErrorMessages.app.crash.options.reset}
					</Button>
				</Paper>
			</FullSizeCenteredFlexBox>
		</Box>
	)
}
