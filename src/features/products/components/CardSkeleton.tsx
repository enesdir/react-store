import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

export function CardSkeleton() {
	return (
		<Stack spacing={1}>
			{/* For variant="text", adjust the height via font-size */}
			<Skeleton variant='text' sx={{ fontSize: '1rem' }} />
			{/* For other variants, adjust the size with `width` and `height` */}
			<Stack direction='row' spacing={{ xs: 1, sm: 2, md: 4 }} display={{ xs: 'none', sm: 'flex' }}>
				<Skeleton variant='rectangular' width='100%' height={260} />
				<Skeleton variant='rectangular' width='100%' height={260} />
				<Skeleton variant='rectangular' width='100%' height={260} />
				<Skeleton variant='rectangular' width='100%' height={260} />
			</Stack>
			<Stack
				direction={{ sm: 'column', md: 'row' }}
				spacing={{ xs: 1, sm: 2, md: 4 }}
				display={{ xs: 'flex', sm: 'none' }}
			>
				<Skeleton variant='rectangular' width='100%' height={260} />
			</Stack>
		</Stack>
	)
}
