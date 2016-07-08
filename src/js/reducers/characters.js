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
			var characters = {
				iVowelCount: 0,
				aVowels: [],
				aTopVowels: [],
				iConsonantCount: 0,
				aConsonants: [],
				aTopConsonants: []
			}
			
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
  					// increment vowel count
  					characters.iVowelCount++;
  					// add to vowels array and increment character count
  					characters.aVowels[char] = characters.aVowels[char] + 1 || 1;
  				} 

  				// no vowel? character is a consonant (we already know it's a letter, right?)
  				else {
  					// increment vowel count
  					characters.iConsonantCount++;

  					// add to consonant array and increment character count
  					characters.aConsonants[char] = characters.aConsonants[char] + 1 || 1;
  				}
			}

			// Sort vowels and consonants by character count
			characters.aTopVowels = getTopResults(characters.aVowels, 3);
			characters.aTopConsonants = getTopResults(characters.aConsonants, 3);

			// set new state
			return characters;
		
		// Action wasn't meant for this reducer
		default:
			return state;
	}

	/**
	 * Get the top n values of an associative array (object in js)
	 */
	function getTopResults(oObject, amount) {

		// create new array with key and value as value
		var sortedResults = [];
		for (var key in oObject) {
		      sortedResults.push([key, oObject[key]])
		}

		// sort the array (and reverse in the end for DESC sort)
		sortedResults.sort(
		    function(a, b) {
		        return a[1] - b[1]
		    }
		).reverse();

		// get the top n results (first n elements in array)
		var topResults = sortedResults.slice(0, amount);

		// return results
		return topResults;
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