import type { ProductType } from '@/features/product/types/ProductType'

import { Card, CardActions, CardContent, CardMedia, Link, styled, Typography } from '@mui/material'

import { formatToTry } from '@/features/product/utils/formatToTRY'
import { CardLike } from './CardLike'

const StyledCard = styled(Card)(({ theme }) => ({
	'&.MuiCard-root': {
		overflow: 'hidden',
		border: '1px solid #E6E6E6',
		borderRadius: '0.25rem',
		padding: '0.625rem',
		display: 'flex',
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
const TruncatedTypography = styled(Typography)(() => ({
	display: '-webkit-box',
	overflow: 'hidden',
	WebkitBoxOrient: 'vertical',
	WebkitLineClamp: 2,
	margin: '0.25rem 0.5rem',
	textOverflow: 'ellipsis',
}))

export const ProductCard = ({ id, name, price, imageUrl, description, shippingMethod }: ProductType) => {
	const MAX_DESCRIPTION_LENGTH = 65

	const truncatedText =
		description.length > MAX_DESCRIPTION_LENGTH ? description.slice(0, MAX_DESCRIPTION_LENGTH) + '...' : description
	// TODO: find better solution now just ignored validate <a> nesting error
	const handleExternalLinkClick = (url: string) => {
		window.open(url, '_blank')
	}

	return (
		<StyledCard
			elevation={0}
			onClick={(e) => {
				e.preventDefault() // Prevent the default anchor behavior
				handleExternalLinkClick('https://google.com')
			}}
		>
			<CardMedia component='img' image={imageUrl} alt={name} />
			<CardActions
				sx={{
					position: 'absolute',
					right: '0.75rem',
					top: '0.75rem',
					zIndex: 2,
				}}
			>
				<CardLike id={id} />
			</CardActions>
			<CardContent>
				<Typography variant='h3' sx={{ padding: '0.25rem 0.5rem' }} color='text.primary'>
					{name}
				</Typography>
				<Typography
					sx={{
						backgroundColor: '#e7edf7',
						padding: '0.25rem 0.5rem',
					}}
					fontWeight={700}
				>
					{formatToTry(price)}
				</Typography>

				<TruncatedTypography paragraph variant='Body3'>
					{truncatedText}{' '}
					{description.length > MAX_DESCRIPTION_LENGTH && (
						<Link href='https://google.com' target='_blank'>
							Devamini gor
						</Link>
					)}
				</TruncatedTypography>
				<Typography variant='body4' color='text.secondary' sx={{ padding: '0.25rem 0.5rem' }}>
					{shippingMethod}
				</Typography>
			</CardContent>
		</StyledCard>
	)
}
