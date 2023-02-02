import React from 'react';

class Clock extends React.Component {
// 이때 클래스 컴포넌트는 항상 props로 기본 constructor를 호출해야 합니다.
	constructor(props) {
		super(props);
		this.state = {date: new Date()};
	}

	componentDidMount() {
		// 시작시, 주기적 실행 예약. tick 호출.
		this.timerID = setInterval(
			() => this.tick(),
			1000
		  );
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		// 상태 업데이트. 
		this.setState({
		  date: new Date()
		});
	  }

	render() {
		// 주의 리턴시 루트 태그는 한 개로 되어 있어야 함. 따로 없으면 <> </> 이것으로 감싸야 함. 
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

export default Clock ;
