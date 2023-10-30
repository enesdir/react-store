import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'

export const StyledCard = styled(Card)(({ theme }) => ({
	'&.MuiCard-root': {
		overflow: 'hidden',
		border: '1px solid #E6E6E6',
		borderRadius: '0.25rem',
		padding: '0.625rem',
		display: 'flex',
		minHeight: '370px',
		flexDirection: 'column',
		position: 'relative',
		gap: '0.25rem',
		'&:hover .MuiCardMedia-root': {
			transform: 'scale3d(1.05, 1.02, 1)',
		},
	},
	'& .MuiCardMedia-root': {
		transition: 'transform 300ms ease-in-out',
		height: '208px',
		[theme.breakpoints.up('md')]: {
			height: '111px',
		},
		[theme.breakpoints.up('lg')]: {
			height: '179px',
		},
	},
	'& .MuiCardContent-root': {
		padding: 0,
		display: 'flex',
		flexDirection: 'column',
		gap: '0.25rem',
		':last-child': {
			paddingBottom: 0,
		},
	},
}))
