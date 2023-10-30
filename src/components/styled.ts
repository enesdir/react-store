import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

export const FlexBox = styled(Box)({
	display: 'flex',
})

export const CenteredFlexBox = styled(FlexBox)({
	justifyContent: 'center',
	alignItems: 'center',
})

export const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
	width: '100%',
	height: '100%',
})

export const SpacedFlexBox = styled(FlexBox)({
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '100%',
})
