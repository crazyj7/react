import React from "react"

export default class MyGreeting  extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<h1>greeting  {this.props.toggle.toString()} </h1>
		)
	}
	 
}
