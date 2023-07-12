import { FaTrash } from "react-icons/fa";


const SingleTodo = ({ todoInfo,handleDeleteTodo ,index}) => {
  const { todo, _id } = todoInfo;
  
  // console.log(todoInfo);

  return (
    
      <div className="flex items-center  gap-3 ">
        <p className=" p-4 bg-slate-100 text-sky-500  text-xl font-medium rounded-full">{index+1}</p>
        <p className="px-6 py-2 w-44 md:w-72 bg-slate-100 text-gray-500  text-xl font-medium rounded">{todo}</p>
        <button
          onClick={() => handleDeleteTodo(_id)}
          className="btn btn-error btn-sm "
        >
         <FaTrash></FaTrash>
        </button>
      </div>
      
  );
};

export default SingleTodo;
