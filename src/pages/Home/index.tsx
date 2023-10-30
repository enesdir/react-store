import Container from '@mui/material/Container'

import { Meta } from '@/components/Meta'
import { HeroCarousel } from '@/features/heroSection/components/HeroCarousel/HeroCarousel'
import { ProductsSection } from '@/features/products/components/ProductsSection'

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
