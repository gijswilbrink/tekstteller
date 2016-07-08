/**
 * Top 3's reducer
 * Calculates the top 3 consonants and vowels
 * @param 	state 	the current state
 * @param 	action 	the called action
 * @return 	state	the new state
 */
function top3s(state = [], action) {

	// Check which action was called
	switch(action.type) {

		// Recalculate the Top 3 lists of consonants and vowels
		case 'RECALCULATE' :
			
		
		// Action wasn't meant for this reducer
		default:
			return state;
	}
}

/**
 * Export
 */
export default top3s;