import type { Theme } from '@mui/material'

import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

import { useAppSelector } from '@/app/store'
import { useBoolean } from '@/hooks/useBoolean'
import { ProductCardCarousel } from './ProductCardCarousel'
import { ProductCardGrid } from './ProductCardGrid'

export function ProductList() {
	const { data, likedProducts } = useAppSelector((state) => state.products)
	const { value: isShowLiked, toggle: toggleShowLiked } = useBoolean(false)
	const filteredItem = data.filter((product) => likedProducts.includes(product.id))
	const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
	return (
		<>
			<Box display='flex' justifyContent='space-between' alignContent='center' paddingY={2}>
				<Typography alignItems='center' fontSize={{ xs: '16px', sm: '24px', md: '32px' }} fontWeight='500'>
					Content title goes here
				</Typography>
				<Stack direction='row' justifyContent='flex-end' alignItems='center' spacing={{ xs: 0.5, md: 2 }}>
					<FavoriteBorder
						sx={{
							width: '24px',
							height: '24px',
							color: '#000',
						}}
					/>
					<Typography alignItems='center' fontSize={{ xs: '16px', sm: '24px', md: '32px' }} fontWeight='500'>
						{likedProducts.length} ÜRUN
					</Typography>
					<Button
						variant={isShowLiked ? 'outlined' : 'contained'}
						onClick={toggleShowLiked}
						sx={{
							textTransform: 'initial',
							paddingY: { xs: '0.1em', md: '4px' },
							paddingX: { xs: '0.1em', md: '8px' },
							fontSize: { xs: '16', md: 'unset' },
							fontWeight: '500',
						}}
					>
						{isShowLiked ? 'Tüm Ürünler' : 'Beğenilenler'}
					</Button>
				</Stack>
			</Box>

			{isShowLiked ? (
				isSmallScreen ? (
					<ProductCardCarousel products={filteredItem} />
				) : (
					<ProductCardGrid products={filteredItem} />
				)
			) : isSmallScreen ? (
				<ProductCardCarousel products={data} />
			) : (
				<ProductCardGrid products={data} />
			)}
		</>
	)
}
