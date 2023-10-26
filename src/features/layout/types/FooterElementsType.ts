export type FooterLinkType = {
	text: string
	to: string
}

type FooterLinksItemType = {
	elements: FooterLinkType[]
}

export type FooterHeaderType = {
	headerText: string
}

export type FooterElementType = FooterLinksItemType & FooterHeaderType

export type FooterLinksContainerType = {
	footerElements: FooterElementType[]
}
