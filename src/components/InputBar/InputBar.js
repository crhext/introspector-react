import React from 'react';
import Descriptors from './Descriptors/Descriptors';
import './InputBar.css';

class InputBar extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      inputField: '',
	    };
	  }

	onInputChange = event => {
		this.setState({ inputField:event.target.value})
	};

	onSubmitClick = event => {
		event.preventDefault()
		const descriptor = this.state.inputField
		if (descriptor !== '') {
			const descriptorsArray = this.props.descriptors
			descriptorsArray.push(descriptor)
			this.setState({ descriptors: descriptorsArray})
			this.setState({ inputField:''})		
		}
	}

	render() {
		return (
			<div>
				<div className="center">
					<div className="input">
						<p className='f3'>
							{'Please enter variables that summarise your day.'}
						</p>
						<div className='center'>
							<div className='pa4 br3 shadow-5 input-bar center'>
								<input className="f4 pa2 w-70 center" type='text' onChange={this.onInputChange} type="text" value={this.state.inputField}/>
								<button   className="w-30 grow f4 link ph3 pv2 dib white bg-blue" onClick={this.onSubmitClick}  >Submit</button>
							</div>
						</div>
					</div>
				</div>
				<div>
					<Descriptors descriptors={this.props.descriptors}/>
				</div>
			</div>
		);
	};
}

export default InputBar;








