import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/store'
import asyncComponentLoader from '@/utils/loader'
import { fetchProducts } from '../productsSlice'
import { CardSkeleton } from './CardSkeleton'

const ProductList = asyncComponentLoader(() => import('./ProductList'))
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
