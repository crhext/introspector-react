import React from 'react';
import Descriptor from "./Descriptor.js";



class Descriptors extends React.Component {

	render() {	
	return (
		<div>
			{this.props.descriptors.map(i => {
				return (
					<Descriptor descriptor={i} descriptors={this.props.descriptors} />
				);
			})}
		</div>
	);
};
};

export default Descriptors;









