import React, {Component } from 'react';

class MyFormTest extends Component{

    constructor(props) {
        super(props)

        // 바인딩을 해줘야. handleChange 함수에서 this를 사용할 수 있음.
        // this.handleChange = this.handleChange.bind(this)
        // 다른 방법으로는 람다식사용. 변수로 함수를 받음. 
    }

    // 상태 저장소에 2개 초기화. (id, name)
    state ={
        id: '', name: ''
    }

/*     handleChange(e)  {
        // 이 핸들러에서 현재 값을 설정함. 
        this.setState({
            [e.target.name]: e.target.value
        })
    }
 */

     handleChange = (e) => {
        // this 바인딩이 필요없다!!! 
        // 이 핸들러에서 현재 값을 설정함. 
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        // 디폴트 동작 (여기서는 submit)을 막는다. 
        e.preventDefault();
        alert('You clicked submit.');

        // js와는 다르게 여기서 return false 해봐서 default 동작을 못 막는다. 
        // 명시적으로 preventDefault()를 호출해줘야 함. 

    }    

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="아이디"
                    value={this.state.id} onChange={this.handleChange}
                    name="id" />
                <input placeholder="이름"
                    value={this.state.name} onChange={this.handleChange}
                    name="name" />
                <div>{this.state.id} {this.state.name}</div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export {MyFormTest}

