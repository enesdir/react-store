import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/store'
import { useBoolean } from '@/hooks/useBoolean'
import asyncComponentLoader from '@/utils/loader'
import { fetchProducts } from '../productsSlice'
import { CardSkeleton } from './CardSkeleton'
import { ProductListHeader } from './ProductListHeader'

const ProductList = asyncComponentLoader(() => import('./ProductList'))
export function ProductsSection() {
	const dispatch = useAppDispatch()
	const { data, isLoading, error, likedProducts } = useAppSelector((state) => state.products)
	const { value: isShowLiked, toggle: toggleShowLiked } = useBoolean(false)
	const filteredItem = data.filter((product) => likedProducts.includes(product.id))
	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	if (isLoading) {
		return <CardSkeleton />
	}

	if (error) {
		return <div>Error: {error}</div>
	}

	if (data.length === 0) {
		return <div>There are no products to display.</div>
	}

	return (
		<>
			<ProductListHeader isShowLiked={isShowLiked} toggleShowLiked={toggleShowLiked} />
			<ProductList products={isShowLiked ? filteredItem : data} />
		</>
	)
}
