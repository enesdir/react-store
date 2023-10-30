import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { secondaryNavItems } from '@/app/config/secondaryNavItems'
import { SpacedFlexBox } from '@/components/styled'

export function ExtendItems() {
	const [anchorEl, setAnchorEl] = useState(null)
	const open = Boolean(anchorEl)
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<SpacedFlexBox display={{ sm: 'flex', md: 'none' }} sx={{ paddingBottom: 1 }}>
			{secondaryNavItems.slice(0, 6).map((section, index) => (
				<Link
					color='#6A6D70'
					noWrap
					key={index}
					href={section.url}
					sx={{
						fontWeight: 500,
						fontSize: '14px',
						'&:hover': {
							color: '#32363A',
						},
					}}
				>
					{section.title}
				</Link>
			))}
			<Button
				id='secondary-header-button-more'
				aria-controls={open ? 'demo-positioned-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				variant='text'
				sx={{
					fontWeight: 500,
					fontSize: '14px',
					color: '#6A6D70',
					textTransform: 'initial',
					padding: 0,
					margin: 0,
					'&:hover': {
						color: '#32363A',
						backgroundColor: 'transparent',
					},
				}}
				endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
			>
				More
			</Button>
			<Menu
				id='secondary-header-more-menu'
				aria-labelledby='secondary-header-button-more'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				sx={{
					'& .MuiPaper-root': {
						color: '#6A6D70',
						backgroundColor: '#F4F5F6',
					},
				}}
			>
				{secondaryNavItems.slice(6).map((items, index) => (
					<MenuItem key={index} onClick={handleClose}>
						<Link color='inherit' noWrap variant='body2' href={items.url} sx={{ flexShrink: 0 }}>
							{items.title}
						</Link>
					</MenuItem>
				))}
			</Menu>
		</SpacedFlexBox>
	)
}
