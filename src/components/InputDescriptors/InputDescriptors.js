import React from 'react';
import Descriptors from './Descriptors/Descriptors';
import InputBar from './InputBar/InputBar';
import './InputDescriptors.css';

class InputDescriptors extends React.Component {

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
			this.setState({ descriptors: descriptorsArray})
			this.setState({ inputField:''})		
		} 
	}

	render() {
		return (

			<div className="center fl w-100 input-container">
				<div className="input fl w-70">
					<p className='f3'>
						{'Please enter variables that summarise your day. '}
					</p>
					<form onSubmit={this.onEnterClick}>
						<div className='pa4 br3 shadow-5 input-bar center '>
							<input className="f4 pa2 w-50 center" type='text' onChange={this.onInputChange} type="text" value={this.state.inputField}/>
							<button type="submit"  className="w-30 grow f4 link ph3 pv2 dib white bg-blue"   >Enter</button>
						</div>
					</form>
				</div>

				<InputBar onEnterClick={this.onEnterClick} onInputChange={this.onInputChange} value={this.state.inputField}/>
				<hr></hr>
				<div className="descriptors-container">
					<Descriptors descriptors={this.props.descriptors} deleteDescriptorHandler={this.props.deleteDescriptorHandler}/>
				</div>
			</div>
		);
	};
}

export default InputDescriptors;







