import type { ProductType } from '@/features/product/types/ProductType'

import { useCallback, useState } from 'react'
import EastIcon from '@mui/icons-material/East'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'

import { ProductCard } from '@/features/product/components/ProductCard'
import { ProductCarousel } from './ProductCarousel/ProductCarousel'

type ProductGridProps = {
	products: ProductType[]
}

export const ProductCardCarousel = ({ products }: ProductGridProps) => {
	const [itemsToShow, setItemsToShow] = useState<number>(4)

	const loadMoreItems = useCallback(() => {
		setItemsToShow(itemsToShow + 4)
	}, [itemsToShow])
	if (!products || !products.length) return <div>There are no products to display.</div>
	return (
		<Box sx={{ paddingTop: 2 }}>
			<ProductCarousel>
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
			</ProductCarousel>
		</Box>
	)
}
