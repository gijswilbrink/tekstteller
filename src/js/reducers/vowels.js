/**
 * Import dependencies
 */
import helpers from '../helpers';

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
		case 'RECALCULATE':
			var iVowels = 0;

			// init text
			var text = action.text;

			// loop characters in text
			for (var i = 0, len = text.length; i < len; i++) {
  				
  				// check if character is a vowel
  				if(helpers.isVowel(text[i])) {
  					iVowels++;
  				}
			}

			// add vowel count to state
			state = iVowels;
			return state;
		
		// Action wasn't meant for this reducer
		default:
			return state;
	}
}

/**
 * Export
 */
export default vowels;