import './App.css';
import React, { useState } from 'react';
import DisplayList from './components/DisplayList';
import Form from './components/Form';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {

    if (newTodo.length < 1) {
      return;
    }

    const todoTask = {
      text: newTodo,
      complete: false,
    };

    setTodoList([...todoList, todoTask]);
    setNewTodo('');
  };

  const handleDelete = (delIdx) => {
    const updatedTodoList = todoList.filter((todo, i) => i !== delIdx);
    setTodoList(updatedTodoList);
  };

  const handleCheckbox = (idx) => {
    const updatedTodoList = todoList.map((todo, i) => {
      if (idx === i) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
  };

  return (
    <div className="App offset-4 mx-10 mb-3">
      <Form
        todoList={todoList}
        setTodoList={setTodoList}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleSubmit={handleSubmit}
      />
      <DisplayList
        todoList={todoList}
        handleDelete={handleDelete}
        handleCheckbox={handleCheckbox}
      />
    </div>
  );
}

export default App;

