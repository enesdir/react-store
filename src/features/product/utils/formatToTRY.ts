const formattedOutput = new Intl.NumberFormat('tr-TR', {
	style: 'currency',
	currency: 'TRY',
	minimumFractionDigits: 2,
})

export function formatToTry(price: string): string {
	return `${formattedOutput.format(parseFloat(price)).replace('₺', '')} TL`
}
