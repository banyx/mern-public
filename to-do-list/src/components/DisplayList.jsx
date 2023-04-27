import React from 'react'

const DisplayList = (todoList) => {
    return (
        <div>
            <h1>Todo List</h1>
            {
                todoList.map((newTodo, i) => {
                    return (
                        <div key={i}>
                            <li>{newTodo}</li>
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default DisplayList