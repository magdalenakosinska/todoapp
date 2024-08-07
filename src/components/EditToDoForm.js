import React, {useState} from 'react'

const EditToDoForm = ({editTodo, task}) => {

    const [value, setValue] = useState(task.task)

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        editTodo(value, task.id)
      
    }

  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value= {value} placeholder='Update Task' onChange={handleChange}/>

      <button type='submit' className='todo-btn'>
        Update Tasks
      </button>
    </form>
  )
}
export default EditToDoForm
