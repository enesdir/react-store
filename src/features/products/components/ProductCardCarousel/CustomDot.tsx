/* eslint-disable @typescript-eslint/no-unused-vars */
import type { DotProps } from 'react-multi-carousel'

import './CustomDot.css'

/* @ts-expect-error: future use */
export const CustomDot = ({ onClick, active, index, carouselState }: DotProps) => {
	return (
		<li style={{ listStyle: 'none' }}>
			<button
				style={{
					background: active ? '#0059BC' : 'grey',
				}}
				className='product-carousel-custom-dot'
				/* @ts-expect-error: todo */
				onClick={() => onClick()}
			/>
		</li>
	)
}
