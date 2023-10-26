import Box from '@mui/material/Box'

import { Carousel } from './Carousel/Carousel'

export const IMAGE_WIDHT = 1024
export const IMAGE_HEIGHT = 768

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
	<Box
		sx={{ paddingTop: 2 }}
		// flex='1 1 0'
		// sx={{
		// 	img: { m: '0 auto', width: IMAGE_WIDHT, objectFit: 'cover', aspectRatio: `${IMAGE_WIDHT} / ${IMAGE_HEIGHT}` },
		// }}
	>
		<Carousel>
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
		</Carousel>
	</Box>
)
