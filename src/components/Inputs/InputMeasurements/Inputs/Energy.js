import React from 'react';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

class Energy extends React.Component {

	handleChange = (e, value) => {
	this.props.updateMeasurementsHandler('energy', value)
	};

	render() {

	const muiTheme = createMuiTheme({
	  overrides:{
	    MuiSlider: {
	      thumb:{
	      color: "#1769aa",
	      },
	      track: {
	        color: '#2196f3'
	      },
	      rail: {
	        color: '#4dabf5'
	      }
	    }
	}
	});

	  return (
	    <div className="w-60">
	    	<div className="pa3 f3 "> Energy </div>
		    <div className="w-100 ba bw2 b--dark-blue energy br-pill">
			    <div className="w-90 center pa3">
			    <ThemeProvider theme={muiTheme}>
			      <Slider className="w-90"
			        defaultValue={3}
			        onChange={this.handleChange} 
			        step={1}
			        marks
			        min={1}
			        max={5}
			      />
			     </ThemeProvider>
		    </div>
		    </div>
	    </div>
	  );
	}

};

export default Energy;