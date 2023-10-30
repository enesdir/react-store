import type { FooterLinkType } from '@/features/layout/types/FooterElementsType'

import Stack from '@mui/material/Stack'

import { footerElements } from '@/app/config/footerLinks'
import { FooterLink } from './FooterLink'
import { FooterLinkHeader } from './FooterLinkHeader'

interface FooterLinksItemProps {
	elements: FooterLinkType[]
}

const FooterLinksItem = ({ elements }: FooterLinksItemProps) => {
	const footerLinks = elements.map((element, index) => <FooterLink key={index} to={element.to} text={element.text} />)
	return <>{footerLinks}</>
}

export function FooterLinkContainer() {
	const footerLinks = footerElements.map((footerElement, index) => (
		<div key={index}>
			<FooterLinkHeader headerText={footerElement.headerText} />
			<FooterLinksItem elements={footerElement.elements} />
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
