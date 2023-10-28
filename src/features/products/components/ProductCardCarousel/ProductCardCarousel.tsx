import type { ProductType } from '@/features/product/types/ProductType'

import { useState } from 'react'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Carousel from 'react-multi-carousel'

import { carouselResponsive } from '@/app/config/carouselResponsive'
import { ProductCard } from '@/features/product/components/ProductCard'
import { LoadMoreButton } from '@/features/products/components/LoadMoreButton'
import { NoProductsMessage } from '@/features/products/components/NoProductMessage'

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

	const loadMoreItems = () => {
		setItemsToShow((prevItems) => prevItems + 4)
	}
	if (!products || !products.length) return <NoProductsMessage />
	return (
		<Box sx={{ paddingTop: 2, paddingBottom: 5 }} display={{ xs: 'block', md: 'none' }} position='relative'>
			<StyledCarousel
				arrows={false}
				autoPlay={true}
				showDots={true}
				swipeable
				renderDotsOutside
				responsive={carouselResponsive}
			>
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
				{itemsToShow < products.length && <LoadMoreButton onClick={loadMoreItems} />}
			</StyledCarousel>
		</Box>
	)
}
