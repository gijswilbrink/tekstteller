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

		// no results
		if(!this.props.characters.iVowelCount && !this.props.characters.iConsonantCount) {
			return (<div />);
		}

		// results
		return (
			<div>
				<h2>Je typte...</h2>
				<div className="stats characterCount">
					{/* Number of vowels */}
					<div className="stat vowelCount">
						<span className="count">{this.props.characters.iVowelCount}</span>
						<h3>Klinkers</h3>
					</div>

					{/* Number of consonants */}
					<div className="stat consonantCount">
						<span className="count">{this.props.characters.iConsonantCount}</span>
						<h3>Medeklinkers</h3>
					</div>
				</div>
			</div>
		);
	}
});

/**
 * Export
 */
export default CharacterCount;