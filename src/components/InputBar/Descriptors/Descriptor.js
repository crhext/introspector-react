import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import './Descriptor.css';

class Descriptor extends React.Component {
	
	deleteHandler = (descriptor, event) => {
		event.preventDefault()
		const descriptors = this.props.descriptors
		if (descriptors.indexOf(descriptor) > -1) {
			const descriptorsArray = this.props.descriptors;
			const i = descriptorsArray.indexOf(descriptor);
			descriptorsArray.splice(i,1);
			this.setState({ descriptors: descriptorsArray})
		}
	}

	render() {	
	return (
		<div className="descriptor-container descriptor">
			<p className=" f3 ba b--solid bw1 br-pill b--black background-colour"> {this.props.descriptor} </p>
			<div className="descriptor-inner cross pointer" onClick={(event)=>this.deleteHandler(this.props.descriptor, event)} >
				<FontAwesomeIcon  icon={faTimesCircle} color="black" />
			</div>
		</div>
	);
};
};

export default Descriptor;



