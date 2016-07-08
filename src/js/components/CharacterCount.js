/**
 * Import framework
 */
import React from 'react';

/**
 * Component: CharacterCount
 * Displays the flat statistics of vowels and consonants
 */
const CharacterCount = React.createClass({

	/**
	 * Render
	 */
	render() {
		return (
			<dl className="characterCount">
				{/* Number of vowels */}
				<dt>Number of vowels</dt>
				<dd className="vowelCount">{this.props.characters.iVowelCount}</dd>

				{/* Number of consonants */}
				<dt>Number of consonants</dt>
				<dd className="consonantCount">{this.props.characters.iConsonantCount}</dd>
			</dl>
		);
	}
});

/**
 * Export
 */
export default CharacterCount;