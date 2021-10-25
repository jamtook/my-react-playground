import React, {useState} from 'react'

function TodoList() {
    const [input, setInput] = useState('')
    return (
        <div>
            <form className="todo-form">
                <input 
                    type="text" 
                    placeholder="Add a todo" 
                    value={input} 
                    name="text" 
                    className="todo-input"
                />
                <button className="todo-button">Add</button>
            </form>
        </div>
    )
}

export default TodoList
