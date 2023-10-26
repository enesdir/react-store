import Container from '@mui/material/Container'

import { ProductsSection } from '@/features/products/components/ProductsSection'
import { HomeCarousel } from '../../components/HomeCarousel'

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
