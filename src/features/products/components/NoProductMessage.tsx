import { Box } from '@mui/material'

export const NoProductsMessage = () => {
	return (
		<Box sx={{ paddingTop: 2, paddingBottom: 5 }} display={{ xs: 'block', md: 'none' }}>
			There are no products to display.
		</Box>
	)
}
