import type { ControlProps, InternalCarouselProps } from 'nuka-carousel'
import type { ReactNode } from 'react'

import './Carousel.css'

import { FC, lazy, Suspense } from 'react'

const NukaCarousel = lazy(() => import('nuka-carousel'))

type CarouselProps = {
	children: ReactNode
} & Partial<InternalCarouselProps>

export const Carousel: FC<CarouselProps> = ({ children, ...props }) => {
	return (
		<Suspense fallback={<div>{Array.isArray(children) ? children[0] : children}</div>}>
			<NukaCarousel
				{...props}
				renderCenterLeftControls={() => false}
				renderCenterRightControls={() => false}
				autoplay
				wrapAround
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
				{children}
			</NukaCarousel>
		</Suspense>
	)
}
