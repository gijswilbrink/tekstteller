/**
 * Import framework
 */
import React from 'react';

/**
 * Component: InputForm
 * Shows a textfield where the user can input the text that needs to be counted
 */
const InputForm = React.createClass({
	render() {
		return (
			<form className="entry">
				<textarea ref="inputtext" className="inputtext"></textarea>
			</form>
		);
	}
});

/**
 * Export
 */
export default InputForm;