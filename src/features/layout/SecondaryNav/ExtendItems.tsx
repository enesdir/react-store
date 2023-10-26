import { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useTheme } from '@mui/material/styles'

import { secondaryHeaderItems } from '@/app/config/secondaryHeaderItems'

export function ExtendItems() {
	const theme = useTheme()
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
		<>
			{secondaryHeaderItems.slice(0, 6).map((section, index) => (
				<Link color='inherit' noWrap key={index} variant='body2' href={section.url} sx={{ flexShrink: 0 }}>
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
				sx={{ color: 'grey', textTransform: 'initial' }}
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
						color: theme.palette.grey[600],
						backgroundColor: theme.palette.grey[50],
					},
				}}
			>
				{secondaryHeaderItems.slice(6).map((items, index) => (
					<MenuItem key={index} onClick={handleClose}>
						<Link color='inherit' noWrap variant='body2' href={items.url} sx={{ flexShrink: 0 }}>
							{items.title}
						</Link>
					</MenuItem>
				))}
			</Menu>
		</>
	)
}
