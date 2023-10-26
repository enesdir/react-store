export type SecondaryHeaderItemsType = {
	title: string
	url: string
	items: {
		title: string
		url: string
		items: {
			title: string
			url: string
		}[]
	}[]
	menuImage: string
}
