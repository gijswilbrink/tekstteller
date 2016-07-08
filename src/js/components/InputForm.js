/**
 * Import framework
 */
import React from 'react';

/**
 * Component: InputForm
 * Shows a textfield where the user can input the text that needs to be counted
 */
const InputForm = React.createClass({
	
	/**
	 * Pass the textarea's value to an action
	 */
	passValue() {
		// get input text
		var text = this.refs.inputtext.value;

		// call action
		this.props.recalculate(text);
	},

	/**
	 * Render
	 */
	render() {
		return (
			<form className="entry">
				<textarea ref="inputtext" className="inputtext" onKeyUp={this.passValue}></textarea>
			</form>
		);
	}
});

/**
 * Export
 */
export default InputForm;