import logo from './logo.svg';
import './App.css';
import RegForm from './RegForm';
import { useEffect, useState } from 'react';
import AddrList from "./AddrList";
import uuid from 'react-uuid';

function App() {

  const [users, setUsers] = useState([ 
  //{
  //   id: 1,
  //   name: 'asdf',
  //   email: 'abc@abc.com'
  // }, {
  //   id : 2,
  //   name: 'qqqq',
  //   email: 'q@q.com'
  // }
  ]) ;
  

  // 이펙트!!! ; 모니터링대상을 정하고, mount, umount, change 되면, 실행. 값을 추적하기 쉬움. 
  useEffect(() => {
    // 여기서 해야 됨.
    // console.log(users)
  }, [users] )


  // 사용자 추가........
  const addUser = (p) => {
    if ( p.name.length==0 || p.email.length==0 ) {
      alert('data is empty');
      return false ;
    }
    // setUsers( users.concat( {...p, id: users.length.toString()}) )
    setUsers( users.concat( {...p, id: uuid(), active:false }) )
    // 여기서 출력해도 반영되기 전 값이다. 반영된 후 가 아님!!! .
    // console.log(users)
  }

  // 사용자 삭제....
  const removeUser = (p) => {
    console.log('remove this '+p)
    setUsers( users.filter(u => u.id != p)) ;
  }

  // 사용자 선택. 토글 효과
  const onToggleUser = (p) => {
    setUsers( 
      users.map( u => u.id===p ? {...u, active: !u.active} : u )
    )
  
  }

  function countOper() {
    const current = new Date();
    const time = current.toLocaleTimeString("en-US");
    console.log(time, "I'm counting...") ;
    return users.filter( u => u.active==true) .length
  }

  const activeUserCount = countOper()
  
  
  return (
    <div className="App">
      <RegForm insertFunc={addUser}/>
      <AddrList book={users} removeUser={removeUser} onToggleUser={onToggleUser} />
      <div>
      선택 사용자 수 : {activeUserCount}
      </div>
    </div>
  );
}

export default App;
