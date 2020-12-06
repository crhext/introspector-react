import React, { Component } from 'react';
import InputDescriptors from './InputDescriptors/InputDescriptors';
import InputMeasurements from './InputMeasurements/InputMeasurements';
import FirebaseInputs from './FirebaseInputs';
import './Inputs.css';

class Inputs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      route: 'activity',
      activityDescriptors: [],
      foodDescriptors:[],
      mood: 3,
      energy: 3, 
      productivity: 3
    };
  }

	descriptorsTypeHandlerState = (descriptorsType) => {
	  if (descriptorsType === 'activityDescriptors') {
	    return this.state.activityDescriptors
	  } else if (descriptorsType === 'foodDescriptors') {
	    return this.state.foodDescriptors
	  }     
	}

	deleteDescriptorHandler = (descriptorsType, descriptor, event) => {
		event.preventDefault()
		const descriptorsArray = this.descriptorsTypeHandlerState(descriptorsType)
		if (descriptorsArray.indexOf(descriptor) > -1) {
		  const i = descriptorsArray.indexOf(descriptor);
		  descriptorsArray.splice(i,1);
		  this.setState({ [descriptorsType]: descriptorsArray})
		}
	}

	updateDescriptorHandler = (descriptorsType, descriptorsArray) => {
	this.setState({ [descriptorsType]: descriptorsArray})
	}

	updateMeasurementsHandler = (measurement, value) => {
	this.setState( {[measurement]: value})
	}

	onInputsRouteChange = route => {
	this.setState({ route: route})
	}

	firebaseInputsHander = (e) => {
		e.preventDefault();
		let today = new Date().toLocaleDateString('en-GB', {month: '2-digit',day: '2-digit',year: 'numeric'})
		const data = {
			date: today,
			username: this.props.username, 
			activityDescriptors: this.state.activityDescriptors,
			foodDescriptors: this.state.foodDescriptors,
			mood: this.state.mood,
			energy: this.state.energy,
			productivity: this.state.productivity
		}

		const fileName = '/inputs.json'
		FirebaseInputs.post(fileName, data).then(response => {
			console.log(response)
		})

	}

	renderSwitch(param) {
		switch (param) {
			case "activity": 
				return (
					<div>
						<InputDescriptors descriptors={this.state.activityDescriptors} deleteDescriptorHandler={this.deleteDescriptorHandler} updateDescriptorHandler={this.updateDescriptorHandler} descriptorsType='activityDescriptors' onInputsRouteChange={this.onInputsRouteChange} />
					</div>
					);
			case "food": 
				return (
					<div>
						<InputDescriptors descriptors={this.state.foodDescriptors} deleteDescriptorHandler={this.deleteDescriptorHandler} updateDescriptorHandler={this.updateDescriptorHandler} descriptorsType='foodDescriptors' onInputsRouteChange={this.onInputsRouteChange} />
					</div>
					);
			case "measurement": 
				return (
					<div>
           				<InputMeasurements user={this.props.user} updateMeasurementsHandler={this.updateMeasurementsHandler} firebaseInputsHander={this.firebaseInputsHander} onInputsRouteChange={this.onInputsRouteChange}/>
					</div>
					);
			case "submitted": 
				return (
					<div>
           				<h1>Thanks for submitting how you feel today</h1>
					</div>
					);
			default:
				return (
					<div>

					</div>
					);
			}
		}


	render() {
		return (
			<div>
				{this.renderSwitch(this.state.route)}
			</div>
		);
	};
	}

export default Inputs;