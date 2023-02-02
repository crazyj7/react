import React from "react"

class MyToggle extends React.Component {
	// 생성자가 없습니다
//	state = {isToggleOn: true};
	// 위와 같이 하거나... 

	constructor(props) {
		super(props);
		console.log(props)
		// this.state = {isToggleOn: true};
		// 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
		this.handleClick = this.handleClick.bind(this);
	  }
	
  
	// 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
	// 주의: 이 문법은 *실험적인* 문법입니다.
	handleClick = () => {
		this.props.setToggle( this.props.toggle ? false : true ) ;
	//    this.setState(prevState => ({
	// 	isToggleOn: !prevState.isToggleOn
	//   }));
	}
  
	render() {
//		{this.state.isToggleOn ? 'ON' : 'OFF'}
		return (
		<button onClick={this.handleClick}>
		   {this.props.toggle ? 'ON' : 'OFF'}
		</button>
	  );
	}
  }

  export default MyToggle ;
  