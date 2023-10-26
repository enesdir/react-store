import { ProductType } from '@/features/product/types/ProductType'

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getApi } from '@/utils/getApi'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	// Make the API request here and return the response
	const response = await getApi()
	return response
})

type ProductsState = {
	isLoading: boolean
	error: string | null | undefined
	data: ProductType[]
	likedProducts: number[]
}

const initialState: ProductsState = {
	isLoading: false,
	error: null,
	data: [],
	likedProducts: [],
}
const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		toggleLiked: (state, action) => {
			const productId = action.payload

			// Check if productId is in likedProducts array
			if (state.likedProducts.includes(productId)) {
				state.likedProducts = state.likedProducts.filter((id) => id !== productId)
			} else {
				state.likedProducts.push(productId)
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.isLoading = true
				state.error = null
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.isLoading = false
				// Add user to the state array
				state.data = action.payload
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error.message
			})
	},
})

export const { toggleLiked } = productsSlice.actions
export const productsReducer = productsSlice.reducer
