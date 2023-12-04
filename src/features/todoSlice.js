import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    textInp: '',
    todo: []
}

export const todoApp = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            console.log(state);
            console.log(action);
        },
        deleteTodo: (state,action) => {
            console.log(state);
            console.log(action);
        }
    }
})

export const {addTodo, deleteTodo} = todoApp.actions

export default todoApp.reducer