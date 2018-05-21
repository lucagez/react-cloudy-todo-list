import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import TimeInput from 'react-time-input';
 

class TimeWrapper extends Component {
	onTimeChangeHandler(val) {
   	
		// do something with this value
		
	},
  
	render() {
		return (
			<TimeInput
				initTime='11:12'
				ref="TimeInputWrapper"
				className='form-control'
				mountFocus='true'
				onTimeChange={this.onTimeChangeHandler}
			/>
		);
	}	
}

export default TimeInput;

// var TimeWrapper = React.createClass({
 
 
//    onTimeChangeHandler: function (val) {
   	
//    	// do something with this value
   	
//    },
 
//    render: function() {
//    	return (
//    		<TimeInput
//    			initTime='11:12'
//    			ref="TimeInputWrapper"
//    			className='form-control'
//    			mountFocus='true'
//    			onTimeChange={this.onTimeChangeHandler}
//    		/>
//    	);
//    }
// });
 
 
// export class App extends React.Component {
//    render() {
//    	return (
//    			<TimeWrapper/>
//    	);
//    }
// }
 
// ReactDOM.render(<App/>, document.querySelector("#myApp"));