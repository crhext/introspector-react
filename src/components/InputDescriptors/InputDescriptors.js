import React from 'react';
import Descriptors from './Descriptors/Descriptors';
import InputBar from './InputBar/InputBar';
import './InputDescriptors.css';

class InputDescriptors extends React.Component {

	displaySubmit = (descriptors) => {
		if (this.props.descriptors.length > 0) {
			return (
				<button   className="f2 grow no-underline br-pill ba ph3 pv2 mb2 white bg-blue">Submit</button>
			)}		
	}


	render() {
		return (

			<div className="center fl w-100 input-container">
				<InputBar descriptors={this.props.descriptors} onEnterClick={this.onEnterClick} onInputChange={this.onInputChange} updateDescriptorHandler={this.props.updateDescriptorHandler}/>
				<hr></hr>
				<div className="descriptors-container">
					<Descriptors descriptors={this.props.descriptors} deleteDescriptorHandler={this.props.deleteDescriptorHandler}/>
				</div>
				<hr></hr>
				<div>
					{this.displaySubmit(this.props.descriptors)}
				</div>
			</div>
		);
	};
}

export default InputDescriptors;







