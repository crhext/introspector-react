import React from 'react';
import Mood from './Inputs/Mood';
import Energy from './Inputs/Energy';
import Productivity from './Inputs/Productivity';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';




class InputMeasurements extends React.Component {
	render() {

	const muiTheme = createMuiTheme({
	  overrides:{
	    MuiSlider: {
	      thumb:{
	      color: "#2c387e",
	      },
	      track: {
	        color: '#3f51b5'
	      },
	      rail: {
	        color: '#6573c3'
	      }
	    }
	}})

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

