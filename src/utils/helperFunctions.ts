export const RANDOM_ID = () => {
	return `${Math.random().toString(36).slice(2, 12)}`;
}
