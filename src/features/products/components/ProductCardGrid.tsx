import type { ProductType } from '@/features/product/types/ProductType'

import { useState } from 'react'
import { Box, Grid } from '@mui/material'

import { ProductCard } from '@/features/product/components/ProductCard'
import { LoadMoreButton } from './LoadMoreButton'

type ProductGridProps = {
	products: ProductType[]
	// isShowLiked: boolean
}

export const ProductCardGrid = ({ products }: ProductGridProps) => {
	const [itemsToShow, setItemsToShow] = useState<number>(4)
	const loadMoreItems = () => {
		setItemsToShow((prevItems) => prevItems + 4)
	}
	if (!products || !products.length)
		return (
			<Box sx={{ paddingTop: 2, paddingBottom: 5 }} display={{ xs: 'none', md: 'block' }}>
				There are no products to display.
			</Box>
		)
	return (
		<Box justifyItems='center' gap={2} display={{ xs: 'none', md: 'flex' }}>
			<Grid container spacing='1rem' direction='row' alignItems='stretch' columns={4} width='100%'>
				{products.slice(0, itemsToShow).map(({ id, description, name, imageUrl, price, shippingMethod }) => (
					<Grid key={id} item xs={1}>
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
				{itemsToShow < products.length && (
					<Grid item xs={4}>
						<LoadMoreButton onClick={loadMoreItems} />
					</Grid>
				)}
			</Grid>
		</Box>
	)
}
