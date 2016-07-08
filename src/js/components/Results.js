/**
 * Import framework
 */
import React from 'react';

/**
 * Component: Results
 * Displays the text statistics
 */
const Results = React.createClass({

	/**
	 * Render a top result
	 */
	renderTopResult(result) {
		
		// init
		var character = result[0].toUpperCase();
		var count = result[1];

		// return jsx
		return <li key={result}>{character}, used {count} times</li>;
	},

	/**
	 * Render
	 */
	render() {
		return (
			<dl className="results">
				{/* Number of vowels */}
				<dt>Number of vowels</dt>
				<dd className="vowelCount">{this.props.characters.iVowelCount}</dd>

				{/* Number of consonants */}
				<dt>Number of consonants</dt>
				<dd className="consonantCount">{this.props.characters.iConsonantCount}</dd>
				
				{/* Top 3 vowels */}
				<dt>Top 3 vowels</dt>
				<dd className="topVowels">
					<ol className="topResults">{this.props.characters.aTopVowels.map(this.renderTopResult)}</ol>
				</dd>
				
				{/* Top 3 consonants */}
				<dt>Top 3 consonants</dt>
				<dd classNAme="topConsonants">
					<ol className="topResults">{this.props.characters.aTopConsonants.map(this.renderTopResult)}</ol>
				</dd>
			</dl>
		);
	}
});

/**
 * Export
 */
export default Results;