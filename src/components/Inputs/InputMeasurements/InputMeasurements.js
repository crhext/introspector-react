import React from 'react';
import Mood from './Inputs/Mood';
import Energy from './Inputs/Energy';
import Productivity from './Inputs/Productivity';


class InputMeasurements extends React.Component {
	render() {
		return (
			<div className="center fl w-100 input-container">
				<p className='f3'>
					{'Please rate how you felt today'}
				</p>
				<hr></hr>
				<Mood updateMeasurementsHandler={this.props.updateMeasurementsHandler} />
				<hr></hr>
				<Energy updateMeasurementsHandler={this.props.updateMeasurementsHandler} />
				<hr></hr>
				<Productivity updateMeasurementsHandler={this.props.updateMeasurementsHandler} />
				<hr></hr>
				<hr></hr>
				<button className="f2 grow no-underline br-pill ba ph3 pv2 mb2 white bg-blue pa3 nb" onClick={(e) => {this.props.firebaseInputsHander(e)} }> Submit</button>

			</div>
		);
	};
}

export default InputMeasurements;

