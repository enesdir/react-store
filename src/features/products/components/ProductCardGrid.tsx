import type { ProductType } from '@/features/product/types/ProductType'

import { useCallback, useState } from 'react'
import EastIcon from '@mui/icons-material/East'
import { Box, Button, Grid } from '@mui/material'

import { ProductCard } from '@/features/product/components/ProductCard'

type ProductGridProps = {
	products: ProductType[]
	// isShowLiked: boolean
}

export const ProductCardGrid = ({ products }: ProductGridProps) => {
	const [itemsToShow, setItemsToShow] = useState<number>(4)
	const loadMoreItems = useCallback(() => {
		setItemsToShow(itemsToShow + 4)
	}, [itemsToShow])
	if (!products || !products.length)
		return (
			<Box
				justifyItems='center'
				gap={2}
				display={{ xs: 'none', md: 'inline-grid' }}
				sx={{ paddingTop: 2, paddingBottom: 30 }}
			>
				There are no products to display.
			</Box>
		)
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
			{itemsToShow < products.length && (
				<Button
					sx={{ width: 140, textTransform: 'initial' }}
					onClick={loadMoreItems}
					endIcon={<EastIcon />}
					variant='contained'
					disableElevation
				>
					Daha fazla
				</Button>
			)}
		</Box>
	)
}
