
const SingleTodo = ({todoInfo}) => {
const {todo} = todoInfo 
// const handleDelete  = 
// console.log(todoInfo);
    return (
        <div className="grid grid-cols-2 gap-4">
            <p className="text-center mx-auto w-1/2 bg-gray-400 rounded-xl">{todo}</p>
            <div className="flex gap-2">
            <button  className="btn btn-error btn-sm">Delete</button>
            <button className="btn btn-success btn-sm">Complete</button>
            </div>
            
        </div>
    );
};

export default SingleTodo;