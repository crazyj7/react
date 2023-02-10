import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider , useSelector } from 'react-redux';
import CounterButton from './CounterButton';
import OldCounter from './OldCounter';


let initialState = {weight:100}

// 액션 별로 새로운 state (리턴값) 를 설정한다. 
function reducer(state=initialState, action) {
  switch(action.type) {
    case 'increase':
      return { ...state, 
        weight:state.weight+parseInt(action.payload.diff) }
    case 'decrease':
      return { ...state, 
        weight:state.weight-parseInt(action.payload.diff) }
      case 'set':
        return { ...state, weight: parseInt(action.payload.weight) }
    default:
      return state ;
  }
}

// 리듀서로 스토어를 만든다. 
let store = createStore(reducer)

function App() {
  // 프로바이더 스토어를 지정한다. 
  return (
    <Provider store={store}>
    <div className="App">
      OldCOunter: (useState)
      <OldCounter/>
      <hr></hr>
      NewCounter: (Reducer)
      <Counter/>
      <CounterButton/>
    </div>
    </Provider>
  );
}

export default App;
