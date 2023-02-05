import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider , useSelector } from 'react-redux';
import CounterButton from './CounterButton';


let initialState = {weight:100}

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

let store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Counter/>
      <CounterButton/>
    </div>
    </Provider>
  );
}

export default App;
