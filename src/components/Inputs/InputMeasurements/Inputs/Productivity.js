import React from 'react';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

class Productivity extends React.Component {

	handleChange = (e, value) => {
	this.props.updateMeasurementsHandler('productivity', value)
	};

	render() {

	const muiTheme = createMuiTheme({
	  overrides:{
	    MuiSlider: {
	      thumb:{
	      color: "#727474",
	      },
	      track: {
	        color: '#A4AAAB'
	      },
	      rail: {
	        color: '#CCD6DA'
	      }
	    }
	}})

	  return (
	    <div className="w-60">
	    	<div className="pa3 f3"> Productivity </div>
		    <div className="w-100 ba  productivity br-pill">
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

export default Productivity;