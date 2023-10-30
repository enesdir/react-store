// thanks: https://stackoverflow.com/questions/54745744/material-uireact-hovering-on-tabs-will-not-open-and-close-properly
import React, { useState } from 'react'
import { ButtonBase, Popper } from '@mui/material/'

import { secondaryNavItems } from '@/app/config/secondaryNavItems'
import { SpacedFlexBox } from '@/components/styled'
import { NavTabContent } from './NavTabContent'

export const SecondaryNavTabs = () => {
	const [value, setValue] = useState<number>(0)
	const [open, setOpen] = useState<boolean>(false)
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	//TODO: added functionality
	// const handleMenuClick = (index: number) => {
	// Your logic here
	// }

	const handleMenuOpen = (index: number, event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
		setValue(index)
		setOpen(true)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
		setOpen(false)
	}

	return (
		<SpacedFlexBox onMouseLeave={handleMenuClose} display={{ sm: 'none', md: 'flex' }}>
			{secondaryNavItems.map((section, index) => (
				<ButtonBase
					key={index}
					onMouseEnter={(event) => handleMenuOpen(index, event)}
					data-key={index}
					sx={{
						textTransform: 'none',
						minWidth: 0,
						color: open && value === index ? '#6A6D70' : '#32363A',
						borderBottom: 2,
						borderColor: open && value === index ? 'primary.main' : 'transparent',
						fontWeight: 500,
						fontSize: '14px',
						'&:hover': {
							color: '#32363A',
							borderColor: 'primary.main',
						},
						'&:focus': { color: '#32363A' },
						'&:active': { color: '#32363A' },

						paddingBottom: 1,
					}}
					aria-owns={open ? 'menu-list-grow' : undefined}
					aria-haspopup='true'
				>
					{section.title}
				</ButtonBase>
			))}

			<Popper open={open} anchorEl={anchorEl} id='menu-list-grow' placement='bottom-start'>
				<NavTabContent onClick={handleMenuClose} itemsValue={value} />
			</Popper>
		</SpacedFlexBox>
	)
}
