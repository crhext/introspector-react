import React from 'react';

class InputBar extends React.Component {

	render() {
		return (
			<div className="input fl w-70">
				<p className='f3'>
					{'Please enter variables that summarise your day. '}
				</p>
				<form onSubmit={this.props.onEnterClick}>
					<div className='pa4 br3 shadow-5 input-bar center '>
						<input className="f4 pa2 w-50 center" type='text' onChange={this.props.onInputChange} type="text" value={this.props.inputField}/>
						<button type="submit"  className="w-30 grow f4 link ph3 pv2 dib white bg-blue">Enter</button>
					</div>
				</form>
			</div>
		);
	};
}

export default InputBar;
