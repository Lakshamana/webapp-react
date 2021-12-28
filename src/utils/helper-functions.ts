export const RANDOM_ID = () => {
	return `${Math.random().toString(36).slice(2, 12)}`
}

export const getItems = (items: any) => {
	if (!items) return []

	return items
}

export const getActions = (actions: any) => {
	if (!actions) return []

	return actions
}

export const kFormatter = (num: number | bigint) => {
	let formatter = Intl.NumberFormat('en', { notation: 'compact' })
	return formatter.format(num)
}