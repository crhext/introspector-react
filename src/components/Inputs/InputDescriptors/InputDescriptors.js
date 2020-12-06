import React from 'react';
import Descriptors from './Descriptors/Descriptors';
import InputBar from './InputBar/InputBar';


class InputDescriptors extends React.Component {

	titleHandler = (descriptorsType) => {
	    if (descriptorsType === 'activityDescriptors') {
	      return 'Please enter activity variables that summarise your day.'
	    } else if (descriptorsType === 'foodDescriptors') {
	      return 'Please enter food variables that summarise your day.'
	    }   
	}

	nextRouteHandler = (descriptorsType) => {
		switch (descriptorsType) {
			case "activityDescriptors": 
				return this.props.onInputsRouteChange('food')
			case "foodDescriptors": 
				return this.props.onInputsRouteChange('measurement')
			default:
				return ''
		}
	}	

	displaySubmit = (descriptorsArray) => {
		if (descriptorsArray.length > 0 || descriptorsArray === undefined) {
			return (
				<button className="nb f2 grow no-underline br-pill ba ph3 pv2 mb2 white bg-blue" onClick={()=>this.nextRouteHandler(this.props.descriptorsType)}> Next</button>
			)}		
	}

	render() {
		return (
			<div className="center fl w-100 input-container">
				<p className='f3 w-70'>
					{this.titleHandler(this.props.descriptorsType)}
				</p>
				<InputBar descriptors={this.props.descriptors} onEnterClick={this.onEnterClick} onInputChange={this.onInputChange} updateDescriptorHandler={this.props.updateDescriptorHandler} descriptorsType={this.props.descriptorsType} />
				<hr></hr>
				<div className="descriptors-container">
					<Descriptors descriptors={this.props.descriptors} deleteDescriptorHandler={this.props.deleteDescriptorHandler} descriptorsType={this.props.descriptorsType}/>
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







