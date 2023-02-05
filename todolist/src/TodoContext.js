import React, { useRef, useReducer, createContext, useContext } from 'react';
import ConfirmDialog from './ConfirmDialog';

const initialTodos = [
  {
    id: 1,
    text: '프로젝트 생성하기',
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
];

// 이게 디스패쳐. 
function todoReducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return state.concat(action.todo);
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case 'REMOVE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const TodoStateContext = createContext() ;
const TodoDispatchContext = createContext() ;
const TodoNextIdContext = createContext();

export function TodoProvider({ children }) {
	// 디스패쳐를 등록. 초기 상태, 상태 변수 설정. 
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  // 참조 변수. 
  const nextId = useRef(5) ;

  return (
	<TodoStateContext.Provider value={state}>
		<TodoDispatchContext.Provider value={dispatch}>
			<TodoNextIdContext.Provider value={nextId}>
				{children}
			</TodoNextIdContext.Provider>
		</TodoDispatchContext.Provider>
  	</TodoStateContext.Provider>
  )
}


export function useTodoState() {
	const context = useContext(TodoStateContext);
	if (!context) {
	  throw new Error('Cannot find TodoProvider');
	}
	return context;
  }
  
  export function useTodoDispatch() {
	const context = useContext(TodoDispatchContext);
	if (!context) {
	  throw new Error('Cannot find TodoProvider');
	}
	return context;
  }
  
  export function useTodoNextId() {
	const context = useContext(TodoNextIdContext);
	if (!context) {
	  throw new Error('Cannot find TodoProvider');
	}
	return context;
  }
  
