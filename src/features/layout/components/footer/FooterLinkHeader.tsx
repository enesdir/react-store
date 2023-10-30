import Typography from '@mui/material/Typography'

export interface FooterHeaderProps {
	headerText: string
}

export function FooterLinkHeader({ headerText }: FooterHeaderProps) {
	return (
		<Typography variant='CTA1' sx={{ mb: 0.5 }} fontSize={{ base: 'lg', md: 'xl' }} color='common.white'>
			{headerText}
		</Typography>
	)
}
