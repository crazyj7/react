import logo from './logo.svg';
import './App.css';
import MyCount from './MyCount';
import Clock from './Clock';
import {MyFormTest as MyFormTest2} from './MyFormTest';
import MyToggle from './MyToggle';
import MyGreeting from './MyGreeting';
import { useState } from 'react';
import MyList from './MyList';
import MySelect from './MySelect';
import MyTextArea from './MyTextArea';

function App() {
  // 함수형에서는 이렇게 useState를 사용할 수 있다. 
  const [toggle, setToggle] = useState(false) ;

  return (
    <div className="App">
      <MyCount/>
      <Clock/>
      <MyFormTest2/>
      {/* JSX에서 주석을 달 때는 이렇게... 
        상태는 child로만 전달이 가능함... 
        따라서 sibling간 전달이 필요하면??? parent에 상태를 넣고, sibling 들에게 전달해 준다.
        상태를 변경하려면??? 상태변경 함수를 넘겨준다!!! 
      */}
      <MyToggle toggle={toggle} setToggle={setToggle} />
      <MyGreeting toggle={toggle} />

      {/* 상태에 따른 show/hide */}
      {toggle && <h3>반갑습니다.</h3>}
      <MyList/>
      <MySelect> 
        <span>차일드를 props에서 받아서 사용할 수 있다.</span>
      </MySelect>
      <MyTextArea/>
      
    </div>
  );
}

export default App;
