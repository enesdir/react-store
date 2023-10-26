import type { ProductType } from '@/features/product/types/ProductType'

import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import IconButton from '@mui/material/IconButton'

import { useAppDispatch, useAppSelector } from '@/app/store'
import { toggleLiked } from '@/features/products/productsSlice'

type CardLikeProps = {
	id: ProductType['id']
}
export const CardLike = ({ id }: CardLikeProps) => {
	const dispatch = useAppDispatch()
	const { likedProducts } = useAppSelector((state) => state.products)

	function handleToggleLiked(productId: number) {
		dispatch(toggleLiked(productId))
	}
	function renderLikedIcon() {
		if (likedProducts.includes(id)) {
			return (
				<FavoriteIcon
					sx={{
						width: '1rem',
						height: '1rem',
						color: '#f41d1d',
					}}
				/>
			)
		}

		return (
			<FavoriteBorder
				sx={{
					width: '1rem',
					height: '1rem',
					color: '#D1D1D1',
				}}
			/>
		)
	}
	return (
		<IconButton
			sx={{
				width: '1.5rem',
				height: '1.5rem',
				borderRadius: '2rem',
				backgroundColor: 'white',
				':hover': {
					backgroundColor: 'white',
					opacity: 0.75,
				},
			}}
			aria-label='add to favorites'
			onClick={(event) => {
				event.stopPropagation()
				event.preventDefault()
				handleToggleLiked(id)
			}}
		>
			{renderLikedIcon()}
		</IconButton>
	)
}
