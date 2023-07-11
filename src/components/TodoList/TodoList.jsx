import { useState } from "react";

const TodoList = () => {
const [todos, setTodos] = useState([])
    const handleAddTodo = (event)=>{

        event.preventDefault()
        const newTodo =  event.target.newTodo.value
        console.log(newTodo);
        const updatedTodos = [...todos, newTodo]
        setTodos(updatedTodos)
    }
        return (
        <div>
            <div>
            <form onSubmit={handleAddTodo} className="space-x-2">
            <input type="text" placeholder="Type here" name="newTodo" className="input input-bordered input-accent w-full max-w-xs" />
            <input type="submit" className="btn btn-primary" value="Add" />
            </form>
            </div>
            <div>
            <h1 className="text-3xl mx-auto my-6">This is todo list</h1>
                {
                    todos.map((todo, i)=><li key={i}>{todo}</li>)
                }
            </div>
        </div>
    );
};

export default TodoList;