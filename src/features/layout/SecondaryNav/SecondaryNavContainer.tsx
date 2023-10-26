import type { MouseEventHandler } from 'react'
import { SecondaryHeaderItemsType } from '@/features/layout/types/SecondaryHeaderItemsType'

import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'

import { secondaryHeaderItems } from '@/app/config/secondaryHeaderItems'
import { SecondaryNavLink } from './SecondaryNavLink'
import { SecondaryNavLinkHeader } from './SecondaryNavLinkHeader'

type FooterLinksItemProps = {
	items: SecondaryHeaderItemsType['items'][number]['items']
}

const SecondaryNavLinksItem = ({ items }: FooterLinksItemProps) => {
	const footerLinks = items.map((element, index) => (
		<SecondaryNavLink key={index} to={element.url} text={element.title} />
	))
	return <>{footerLinks}</>
}
type SecondaryNavLinkContainerProps = {
	onClick?: MouseEventHandler<HTMLElement>
	itemsValue: number
}
export function SecondaryNavContainer({ onClick, itemsValue }: SecondaryNavLinkContainerProps) {
	const footerLinks = secondaryHeaderItems[itemsValue].items.map((item, index) => (
		<div key={index}>
			<SecondaryNavLinkHeader title={item.title} />
			<SecondaryNavLinksItem items={item.items} />
		</div>
	))

	return (
		<Paper onClick={onClick} sx={{ background: '#F4F5F6', padding: 4 }}>
			<Stack direction='row' spacing='14' display={{ xs: 'none', sm: 'flex' }} gap={4}>
				{footerLinks}
				<img
					width={776}
					height={240}
					style={{
						borderRadius: '2px',
					}}
					src='/assets/secondNav/Rectangle29.png'
					alt={`${secondaryHeaderItems[itemsValue].title} 'Image'`}
				/>
			</Stack>
		</Paper>
	)
}
