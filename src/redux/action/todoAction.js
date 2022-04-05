import {ADD_TODO, DELETE_TODO, DONE, EDIT_TODO } from "../types/todoTypes"

export const done=(id)=>{
return {
    type:DONE,
    payload:id,
}
}


export const deleteTodo=(id)=>{
    return {
        type:DELETE_TODO,
        payload:id,
    }
    }


    export const editTodo=(id,newText)=>{
        return {
            type:EDIT_TODO,
            payload:{
                id,text:newText
            }
        }
        }

        export const addTodo=(text)=>{
            return {
                type:ADD_TODO,
                payload:
                   text
                
            }
            }