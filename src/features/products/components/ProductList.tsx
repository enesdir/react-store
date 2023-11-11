import type { ProductType } from '@/features/product/'
import type { Theme } from '@mui/material'

import useMediaQuery from '@mui/material/useMediaQuery'

import { ProductCardCarousel } from './ProductCardCarousel/ProductCardCarousel'
import { ProductCardGrid } from './ProductCardGrid'

type ProductListProps = {
	products: ProductType[]
}
const ProductList = ({ products }: ProductListProps) => {
	const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
	if (isMobile) {
		return <ProductCardCarousel products={products} />
	}
	return (
		<>
			<ProductCardGrid products={products} />
		</>
	)
}
export default ProductList
