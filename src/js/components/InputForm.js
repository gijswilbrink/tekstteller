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
	 * On load
	 */
	componentDidMount() {
		// set focus to the textarea
 		this.refs.inputText.focus(); 
	},

	/**
	 * Pass the textarea's value to an action
	 */
	passValue() {
		// get input text
		var text = this.refs.inputText.value;

		// call action
		this.props.recalculate(text);
	},

	/**
	 * Render
	 */
	render() {
		return (
			<form>
				<textarea placeholder="Typ maar raak..." ref="inputText" className="inputText" onKeyUp={this.passValue}></textarea>
			</form>
		);
	}
});

/**
 * Export
 */
export default InputForm;