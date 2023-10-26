import type { ProductSearchFilters } from '@/features/productSearch/types/SearchWithFiltersType'
import type { SelectChangeEvent } from '@mui/material/Select'

import { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { FormControl, OutlinedInput } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'

import { titleCase } from '@/features/productSearch/utils/titleCase'

type SearchProps = {
	filters: ProductSearchFilters[]
	filtersValues: object
	handleFilters: (filterObj: { [x: string]: string }) => void
	searchValue: string
	handleSearchValue: (value: string) => void
	handleSearchSubmit?: () => void
}

export const SearchWithFilters = (props: SearchProps) => {
	const { filtersValues, handleFilters, filters, handleSearchValue, searchValue, handleSearchSubmit } = props

	const [text, setText] = useState(searchValue)

	useEffect(() => {
		const timerId = setTimeout(() => {
			handleSearchValue(text)
		}, 800)
		return () => {
			clearTimeout(timerId)
		}
	}, [text, handleSearchValue])

	const handleSelect = (e: SelectChangeEvent, label: string) => {
		handleFilters({ [label]: e.target.value })
	}

	return (
		<Box
			component='form'
			flexGrow={1}
			sx={{
				// flexShrink: 0,
				width: '100%',

				justifyContent: 'center',
				alignItems: 'center',
				display: 'inline-flex',
				m: '0 auto',
				paddingRight: { xs: 0, sm: 0 },
				// gap: 2,
			}}
		>
			<FormControl fullWidth>
				<TextField
					id='outlined-basic'
					label='Search...'
					variant='outlined'
					value={text}
					size='small'
					onChange={(e) => {
						setText(e.target.value)
					}}
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
								border: '1px solid #89919A',
								borderRadius: '0.25rem',
								'& .MuiInputAdornment-root .MuiOutlinedInput-notchedOutline ': {
									border: 0,
								},
							},
							'& .MuiInputBase-root': { border: 0 },
							'.MuiSelect-icon': {
								color: '#000000',
							},
						},
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position='end' sx={{ display: 'flex', position: 'relative' }}>
								<Box
									sx={{
										display: { xs: 'none', sm: 'inline-flex' },
									}}
								>
									{filters.map((filter, index) => (
										<Box key={index}>
											<FormControl
												variant='standard'
												sx={{
													minWidth: 120,
													bgcolor: 'rgba(0,0,0,0.05)',
													'& label': {
														display: 'none',
													},
												}}
											>
												<InputLabel id={`${filter.label}-${index}-label`} hidden>
													{titleCase(filter.label)}
												</InputLabel>
												<Select
													labelId={`${filter.label}-${index}-label`}
													id={filter.label}
													// @ts-expect-error: TODO solve type error
													value={filtersValues[filter.label]}
													onChange={(e) => handleSelect(e, filter.label)}
													label={filter.label}
													input={<OutlinedInput size='small' sx={{ typography: 'Body1' }} />}
													MenuProps={{
														PaperProps: {
															sx: { backgroundColor: 'text.primary', color: 'white' },
														},
													}}
													displayEmpty
													renderValue={(value) => (value ? value : titleCase(filter.label))}
												>
													{filter.items.map((item, index) => (
														<MenuItem key={index} value={item} sx={{ typography: 'Body1' }}>
															{item}
														</MenuItem>
													))}
												</Select>
											</FormControl>
										</Box>
									))}
								</Box>
							</InputAdornment>
						),
					}}
				/>
			</FormControl>
			<Button
				variant='contained'
				onClick={handleSearchSubmit}
				sx={{ ml: { xs: '-1rem', sm: '1rem' }, height: 42, px: { xs: '2rem', sm: '2.5rem' } }}
			>
				<SearchIcon />
			</Button>
		</Box>
	)
}
