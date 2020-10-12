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

			</div>
		);
	};
}

export default InputMeasurements;
