import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormHelperText from '@mui/material/FormHelperText'
import InputBase from '@mui/material/InputBase'
import { styled } from '@mui/material/styles'

import type { FormEvent } from 'react'

const Form = styled('form')({ display: 'flex' })

export function EmailSubscribe() {
	const [form, setForm] = useState<{
		email: string
		status: 'initial' | 'loading' | 'failure' | 'sent'
	}>({
		email: '',
		status: 'initial',
	})
	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setForm((current) => ({ ...current, status: 'loading' }))
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					width: '100%',
					paddingY: 5,
				}}
			>
				<InputBase
					id='email-subscribe'
					name='email'
					type='email'
					placeholder='Email'
					value={form.email}
					onChange={(event) => setForm({ email: event.target.value, status: 'initial' })}
					inputProps={{ required: true }}
					sx={{
						borderRadius: 0,
						width: '100%',
						border: 'none',
						bgcolor: '#fff',
						color: 'grey.800',
						borderColor: 'grey.200',
						typography: 'body2',
					}}
					endAdornment={
						<Button
							variant='contained'
							disabled={form.status === 'loading'}
							type='submit'
							sx={{
								backgroundColor: '#00254F',
								color: '#FFFFFF',
								minWidth: 101,
								lineClamp: 'none',
								borderRadius: 0,
								textTransform: 'initial',
								fontSize: 'theme.typography.CTA3',
							}}
						>
							Sign Up
						</Button>
					}
				/>
			</Box>
			{form.status === 'failure' && (
				<FormHelperText sx={{ color: 'warning.800' }}>
					Oops! Something went wrong, please try again later.
				</FormHelperText>
			)}
		</Form>
	)
}
