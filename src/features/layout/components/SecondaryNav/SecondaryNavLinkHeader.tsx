import Typography from '@mui/material/Typography'

export interface FooterHeaderProps {
	title: string
}

export function SecondaryNavLinkHeader({ title }: FooterHeaderProps) {
	return (
		<Typography fontWeight='bold' variant='body2' sx={{ mb: 0.5 }} fontSize={{ xs: '20px', md: '24px' }}>
			{title}
		</Typography>
	)
}
