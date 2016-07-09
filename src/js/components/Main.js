/**
 * Import framework
 */
import React from 'react';

/**
 * Import components
 */
import InputForm from './InputForm';
import CharacterCount 	from './CharacterCount';
import TopResults 		from './TopResults';

/**
 * Component: Main
 * Renders pages requested by the router
 */
const Main = React.createClass({

	/**
	 * Render
	 */
	render() {
		return (
			<main className="textCounter">
				<InputForm recalculate={this.props.recalculate} />
				<section className="results">
					<CharacterCount {...this.props} />
					<TopResults {...this.props} />
				</section>
      			<footer>
        			<h3>Door <a href="mailto:gijs@gijswilbrink.nl">Gijs Wilbrink</a></h3>
      			</footer>
			</main>
		);
	}
});

/**
 * Export
 */
export default Main;