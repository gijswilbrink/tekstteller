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
		// init
		var iVowels = this.props.characters.iVowelCount;
		var iConsonants = this.props.characters.iConsonantCount;

		// no results
		if(!iVowels && !iConsonants) {
			return (<div />);
		} 

		// vowel label
		var vowelLabel = 'Klinkers';
		if(iVowels == 1) vowelLabel = 'Klinker';

		// consonant label
		var consonantLabel = "Medeklinkers";
		if(iConsonants == 1) consonantLabel = "Medeklinker";

		// results
		return (
			<div>
				<h2>Je typte...</h2>
				<div className="stats characterCount">
					{/* Number of vowels */}
					<figure className="stat vowelCount">
						
						<h3>
							<output className="count">{iVowels}</output>
							{vowelLabel}
						</h3>
					</figure>

					{/* Number of consonants */}
					<figure className="stat consonantCount">
						<h3>
							<output className="count">{iConsonants}</output>
							{consonantLabel}
						</h3>
					</figure>
				</div>
			</div>
		);
	}
});

/**
 * Export
 */
export default CharacterCount;