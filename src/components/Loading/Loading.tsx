import CircularProgress from '@mui/material/CircularProgress'

import { FullSizeCenteredFlexBox } from '@/components/styled'

export function Loading() {
	return (
		<FullSizeCenteredFlexBox>
			<CircularProgress />
		</FullSizeCenteredFlexBox>
	)
}
