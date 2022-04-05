import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

function ListTodos() {
    const todos=useSelector(state=>state.todoReducer.todos)
    console.log(todos)
  return (
    <div >
                <h1 style={{display:'flex',justifyContent:'center'}} >Todo App</h1>

        {todos.map(todo=><Todo key={todo.id} todo={todo} />)}
       
    </div>
  )
}

export default ListTodos