import Container from '@mui/material/Container'

import { Meta } from '@/components/Meta'
import { ProductsSection } from '@/features/products/'
import asyncComponentLoader from '@/utils/loader'

const HeroCarousel = asyncComponentLoader(() => import('@/features/heroSection/'))
const Home = () => {
	return (
		<>
			<Meta title='Home' />
			<HeroCarousel />
			<Container sx={{ paddingY: 10, minHeight: 480 }}>
				<ProductsSection />
			</Container>
		</>
	)
}

export default Home
