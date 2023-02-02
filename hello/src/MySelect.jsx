import React, { useState } from "react";

export default class MySelect extends React.Component {

	data=['apple', 'banana', 'orange']

	state = { fruit : 'apple'} ;

	constructor(props) {
		super(props);
		// const [fruit, setFruit] = useState('apple') ;  // 헐.. useState()는 함수형에서만 사용 가능. 
		// Component에서는 사용 불가했었네... 
	}

	fruitChange = (e) => {
        this.setState({
            fruit: e.target.value
        })	
	}
		
	handleSubmit = (e) => {
		alert('Your favorite flavor is: ' + this.state.fruit);
		e.preventDefault();
	}		

	render() {
		return (
			<div>
				  <form onSubmit={this.handleSubmit}>
					<label> Pick Fruite: 
						<select value={this.state.fruit} onChange={this.fruitChange}>
							{this.data.map( (item) => 
							<option key={item} value={item}>{item}</option>
							)}
						</select>
						: {this.state.fruit}
					</label>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}

}

