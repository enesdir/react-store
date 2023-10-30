import type { CustomLinkType } from './CustomLinkType'

export type FooterItemType = CustomLinkType & {
	items: CustomLinkType[]
}
