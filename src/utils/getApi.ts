async function getApi() {
	const req = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}

	const res = await fetch(import.meta.env.VITE_API_URL, req)
	if (!res.ok) {
		const contentType = res.headers.get('content-type')

		if (!contentType || !contentType.includes('application/json')) {
			const err = new Error('An unexpected error occurred.')
			throw err
		}

		const err = await res.json()
		throw new Error(err.message)
	}

	return res.json()
}

export { getApi }
