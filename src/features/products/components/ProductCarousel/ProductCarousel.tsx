import type { InternalCarouselProps } from 'nuka-carousel'
import type { ReactNode } from 'react'

import { FC, lazy, Suspense } from 'react'

const NukaCarousel = lazy(() => import('nuka-carousel'))

type CarouselProps = {
	children: ReactNode
} & Partial<InternalCarouselProps>

export const ProductCarousel: FC<CarouselProps> = ({ children, ...props }) => {
	return (
		<Suspense fallback={<div>{Array.isArray(children) ? children[0] : children}</div>}>
			<NukaCarousel
				{...props}
				renderCenterLeftControls={() => false}
				renderCenterRightControls={() => false}
				autoplay
				wrapAround
			>
				{children}
			</NukaCarousel>
		</Suspense>
	)
}
