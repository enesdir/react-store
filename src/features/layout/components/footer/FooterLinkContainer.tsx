import type { CustomLinkType } from '@/features/layout/'

import Stack from '@mui/material/Stack'

import { footerItems } from '@/app/config/footerItems'
import { FooterLink } from './FooterLink'
import { FooterLinkHeader } from './FooterLinkHeader'

interface FooterLinksItemProps {
	elements: CustomLinkType[]
}

const FooterLinksItem = ({ elements }: FooterLinksItemProps) => {
	const footerLinks = elements.map((element, index) => (
		<FooterLink key={index} url={element.url} title={element.title} />
	))
	return <>{footerLinks}</>
}

export function FooterLinkContainer() {
	const footerLinks = footerItems.map((footerElement, index) => (
		<div key={index}>
			<FooterLinkHeader title={footerElement.title} url={footerElement.url} />
			<FooterLinksItem elements={footerElement.items} />
		</div>
	))

	return (
		<Stack
			direction={{ sm: 'column', md: 'row' }}
			spacing={{ xs: 1, sm: 2, md: 14 }}
			display={{ xs: 'none', sm: 'flex' }}
		>
			{footerLinks}
		</Stack>
	)
}
