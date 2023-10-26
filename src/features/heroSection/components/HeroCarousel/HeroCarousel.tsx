import type { ControlProps } from 'nuka-carousel'

import Box from '@mui/material/Box'

import './HeroCarousel.css'

import { heroImages } from '@/app/config/heroImages'
import { Carousel } from '@/components/Carousel'

export const HeroCarousel = () => (
	<Box sx={{ paddingTop: 2 }}>
		<Carousel
			renderBottomCenterControls={(props: ControlProps) => (
				<ul style={{ display: 'flex', gap: 10, listStyle: 'none', padding: 0 }}>
					{props.pagingDotsIndices.map((i) => (
						<li key={i}>
							<button
								type='button'
								onClick={() => props.goToSlide(i)}
								style={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									width: 10,
									height: 10,
									color: props.currentSlide === i ? 'white' : 'black',
									background: props.currentSlide === i ? 'transparent' : 'white',
									borderRadius: '50%',
									border: '1px solid #fff',
								}}
								aria-label={`Go to slide ${i + 1}`}
								aria-selected={props.currentSlide === i}
							></button>
						</li>
					))}
				</ul>
			)}
		>
			{heroImages.map((image, index) => (
				<Box
					key={index}
					component='img'
					height='450px'
					width='100%'
					display='block'
					sx={{
						flexShrink: 0,
						overflow: 'hidden',
					}}
					src={image.imgPath}
					alt={image.label}
				/>
			))}
		</Carousel>
	</Box>
)
