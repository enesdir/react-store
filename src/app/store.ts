import type { PreloadedState } from '@reduxjs/toolkit'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { productsReducer } from '@/features/products/productsSlice'
import productSearchSlice from '@/features/productSearch/productSearchSlice'
import userReducer from '@/features/user/userSlice'

const rootReducer = combineReducers({
	products: productsReducer,
	user: userReducer,
	productSearch: productSearchSlice,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
	})
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
