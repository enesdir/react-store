import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export const TruncatedTypography = styled(Typography)(() => ({
	display: '-webkit-box',
	overflow: 'hidden',
	WebkitBoxOrient: 'vertical',
	WebkitLineClamp: 2,
	margin: '0.25rem 0.5rem',
	textOverflow: 'ellipsis',
}))
