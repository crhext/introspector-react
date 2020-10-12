import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'


class Descriptor extends React.Component {

	
	render() {	
	return (
		<div className="descriptor-container descriptor">
			<p className=" f3 ba b--solid bw1 br-pill b--black background-colour"> {this.props.descriptor} </p>
			<div className="descriptor-inner cross pointer" onClick={(event)=>this.props.deleteDescriptorHandler(this.props.descriptorsType, this.props.descriptor, event)} >
				<FontAwesomeIcon  icon={faTimesCircle} color="black" />
			</div>
		</div>
	);
};
};

export default Descriptor;



