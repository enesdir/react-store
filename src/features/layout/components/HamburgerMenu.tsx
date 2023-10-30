import type { MouseEventHandler } from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

type HamburgerMenu = {
	handleClick: MouseEventHandler<HTMLButtonElement>
}
export const HamburgerMenu = ({ handleClick }: HamburgerMenu) => {
	return (
		<IconButton
			color='inherit'
			aria-label='open drawer'
			edge='start'
			onClick={handleClick}
			sx={{ display: { xs: 'block', sm: 'none' } }}
		>
			<MenuIcon />
		</IconButton>
	)
}
