/**
 * Helper functions
 */
var helpers = {
	isVowel: function(c) {
	var vowels = ['a','e','i','o','u','à','è','ì','ò','ù','á','é','í','ó','ú','â','ê','î','ô','û','ä','ë','ï','ö','ü'];
    return vowels.indexOf(c.toLowerCase()) !== -1
	}
}

export default helpers;