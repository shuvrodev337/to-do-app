import { useContext, useState } from "react";
import SingleTodo from "../SingleTodo/SingleTodo";
import { AuthContext } from "../../Providers/AuthProvider";

const TodoList = () => {
const {user,
    loading,
    createUser, 
    signIn,
    googleSignIn,
    passwordReset, 
    logOut} = useContext(AuthContext)

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
            <div className="text-center">
            <form onSubmit={handleAddTodo} className="space-x-2">
            <input type="text" placeholder="Type here" name="newTodo" className="input input-bordered input-accent w-full max-w-xs" />
            <input type="submit" className="btn btn-primary" value="Add" />
            </form>
            </div>
            <h1 className="text-3xl mx-auto my-6 text-center">This is todo list</h1>
            <div className="space-y-4">
                {
                    todos.map((todo, i)=><SingleTodo todo={todo} key={i}></SingleTodo>)
                }
            </div>
        </div>
    );
};

export default TodoList;