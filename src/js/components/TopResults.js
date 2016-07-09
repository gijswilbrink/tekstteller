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
		return <li key={result}><span className="character">{character}</span> <span className="amount">(<span className="number">{count}</span>&times; gebruikt)</span></li>;
	},

	/**
	 * Render
	 */
	render() {
		// no results
		if(!this.props.characters.aTopVowels.length && !this.props.characters.aTopConsonants.length) {
			return (<div />);
		}

		// results
		return (
			<div>
				<h2>Hier heb je nog wat meer statistieken</h2>
				<div className="stats topResults">
					{/* Top 3 vowels */}
					<div className="stat vowelCount">
						<h2>Top 3 klinkers</h2>
						<ol>{this.props.characters.aTopVowels.map(this.renderTopResult)}</ol>
					</div>
					
					{/* Top 3 consonants */}
					<div className="stat consonantCount">
						<h2>Top 3 mede&shy;klin&shy;kers</h2>
						<ol>{this.props.characters.aTopConsonants.map(this.renderTopResult)}</ol>
					</div>
				</div>
			</div>
		);
	}
});

/**
 * Export
 */
export default TopResults;