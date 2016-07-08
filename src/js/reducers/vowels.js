/**
 * Vowels reducer
 * Counts all vowels in the text
 * @param 	state 	the current state
 * @param 	action 	the called action
 * @return 	state	the new state
 */
function vowels(state = [], action) {

	// Check which action was called
	switch(action.type) {

		// Recalculate the amount of vowels
		case 'RECALCULATE' :
			
		
		// Action wasn't meant for this reducer
		default:
			return state;
	}
}

/**
 * Export
 */
export default vowels;