import { CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material'

import { formatToTry } from '@/features/product/utils/formatToTRY'
import { CardLike } from './CardLike'
import { StyledCard } from './StyledCard'
import { TruncatedTypography } from './TruncatedTypography'

import type { ProductType } from '@/features/product/types/ProductType'

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
			<CardMedia component='img' image={imageUrl} alt={name} loading='lazy' />
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
