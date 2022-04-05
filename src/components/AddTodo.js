import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions/todoActions'

function AddTodo() {
    const [text,setText]=useState('')
    const dispatch=useDispatch()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text){
            dispatch(addTodo(text))
            setText('')
        }   
    }
  return (
    <Form onSubmit={handleSubmit} style={{display:'flex',justifyContent:"center"}}>
        <FormControl value={text} onChange={e=>setText(e.target.value)} type='text'/>
        <Button type='submit' variant='secondary' >
            Add
        </Button>
    </Form>
  )
}

export default AddTodo