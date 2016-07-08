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
	 * Render
	 */
	render() {
		return (
			<dl className="results">
				  <dt>Number of vowels</dt>
				  <dd>{this.props.characters.iVowels}</dd>
				  <dt>Number of consonants</dt>
				  <dd>{this.props.characters.iConsonants}</dd>
				  <dt>Top 3 vowels</dt>
				  <dd></dd>
				  <dt>Top 3 consonants</dt>
				  <dd></dd>
			</dl>
		);
	}
});

/**
 * Export
 */
export default Results;