import type { SelectChangeEvent } from '@mui/material/Select'

import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import OutlinedInput from '@mui/material/OutlinedInput'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

export function SearchBar() {
	const [department, setDepartment] = useState<string>('')

	const filters: string[] = ['data', 'Category Name', 'Category Name', 'Category Name', 'Category Name']

	const handleSearchClick = () => {
		// Implement your search logic here
		console.log('Search clicked')
	}

	const handleDepartmentChange = (event: SelectChangeEvent<string>) => {
		setDepartment(event.target.value)
	}

	return (
		<Box sx={{ display: 'flex', flexWrap: 'wrap', m: '0 auto', gap: 2 }}>
			<TextField
				placeholder='Search...'
				variant='outlined'
				sx={{
					'& .MuiOutlinedInput-root': {
						padding: 0,

						// '&.Mui-focused': {
						// 	'& .MuiInputAdornment-root': {
						// 		color: 'white',
						// 		backgroundColor: '#e4025c',
						// 	},
						// },
						'&.MuiOutlinedInput-root': {
							'& .MuiInputAdornment-root .MuiOutlinedInput-notchedOutline': {
								border: 0,
							},
						},
					},
				}}
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<FormControl
								sx={{
									minWidth: 120,
									display: { xs: 'none', sm: 'inline-flex' },
									bgcolor: 'rgba(0,0,0,0.05)',
									'& label': {
										display: 'none',
									},
								}}
							>
								<InputLabel id='search-select-category' hidden>
									Categories
								</InputLabel>
								<Select
									labelId='search-select-category'
									label='Categories'
									value={department}
									input={<OutlinedInput />}
									onChange={handleDepartmentChange}
									displayEmpty
									renderValue={(value) => (value ? value : 'Nothing Selected')}
								>
									{filters.map((filter, index) => {
										return (
											<MenuItem key={index} value={filter}>
												{filter}
											</MenuItem>
										)
									})}
								</Select>
							</FormControl>
						</InputAdornment>
					),
				}}
			/>
			<Button variant='contained' onClick={handleSearchClick} sx={{ display: 'inline-flex', paddingX: 6 }}>
				<SearchIcon />
			</Button>
		</Box>
	)
}
