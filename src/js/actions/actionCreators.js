// recalculate all characters
export function recalculate(text) {
	return {
		type: 'RECALCULATE',
		text
	}
}