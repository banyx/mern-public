import React from 'react';

const Form = ({ todoList, setTodoList, newTodo, setNewTodo, handleSubmit }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTodo === '') {
      return;
    }
    handleSubmit(newTodo);
    setNewTodo('');
  };

  return (
    <div>
      <h1>Add Todo</h1>
      <form onSubmit={handleFormSubmit} className="mb-3">
        <label htmlFor="newTodo">New Todo:</label>
        <input
          type="text"
          id="newTodo"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button className="btn btn-outline-success mx-3">Add</button>
      </form>
    </div>
  );
};

export default Form;