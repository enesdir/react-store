import type { ProductType } from '@/features/product/types/ProductType'

import { useState } from 'react'
import Box from '@mui/material/Box'
import Carousel from 'react-multi-carousel'

import { carouselResponsive } from '@/app/config/carouselResponsive'
import { ProductCard } from '@/features/product/components/ProductCard'
import { LoadMoreButton } from '@/features/products/components/LoadMoreButton'
import { CustomDot } from './CustomDot'

import './ProductCardCarousel.css'

type ProductGridProps = {
	products: ProductType[]
}

export const ProductCardCarousel = ({ products }: ProductGridProps) => {
	const [itemsToShow, setItemsToShow] = useState<number>(4)

	const loadMoreItems = () => {
		setItemsToShow((prevItems) => prevItems + 4)
	}
	if (!products || !products.length)
		return (
			<Box sx={{ paddingTop: 2, paddingBottom: 5 }} display={{ xs: 'block', md: 'none' }}>
				There are no products to display.
			</Box>
		)
	return (
		<Box display={{ xs: 'block', md: 'none' }}>
			<Box sx={{ paddingTop: 2, paddingBottom: 5 }} position='relative'>
				<Carousel
					arrows={false}
					autoPlay={true}
					showDots={true}
					swipeable
					renderDotsOutside
					dotListClass='custom-dot-list'
					customDot={<CustomDot />}
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
				</Carousel>
			</Box>
			{itemsToShow < products.length && <LoadMoreButton onClick={loadMoreItems} />}
		</Box>
	)
}
