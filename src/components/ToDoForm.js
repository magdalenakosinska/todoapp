import React, {useState} from 'react'

const ToDoForm = ({addTodo}) => {

    const [value, setValue] = useState("")

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)
        setValue("")
    }

  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value= {value} placeholder='What do you want to do today?' onChange={handleChange}/>

      <button type='submit' className='todo-btn'>
        Add Task
      </button>
    </form>
  )
}

export default ToDoForm
