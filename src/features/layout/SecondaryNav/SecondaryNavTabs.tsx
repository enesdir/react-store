// thanks: https://stackoverflow.com/questions/54745744/material-uireact-hovering-on-tabs-will-not-open-and-close-properly
import React, { useState } from 'react'
import { Box, Popper, Tab, Tabs, useTheme } from '@mui/material/'

import { secondaryHeaderItems } from '@/app/config/secondaryHeaderItems'
import { SecondaryNavContainer } from './SecondaryNavContainer'

export const SecondaryHeaderTabs = () => {
	const theme = useTheme()
	const [value, setValue] = useState(0)
	const [open, setOpen] = useState(false)
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
		<Box sx={{ width: '100%' }} onMouseLeave={handleMenuClose}>
			<Tabs
				value={value}
				indicatorColor='primary'
				textColor='primary'
				centered
				sx={{
					'& .MuiTabs-root': {
						width: 10,
					},
				}}
			>
				{secondaryHeaderItems.map((section, index) => (
					<Tab
						key={index}
						onMouseEnter={(event) => handleMenuOpen(index, event)}
						data-key={index}
						label={section.title}
						sx={{
							fontWeight: theme.typography.Body1,
							fontSize: theme.typography.Body1,
							textTransform: 'none',
							flexWrap: 'nowrap',
							minWidth: 0,
							color: '#6A6D70',
							'&:hover': {
								color: '#32363A',
							},

							'& .MuiTabs-indicator': {
								display: 'flex',

								justifyContent: 'center',
								backgroundColor: 'transparent',
							},
						}}
						aria-owns={open ? 'menu-list-grow' : undefined}
						aria-haspopup='true'
					/>
				))}
			</Tabs>
			<Popper open={open} anchorEl={anchorEl} id='menu-list-grow' placement='bottom-start'>
				<SecondaryNavContainer onClick={handleMenuClose} itemsValue={value} />
			</Popper>
		</Box>
	)
}
