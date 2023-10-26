import Box from '@mui/material/Box'

import { HeroCarousel } from './HeroCarousel/HeroCarousel'

const images = [
	{
		label: 'coding',
		imgPath: '/assets/carousel/Rectangle25.png',
	},
	{
		label: 'Board',
		imgPath: '/assets/carousel/Rectangle25-2.png',
	},
	{
		label: '3D',
		imgPath: '/assets/carousel/Rectangle25-3.png',
	},
	{
		label: 'World',
		imgPath: '/assets/carousel/Rectangle25-4.png',
	},
]
export const HomeCarousel = () => (
	<Box sx={{ paddingTop: 2 }}>
		<HeroCarousel>
			{images.map((image, index) => (
				<Box
					key={index}
					component='img'
					sx={{
						display: 'block',

						overflow: 'hidden',
						width: '100%',
					}}
					src={image.imgPath}
					alt={image.label}
				/>
			))}
		</HeroCarousel>
	</Box>
)
