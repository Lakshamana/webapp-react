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

export const formatNumber = (num: number, digits: number) => {
	const lookup = [
		{ value: 1, symbol: "" },
		{ value: 1e3, symbol: "k" },
		{ value: 1e6, symbol: "M" },
		{ value: 1e9, symbol: "G" },
		{ value: 1e12, symbol: "T" },
		{ value: 1e15, symbol: "P" },
		{ value: 1e18, symbol: "E" }
	];
	const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
	const item = lookup.slice().reverse().find((item) => num >= item.value);
	return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

export function convertToValidColor(color): string | undefined {
	if (!color || !color.replace)
		return undefined

	const myColor = color.replace(/#(..)(......)/, '#$2$1')
	return myColor || undefined
}