import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Todo = () => {
    const todoInp = useSelector((state) => state.todoApp.textInp)
    const todoArr = useSelector((state) => state.todoApp.todo)
    const dispatch = useDispatch();
    
  return (
    <div>
        <input type="text" value={todoInp} onChange={() => dispatch()} />
    </div>
  )
}

export default Todo