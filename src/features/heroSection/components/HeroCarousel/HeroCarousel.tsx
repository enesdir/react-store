import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Carousel from 'react-multi-carousel'

import { carouselResponsive } from '@/app/config/carouselResponsive'
import { heroImages } from '@/app/config/heroImages'

const StyledCarousel = styled(Carousel)(() => ({
	'.react-multi-carousel-dot-list': {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		height: '3em',
		width: '100%',
		justifyContent: 'right',
		alignItems: 'center',
		paddingRight: '2em',
	},
	'.react-multi-carousel-dot button': {
		backgroundColor: '#fff',
		border: '1px solid #fff',
	},
	'.react-multi-carousel-dot--active button': {
		backgroundColor: 'transparent',
	},
}))

export function HeroCarousel() {
	return (
		<StyledCarousel arrows={false} autoPlay showDots swipeable responsive={carouselResponsive}>
			{heroImages.map((image, index) => (
				<Box
					key={index}
					component='img'
					height='450px'
					width='100%'
					display='block'
					margin='auto'
					src={image.imgPath}
					alt={image.label}
					loading='lazy'
				/>
			))}
		</StyledCarousel>
	)
}
