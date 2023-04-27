import React from 'react'

const Form = (todoList, setTodoList, newTodo, setNewTodo) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if(newTodo !== "") return;
        setTodoList([...todoList,newTodo]);
        setNewTodo("");
    }
  return (
    <div>
        <h1>Add Todo</h1>
        <form onSubmit={handleSubmit} className="mb-3">
            <input type="text" id="newTodo" onChange={(e) => {setNewTodo(e,e.target.value);}}/>
            <button className="btn btn-outline-success mx-3">Add</button>
        </form>
    </div>
  )
}

export default Form