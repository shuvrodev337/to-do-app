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

    axios.get(`https://todo-app-server-three.vercel.app/todos?email=${user?.email}`)
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
          axios.post("https://todo-app-server-three.vercel.app/todos",savedTodo)
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              event.target.reset();
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
    // console.log(todos); https://todo-app-server-three.vercel.app/
    const handleDeleteTodo = (id) => {
        axios.delete(`https://todo-app-server-three.vercel.app/todos/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            //   refetch()
            Swal.fire({
              position: "center",
              icon: "success",
              title: `todo deleted from list !!`,
              showConfirmButton: false,
              timer: 1500,
            });
            const updatedTodoList = todos.filter(todo=>todo._id !== id)
            setTodos(updatedTodoList)
          }
        });
      };
        return (
        <div>
            {/* <div > */}
            <form onSubmit={handleAddTodo} className="text-center flex flex-col items-center md:flex-row gap-4 justify-center" >
            <input type="text" placeholder="Add Your New Todo" name="newTodo" className="input input-bordered input-info w-full max-w-xs" />
            <input type="submit" className="btn btn-accent" value="Add" />
            </form>
            {/* </div> */}
            <h1 className="text-3xl mx-auto my-6 text-center font-bold ">My todo list</h1>
            <div className="flex flex-col items-center justify-center gap-4 my-6">
                {
                    todos.map((todoInfo,index)=><SingleTodo todoInfo={todoInfo} index={index} handleDeleteTodo={handleDeleteTodo} key={todoInfo._id}></SingleTodo>)
                }
            </div>
        </div>
    );
};

export default TodoList;