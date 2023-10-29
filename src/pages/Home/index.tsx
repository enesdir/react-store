import Container from '@mui/material/Container'

import { HeroCarousel } from '@/features/heroSection/components/HeroCarousel/HeroCarousel'
import { ProductsSection } from '@/features/products/components/ProductsSection'

const Home = () => {
	return (
		<>
			<HeroCarousel />
			<Container sx={{ paddingY: 10, minHeight: 480 }}>
				<ProductsSection />
			</Container>
			{/* <ProductCardGrid products={testData} /> */}
		</>
	)
}

export default Home
