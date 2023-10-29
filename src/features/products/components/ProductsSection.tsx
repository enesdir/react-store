import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/store'
import { fetchProducts } from '../productsSlice'
import { CardSkeleton } from './CardSkeleton'
import { ProductList } from './ProductList'

export function ProductsSection() {
	const dispatch = useAppDispatch()
	const { data, isLoading, error } = useAppSelector((state) => state.products)

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

	return <ProductList />
}
