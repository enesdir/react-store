export function titleCase(text: string) {
	return text.replace(/^(.)|\s(.)/g, ($1) => $1.toUpperCase())
}
