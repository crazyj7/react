import React from 'react';
import styled from 'styled-components';
import { useTodoState, useTodoDispatch } from './TodoContext';
import TodoItem from './TodoItem';
import ConfirmDialog from './ConfirmDialog';
import { useState } from 'react';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
// background: gray; /* 사이즈 조정이 잘 되고 있는지 확인하기 위한 임시 스타일 */

function TodoList() {
	const todos = useTodoState() ;
	const dispatch = useTodoDispatch() ;

	const [confirmOpen, setConfirmOpen] = useState(false) ;
	const [confirmValue, setConfirmValue] = useState(-1) ;
	const onConfirm = () => {
		console.log('onConfirm: ', confirmValue) ;
		dispatch({ type: 'REMOVE', id: confirmValue });
	}

  return (
	<>
		<ConfirmDialog
		title="Delete Post?"
		open={confirmOpen}
		setOpen={setConfirmOpen}
		onConfirm={onConfirm}
		confirmValue={confirmValue}
		>
		Are you sure you want to delete this post?
		</ConfirmDialog>
		<TodoListBlock>
			{
				todos.map( todo => (
					<TodoItem key={todo.id} 
						id={todo.id}
						text={todo.text} 
						done={todo.done}
						onConfirm={onConfirm}
						setConfirmOpen={setConfirmOpen}
						setConfirmValue={setConfirmValue}
					/>
				) )
			}
	</TodoListBlock>
	</>
  )
}

export default TodoList;
