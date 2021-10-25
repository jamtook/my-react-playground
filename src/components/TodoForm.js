import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');
    //lets you type something in the box
    const handleChange = e => {
        setInput(e.target.value);
    };
    //keep todo list from refreshing
    const handleSubmit = e => {
        e.preventDefault();
        //when submitting, you get a random id
        // props.onSubmit({
        //     id: Math.floor(Math.random() * 10000), 
        //     text: input
        // });

        //makes the input in box vanish after hitting enter
        setInput('');
    }
    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Add a todo" 
                    value={input} 
                    name="text" 
                    className="todo-input"
                    onChange={handleChange}
                />
                <button className="todo-button">Add todo</button>
            </form>
        </div>
    )
}

export default TodoForm
