import type { CustomLinkType } from './CustomLinkType'

export type ItemType = CustomLinkType & {
	items: CustomLinkType[]
}

export type SecondaryNavItemType = CustomLinkType & {
	items: ItemType[]
	menuImage: string
}
