import EastIcon from '@mui/icons-material/East'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

type LoadMoreButtonProps = {
	onClick: () => void
}

export const LoadMoreButton = ({ onClick }: LoadMoreButtonProps) => {
	return (
		<Box display='flex' justifyContent='center' alignItems='center'>
			<Button
				sx={{ width: 140, textTransform: 'initial' }}
				onClick={onClick}
				endIcon={<EastIcon />}
				variant='contained'
				disableElevation
			>
				Daha fazla
			</Button>
		</Box>
	)
}
