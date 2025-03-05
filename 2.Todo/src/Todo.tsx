import React, {useState, ChangeEvent, MouseEvent} from "react";

function generateId(): number {
    return Math.floor(Math.random() * 100)
}
interface TodoItem {
    text: string;
    id: number;
}
function Todo () {
    const [todo, setTodo] = useState<Array<string>>([])
    const [input, setInput] = useState<string>('')

    const handleSubmit = (e: MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        setTodo((todo) => todo.concat({
            text: input,
            id: generateId(),
        }))

        setInput("");
    }

    const removeTodo = (id: number):void => 
        setTodo((todo) => todo.filter((t) => t.id !== id));

    return (
        <div className="contianer">
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="New Todo"
             />

             <button onClick={handleSubmit} onSubmit={handleSubmit}>Submit</button>

             <ul className="todos-list">
                {todo.map(({text, id}) => (
                    <li key={id} className="todo">
                        <span>{text}</span>
                        <button className="close" onClick={() => removeTodo(id)}>
                            X
                        </button>
                    </li>
                ))}

             </ul>
        </div>
    )
}

export default Todo;