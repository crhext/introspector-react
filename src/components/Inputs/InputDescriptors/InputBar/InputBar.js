import React from 'react';

class InputBar extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      inputField: ''
	    };
	  }

	onInputChange = event => {
		this.setState({ inputField:event.target.value})
	};

	onEnterClick = event => {
		event.preventDefault()
		const descriptor = this.state.inputField
		const descriptorLower = descriptor.toLowerCase()
		if (descriptor !== '') {
			const descriptorsArray = this.props.descriptors
			descriptorsArray.push(descriptorLower)
			this.setState({ inputField:''})
			this.props.updateDescriptorHandler(this.props.descriptorsType,descriptorsArray);		
		} 
	}

	render() {
		return (
			<div className="input fl w-70">
				<form onSubmit={this.onEnterClick}>
					<div className='pa4 br3 shadow-5 input-bar center '>
						<input className="f4 pa2 w-50 center br-pill" type='text' onChange={this.onInputChange} value={this.state.inputField}/>
						<button type="submit"  className="w-30 f4 grow no-underline br-pill ba ph3 pv2  dib  white bg-blue">Enter</button>
					</div>
				</form>
			</div>
		);
	};
}

export default InputBar;
