import { useContext, useEffect, useState } from "react";
import SingleTodo from "../SingleTodo/SingleTodo";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const TodoList = () => {
const {user,
    loading,
    } = useContext(AuthContext)

const [todos, setTodos] = useState([])


useEffect(()=>{

    axios.get(`http://localhost:3000/todos?email=${user?.email}`)
    .then(res=>{
        // console.log(res.data);
        setTodos(res.data)
    })
},[user,todos])


    const handleAddTodo = (event)=>{

        event.preventDefault()
        const newTodo =  event.target.newTodo.value
        // console.log(newTodo);
        // const updatedTodos = [...todos, newTodo]
        // setTodos(updatedTodos)


        const savedTodo = {
            todo: newTodo,
            email: user.email,
          }; 
          axios.post("http://localhost:3000/todos",savedTodo)
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
            //   reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Added todo",
                showConfirmButton: false,
                timer: 2000,
              });
            
            }
          })
          .catch((error) => {
            console.log(error.message);
            
          });
    }
    // console.log(todos);

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
                    todos.map((todoInfo)=><SingleTodo todoInfo={todoInfo} key={todoInfo._id}></SingleTodo>)
                }
            </div>
        </div>
    );
};

export default TodoList;