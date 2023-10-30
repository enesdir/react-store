import { SecondaryNavItemType } from '@/features/layout/'
import { NavTabSubheaderLink } from './NavTabSubheaderLink'

type NavTabSubheadersProps = {
	items: SecondaryNavItemType['items'][number]['items']
}

export const NavTabSubheaders = ({ items }: NavTabSubheadersProps) => {
	const subheaderLinks = items.map((element, index) => (
		<NavTabSubheaderLink key={index} url={element.url} title={element.title} />
	))
	return <>{subheaderLinks}</>
}
