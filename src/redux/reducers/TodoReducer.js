import { ADD_TODO,DELETE_TODO, DONE, EDIT_TODO } from "../types/todoTypes";

const initialeState={
    todos:[ 
       { id:1,
        text:"learn js" ,
        done:false
    },
        { id:2,
            text:"learn html" ,
            done:false
        }

    ]
}
function todoReducer(state=initialeState,action){

 switch(action.type){
     case DONE:
         return {...state,todos:state.todos.map(todo=>todo.id===action.payload?{...todo,done:!todo.done}:todo)} 
     case DELETE_TODO:
         return {...state,todos:state.todos.filter(todo=>todo.id!==action.payload)}     

    case EDIT_TODO:
         return {...state,todos:state.todos.map(todo=>todo.id===action.payload.id?{...todo,text:action.payload.text}:todo)}   
    case ADD_TODO : 
        return {...state,todos:[...state.todos,{id:Math.random(),done:false,text:action.payload}]}
     default : return state
 }

}
export default todoReducer;