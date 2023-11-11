import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import { useAppSelector } from '@/app/store'

type ProductListHeaderProps = {
	toggleShowLiked: React.MouseEventHandler<HTMLButtonElement>
	isShowLiked: boolean
}
export const ProductListHeader = ({ isShowLiked, toggleShowLiked }: ProductListHeaderProps) => {
	const { likedProducts } = useAppSelector((state) => state.products)

	return (
		<Box display='flex' justifyContent='space-between' alignContent='center' paddingBottom={2}>
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
					{likedProducts.length} ÜRÜN
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
	)
}
