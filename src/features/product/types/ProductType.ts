export type ProductType = {
	id: number
	name: string
	price: string
	imageUrl: string
	description: string
	shippingMethod: string
}
export type ProductWithLikeType = ProductType & {
	liked?: boolean
}
