/**
 * Import framework
 */
import React from 'react';

/**
 * Import components
 */
import CharacterCount 	from './CharacterCount';
import TopResults 		from './TopResults';

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
			<section className="results">
				<CharacterCount {...this.props} />
				<TopResults {...this.props} />
			</section>
		);
	}
});

/**
 * Export
 */
export default Results;