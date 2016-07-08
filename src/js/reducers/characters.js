/**
 * Characters reducer
 * Counts all vowels and consonants in the text
 * @param 	state 	the current state
 * @param 	action 	the called action
 * @return 	state	the new state
 */
function characters(state = [], action) {

	// Check which action was called
	switch(action.type) {

		// Recalculate the amount of vowels and consonants
		case 'RECALCULATE':
			// reset counts
			var characters = {...state};
			characters.iVowels = 0;
			characters.iConsonants = 0;

			// init text
			var text = action.text;

			// loop characters in text
			for (var i = 0; i < text.length; i++) {

				// init character
				var char = text[i].toLowerCase();

  				// check if character is a letter at all (also allow letters with accents)
  				if(!isLetter(char)) continue;

  				// check if character is a vowel
  				if(isVowel(char)) {
  					characters.iVowels++;
  				} 

  				// no vowel? character is a consonant
  				else {
  					characters.iConsonants++;
  				}
			}

			// add vowel count to state
			return characters;
		
		// Action wasn't meant for this reducer
		default:
			return state;
	}

	/**
	 * Check if a character is a vowel
	 */
	function isVowel(c) {
		var vowels = ['a','e','i','o','u','à','è','ì','ò','ù','á','é','í','ó','ú','â','ê','î','ô','û','ä','ë','ï','ö','ü'];
    	return vowels.indexOf(c) !== -1;
	}

	/**
	 * Check if a character is a letter
	 */
	function isLetter(c)
	{
		return c.match(/^[a-z\u00C0-\u00ff]+$/i);
	}
}

/**
 * Export
 */
export default characters;