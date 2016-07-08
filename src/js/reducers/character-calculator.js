/**
 * Character calculator reducer
 * @param 	state 	the current state
 * @param 	action 	the called action
 * @return 	state	the new state
 */
function characterCalculator(state = [], action) {

	// Check which action was called
	switch(action.type) {

		// Increment the amount of likes
		case 'RECALCULATE' :
			return state;
		
		// Action wasn't meant for this reducer
		default:
			return state;
	}
}

/**
 * Export
 */
export default characterCalculator;