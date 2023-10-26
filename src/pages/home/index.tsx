import Container from '@mui/material/Container'

import { HomeCarousel } from '@/features/heroSection/components/HomeCarousel'
import { ProductsSection } from '@/features/products/components/ProductsSection'

const Home = () => {
	return (
		<>
			<HomeCarousel />
			<Container sx={{ paddingY: 10 }}>
				<ProductsSection />
			</Container>
			{/* <ProductCardGrid products={testData} /> */}
		</>
	)
}

export default Home
