import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';



class Mood extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	      mood: 3
	    };
	  }


	onSlideChange = value => {
		this.setState({mood: value})
	}

	handleChange = (e, value) => {
	this.setState({
	  mood: value 
	});
	};


	render() {

	const muiTheme = createMuiTheme({
	  overrides:{
	    MuiSlider: {
	      thumb:{
	      color: "#357a38",
	      },
	      track: {
	        color: 'green'
	      },
	      rail: {
	        color: '#6fbf73'
	      }
	    }
	}
	});

	  return (
	    <div className="w-60">
		    <div className="w-100 ba bw2 b--dark-green mood">
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




export default Mood

