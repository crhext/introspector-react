import React from 'react';
import Descriptors from './Descriptors/Descriptors';
import InputBar from './InputBar/InputBar';


class InputDescriptors extends React.Component {

	titleHandler = (descriptorsType) => {
	    if (descriptorsType == 'activityDescriptors') {
	      return 'Please enter activity variables that summarise your day.'
	    } else if (descriptorsType == 'foodDescriptors') {
	      return 'Please enter food variables that summarise your day.'
	    }   
	}

	descriptorsTypeHandler = (descriptorsType) => {
	    if (this.props.descriptorsType == 'activityDescriptors') {
	      return this.props.activityDescriptors
	    } else if (this.props.descriptorsType == 'foodDescriptors') {
	      return this.props.foodDescriptors
	    }  		
	}

	nextRouteHandler = (descriptorsType) => {
		if (this.props.descriptorsType == 'activityDescriptors') {
		      return this.props.onRouteChange('food')
		    } else if (this.props.descriptorsType == 'foodDescriptors') {
		      return this.props.onRouteChange('measurements')
		    }  		
		}		

	displaySubmit = (descriptorsArray) => {
		if (descriptorsArray.length > 0 || descriptorsArray == undefined) {
			return (
				<button className="f2 grow no-underline br-pill ba ph3 pv2 mb2 white bg-blue" onClick={()=>this.nextRouteHandler(this.props.descriptorsType)}> Next</button>
			)}		
	}

	render() {
		return (
			<div className="center fl w-100 input-container">
				<p className='f3 w-70'>
					{this.titleHandler(this.props.descriptorsType)}
				</p>
				<InputBar descriptors={this.descriptorsTypeHandler(this.props.descriptorsType)} onEnterClick={this.onEnterClick} onInputChange={this.onInputChange} updateDescriptorHandler={this.props.updateDescriptorHandler} descriptorsType={this.props.descriptorsType} />
				<hr></hr>
				<div className="descriptors-container">
					<Descriptors descriptors={this.descriptorsTypeHandler(this.props.descriptorsType)} deleteDescriptorHandler={this.props.deleteDescriptorHandler} descriptorsType={this.props.descriptorsType}/>
				</div>
				<hr></hr>
				<div>
					{this.displaySubmit(this.descriptorsTypeHandler(this.props.descriptorsType))}
				</div>
			</div>
		);
	};
}

export default InputDescriptors;







