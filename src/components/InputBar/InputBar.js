import React from 'react';
import './InputBar.css';

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

	onSubmitClick = event => {
		event.preventDefault()
		const descriptor = this.state.inputField
		this.setState(prevState => ({
			descriptors: [...prevState.descriptors, "test"]
		}))
		this.setState({ inputField:''})

	}


	render() {
		return (
			<div className="center">
				<div className="input">
					<p className='f3'>
						{'Please enter variables that summarise your day.'}
					</p>
					<div className='center'>
						<div className='pa4 br3 shadow-5 input-bar center'>
							<input className="f4 pa2 w-70 center" type='text' onChange={this.onInputChange}/>
							<button type="submit" className="w-30 grow f4 link ph3 pv2 dib white bg-blue" onClick={this.onSubmitClick} >Submit</button>
						</div>
					</div>
				</div>
			</div>
		);
	};
}

export default InputBar;








