import React from 'react';

const DisplayList = ({ todoList, handleDelete, handleCheckbox }) => {
    return (
        <div>
            <h1>Todo List</h1>
            {todoList.map((todo, i) => (
                <div className="d-flex gap-5 justify-content" key={i}>
                    <input
                        type="checkbox"
                        checked={todo.complete}
                        onChange={() => handleCheckbox(i)}
                    />
                    <p style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>{todo.text}</p>
                    <button className="btn btn-outline-danger mx3" onClick={() => handleDelete(i)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default DisplayList;
