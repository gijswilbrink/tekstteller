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
	render() {
		return (
			<section className="textcounter">
				<InputForm />
				<Results />
			</section>
		);
	}
});

/**
 * Export
 */
export default Main;