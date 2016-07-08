/**
 * Import framework
 */
import React from 'react';

/**
 * Component: TopResults
 * Displays the top 3 vowels and consonants
 */
const TopResults = React.createClass({

	/**
	 * Render a top result
	 */
	renderTopResult(result) {
		
		// init
		var character = result[0].toUpperCase();
		var count = result[1];

		// return jsx
		return <li key={result}><span className="character">{character}</span>, used <span className="count">{count}</span> times</li>;
	},

	/**
	 * Render
	 */
	render() {
		return (
			<dl className="topResults">
				{/* Top 3 vowels */}
				<dt>Top 3 vowels</dt>
				<dd className="topVowels">
					<ol>{this.props.characters.aTopVowels.map(this.renderTopResult)}</ol>
				</dd>
				
				{/* Top 3 consonants */}
				<dt>Top 3 consonants</dt>
				<dd className="topConsonants">
					<ol>{this.props.characters.aTopConsonants.map(this.renderTopResult)}</ol>
				</dd>
			</dl>
		);
	}
});

/**
 * Export
 */
export default TopResults;