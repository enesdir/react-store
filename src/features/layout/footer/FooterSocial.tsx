import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'

export const FooterSocial = () => {
	return (
		<Stack spacing={1} direction='row' flexWrap='wrap' useFlexGap display={{ xs: 'none', md: 'block' }}>
			<IconButton
				target='_blank'
				rel='noopener noreferrer'
				href='https://instagram.com/'
				aria-label='github'
				title='GitHub'
				size='small'
			>
				<Instagram fontSize='small' sx={{ color: 'Sky.White' }} />
			</IconButton>
			<IconButton
				target='_blank'
				rel='noopener noreferrer'
				href='https://facebook.com/'
				aria-label='twitter'
				title='Twitter'
				size='small'
			>
				<Facebook fontSize='small' sx={{ color: 'Sky.White' }} />
			</IconButton>
			<IconButton
				target='_blank'
				rel='noopener noreferrer'
				href='https://www.linkedin.com/'
				aria-label='linkedin'
				title='LinkedIn'
				size='small'
			>
				<LinkedInIcon fontSize='small' sx={{ color: 'Sky.White' }} />
			</IconButton>
		</Stack>
	)
}
