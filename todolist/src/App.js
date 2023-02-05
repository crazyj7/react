import logo from './logo.svg';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './TodoTemplate';
import TodoHead from './TodoHead';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';
import { TodoProvider } from './TodoContext';

import Users from './Users';
import Player from './Player';


const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;


function App() {

  return (
    <>
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
    <Player/>
    <Users/>
    </>
  );
}

export default App;
