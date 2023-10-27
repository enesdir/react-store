import type { ProductType } from '@/features/product/types/ProductType'

import { useCallback, useState } from 'react'
import EastIcon from '@mui/icons-material/East'
import { Button, styled } from '@mui/material'
import Box from '@mui/material/Box'
import Carousel from 'react-multi-carousel'

import { carouselResponsive } from '@/app/config/carouselResponsive'
import { ProductCard } from '@/features/product/components/ProductCard'

type ProductGridProps = {
	products: ProductType[]
}

const StyledCarousel = styled(Carousel)(({ theme }) => ({
	'.product-card-carousel-dot-list': {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		height: 100,
		backgroundColor: 'red',
	},
	'.react-multi-carousel-dot button': {
		border: 'none',
		backgroundColor: 'grey',
	},
	'.react-multi-carousel-dot--active button': {
		borderColor: theme.palette.primary.main,
		backgroundColor: theme.palette.primary.main,
	},
}))
export const ProductCardCarousel = ({ products }: ProductGridProps) => {
	const [itemsToShow, setItemsToShow] = useState<number>(4)

	const loadMoreItems = useCallback(() => {
		setItemsToShow(itemsToShow + 4)
	}, [itemsToShow])
	if (!products || !products.length)
		return (
			<Box sx={{ paddingTop: 2, paddingBottom: 5 }} display={{ xs: 'block', md: 'none' }}>
				There are no products to display.
			</Box>
		)
	return (
		<Box sx={{ paddingTop: 2, paddingBottom: 5 }} display={{ xs: 'block', md: 'none' }} position='relative'>
			<StyledCarousel arrows={false} autoPlay showDots swipeable renderDotsOutside responsive={carouselResponsive}>
				{products.slice(0, itemsToShow).map(({ id, description, name, imageUrl, price, shippingMethod }) => (
					<ProductCard
						key={id}
						id={id}
						name={name}
						description={description}
						imageUrl={imageUrl}
						price={price}
						shippingMethod={shippingMethod}
					/>
				))}
				{itemsToShow < products.length && (
					<Box display='flex' justifyContent='center' alignItems='center'>
						<Button
							sx={{ width: 140, textTransform: 'initial' }}
							onClick={loadMoreItems}
							endIcon={<EastIcon />}
							variant='contained'
							disableElevation
						>
							Daha fazla
						</Button>
					</Box>
				)}
			</StyledCarousel>
		</Box>
	)
}
