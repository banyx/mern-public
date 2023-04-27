import './App.css';
import React, { useState } from 'react';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(newTodo);
    
    if (newTodo.length < 1) {
      return;
    }
    
    const todoTask = {
      text: newTodo,
      complete: false
    };
    
    setTodoList([...todoList,todoTask]);
    setNewTodo("");
  }

  const handleDelete = (delIdx) => {
    const updatedTodoList = todoList.filter((newTodo,i) => {
      return i !== delIdx;
    });
    setTodoList(updatedTodoList);
  }

  const handleCheckbox = (idx) => {
    const updateCheckbox = todoList.map((newTodo,i) => {
      if (idx === i) {
        newTodo.complete = !newTodo.complete;
      }
      return newTodo;
    })
    setTodoList(updateCheckbox);
  }

  return (
    <div className="App offset-4 mx-10 mb-3">
      <form onSubmit={handleSubmit} className="my-5">
        <input type="text" id="newTodo" onChange={(e) => { setNewTodo(e.target.value); }} value={newTodo}/>
        <button className="btn btn-outline-success mx-3">Add</button>
      </form>
        {todoList.map((newTodo, i) => {
          return (
            <div className="d-flex gap-3 my-3">
                {newTodo.complete ? (
                  <input style={{textDecoration:"line-through"}} type="checkbox" checked={newTodo.complete} onChange={(e) => {handleCheckbox(i);}}/>
                ) : (
                  <input type="checkbox" checked={newTodo.complete} onChange={(e) => {handleCheckbox(i);}}/>
                )
                }
                <p key={i}>{newTodo.text}</p>
                <button className="btn btn-outline-danger mx3" onClick={(e) => {handleDelete(i);}}>Delete</button>
            </div>
          )
        }
        )}
    </div>
  );
}

export default App;
