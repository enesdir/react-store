import type { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from '@reduxjs/toolkit'

export type ProductSearchState = {
	term: string
	filters: {
		categories: string
	}
}

const initialState: ProductSearchState = {
	term: '',
	filters: {
		categories: '',
	},
}

const productSearchSlice = createSlice({
	name: 'productSearch',
	initialState,
	reducers: {
		updateTerm(state, action: PayloadAction<string>) {
			return { ...state, term: action.payload }
		},
		updateFilters(state, action: PayloadAction<ProductSearchState['filters']>) {
			const update = { ...state.filters, ...action.payload }
			return { ...state, filters: update }
		},
	},
})

export const { updateTerm, updateFilters } = productSearchSlice.actions
export default productSearchSlice.reducer
