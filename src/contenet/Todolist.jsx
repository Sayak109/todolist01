// import React, { useEffect, useState } from "react";

// const Todolist = () => {
//   const [todolist, setTodolist] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [newTodo, setNewTodo] = useState({
//     todo: "",
//     completed: false,
//   });

//   const fetchTodo = async (limit, skip) => {
//     try {
//       const response = await fetch(
//         `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
//       );
//       const data = await response.json();
//       setTodolist(data?.todos);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const delTodo = await fetch(`https://dummyjson.com/todos/${id}`, {
//         method: "DELETE",
//       });
//       const data = await delTodo.json();
//       setTodolist((prev) => prev.filter((t) => t.id !== id));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleAddTodo = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("https://dummyjson.com/todos/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           todo: newTodo.todo,
//           completed: newTodo.completed,
//           userId: 5,
//         }),
//       });
//       const data = await response.json();
//       setTodolist((prev) => [data, ...prev]);
//       setShowModal(false);
//       setNewTodo({ todo: "", completed: false });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchTodo(6, 0);
//   }, []);

//   return (
//     <div className="todos-wrapper">
//       <button className="btn btn-primary" onClick={() => setShowModal(true)}>
//         Add Todo
//       </button>
//       <div className="todo_list">
//         {todolist.map((todo) => (
//           <div className="todo_container" key={todo.id}>
//             <h4>
//               #{todo.id} Todo: {todo.todo}
//             </h4>
//             <p style={todo.completed ? { color: "green" } : { color: "red" }}>
//               {todo.completed ? "Completed" : "Pending"}
//             </p>
//             <button
//               className="btn btn-danger"
//               onClick={() => handleDelete(todo.id)}
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>

//       {showModal && (
//         <div className="modal-backdrop" onClick={() => setShowModal(false)}>
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <h2>Add New Todo</h2>
//             <form onSubmit={handleAddTodo}>
//               <div className="form-group">
//                 <label>Todo:</label>
//                 <input
//                   type="text"
//                   value={newTodo.todo}
//                   onChange={(e) =>
//                     setNewTodo({ ...newTodo, todo: e.target.value })
//                   }
//                   required
//                 />
//               </div>

//               <div className="form-group checkbox">
//                 <label>
//                   <input
//                     type="checkbox"
//                     checked={newTodo.completed}
//                     onChange={(e) =>
//                       setNewTodo({ ...newTodo, completed: e.target.checked })
//                     }
//                   />
//                   Completed
//                 </label>
//               </div>

//               <div className="modal-actions">
//                 <button type="submit" className="btn btn-primary">
//                   Add
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   onClick={() => setShowModal(false)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Todolist;

import React, { useEffect, useState } from "react";

const Todolist = () => {
  const [todoList, setTodoList] = useState([]);

  const fetchTodo = async (limit, skip) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodo(8, 0);
  }, []);

  return (
    <>
      <div>Todo list</div>
    </>
  );
};

export default Todolist;
