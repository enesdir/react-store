import { useAppDispatch, useAppSelector } from '@/app/store'
import { SearchWithFilters } from '@/features/productSearch/components/SearchWithFilters'
import { productSearchFilters } from '@/features/productSearch/constants/productSearchFilters'
import { updateFilters, updateTerm } from '@/features/productSearch/productSearchSlice'

export function ProductSearch() {
	const dispatch = useAppDispatch()
	const searchValue = useAppSelector((state) => state.productSearch.term)
	const filtersValues = useAppSelector((state) => state.productSearch.filters)

	const handleFilters = (filterObj: { [x: string]: string }) => {
		// @ts-expect-error: if you update filters please make sure update to date initial state
		dispatch(updateFilters(filterObj))
	}

	const handleSearchValue = (value: string) => {
		dispatch(updateTerm(value))
	}

	const handleSearchSubmit = () => {
		console.log(`You Search: ${searchValue} with filter: ${filtersValues}`)
	}

	return (
		<>
			<SearchWithFilters
				filters={productSearchFilters}
				filtersValues={filtersValues}
				handleFilters={handleFilters}
				searchValue={searchValue}
				handleSearchValue={handleSearchValue}
				handleSearchSubmit={handleSearchSubmit}
			/>
		</>
	)
}
