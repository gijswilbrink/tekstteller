/**
 * Import dependencies
 */
import helpers from '../helpers';

/**
 * Consonants reducer
 * Counts all consonants in the text
 * @param 	state 	the current state
 * @param 	action 	the called action
 * @return 	state	the new state
 */
function consonants(state = [], action) {

	// Check which action was called
	switch(action.type) {

		// Recalculate the amount of consonants
		case 'RECALCULATE' :
			var iConsonants = 0;

			// init text
			var text = action.text;

			// loop characters in text
			for (var i = 0, len = text.length; i < len; i++) {
  				
  				// init character
  				var char = text[i];

  				// check if character is a letter and not a vowel
  				if(char.match(/[a-z]/i) && !helpers.isVowel(char)) {
  					iConsonants++;
  				}
			}

			// add consonant count to state
			state = iConsonants;
			return state;
		
		// Action wasn't meant for this reducer
		default:
			return state;
	}
}

/**
 * Export
 */
export default consonants;