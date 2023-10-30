import type { ProductType } from '@/features/product/'

import { useState } from 'react'
import Box from '@mui/material/Box'

import { ProductCard } from '@/features/product/'
import { LoadMoreButton } from './LoadMoreButton'

type ProductGridProps = {
	products: ProductType[]
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
			<Box display='grid' gridTemplateColumns='repeat(16, 1fr)' gap={2} width='100%' justifyContent='space-between'>
				{products.slice(0, itemsToShow).map(({ id, description, name, imageUrl, price, shippingMethod }) => (
					<Box key={id} gridColumn='span 4'>
						<ProductCard
							id={id}
							name={name}
							description={description}
							imageUrl={imageUrl}
							price={price}
							shippingMethod={shippingMethod}
						/>
					</Box>
				))}
				{itemsToShow < products.length && (
					<Box gridColumn='span 16'>
						<LoadMoreButton onClick={loadMoreItems} />
					</Box>
				)}
			</Box>
		</Box>
	)
}
