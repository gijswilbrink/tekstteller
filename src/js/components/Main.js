/**
 * Import framework
 */
import React from 'react';

/**
 * Import components
 */
import InputForm from './InputForm';
import Results from './Results';

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
			<section className="textcounter">
				<InputForm recalculate={this.props.recalculate} />
				<Results {...this.props} />
			</section>
		);
	}
});

/**
 * Export
 */
export default Main;