import type { ProductType } from '@/features/product/types/ProductType'

import { useState } from 'react'
import { Box, Grid } from '@mui/material'

import { ProductCard } from '@/features/product/components/ProductCard'
import { LoadMoreButton } from './LoadMoreButton'
import { NoProductsMessage } from './NoProductMessage'

type ProductGridProps = {
	products: ProductType[]
	// isShowLiked: boolean
}

export const ProductCardGrid = ({ products }: ProductGridProps) => {
	const [itemsToShow, setItemsToShow] = useState<number>(4)
	const loadMoreItems = () => {
		setItemsToShow((prevItems) => prevItems + 4)
	}
	if (!products || !products.length) return <NoProductsMessage />
	return (
		<Box justifyItems='center' gap={2} display={{ xs: 'none', md: 'inline-grid' }}>
			<Grid container spacing='1rem' direction='row' alignItems='stretch'>
				{products.slice(0, itemsToShow).map(({ id, description, name, imageUrl, price, shippingMethod }) => (
					<Grid key={id} item xs={12} md={3}>
						<ProductCard
							id={id}
							name={name}
							description={description}
							imageUrl={imageUrl}
							price={price}
							shippingMethod={shippingMethod}
						/>
					</Grid>
				))}
			</Grid>
			{itemsToShow < products.length && <LoadMoreButton onClick={loadMoreItems} />}
		</Box>
	)
}
