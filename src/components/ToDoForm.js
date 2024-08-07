import React from 'react'

const ToDoForm = () => {
  return (
    <form className='ToDoForm'>
      <input type="text" className='todo-input' placeholder='What do you want to do today?' />
      <button type='submit' className='todo-btn'>

      </button>
    </form>
  )
}

export default ToDoForm
