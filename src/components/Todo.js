import React from 'react'
import { Button } from 'react-bootstrap';

import { useDispatch } from 'react-redux';
import { deleteTodo, done } from '../redux/actions/todoActions';
import EditTodo from './EditTodo';

function Todo({todo}) {

const dispatch=useDispatch()

  return (
    <div style={{display:'flex',justifyContent:'center', padding:'100px'}}>
        <p style={{textDecoration:todo.done ?"line-through":null }}>{todo.text}</p>

        <Button  variant='success'onClick={()=>dispatch(done(todo.id))}>done</Button>
        <Button variant='danger' onClick={()=>dispatch(deleteTodo(todo.id))}>delete</Button>
        <EditTodo todo={todo}/>
    </div>
  )
}

export default Todo ;