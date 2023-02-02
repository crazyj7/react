import React from "react";

export default class MyList extends React.Component {

	datalist=[]

	constructor(props) {
		super(props)
		const datas=[1,2,3] ;
		this.datalist = datas.map( (i) =>
			<li key={i.toString()}>{i} 번째</li>
		 ) ;
	}
	
	render() {
		return (
			<div>
				<ul>
					{this.datalist}
				</ul>
				{this.props.children}
			</div>
		) ;
	}


}
