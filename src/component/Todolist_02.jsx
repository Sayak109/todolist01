// import React, { useState } from "react";
// import TodoList from "./todoList";

// const Todolist = () => {
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [delidx, setDelidx] = useState(null);
//   const [newTodo, setNewTodo] = useState({
//     title: "",
//     completed: false,
//     deadline: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setNewTodo((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleAddTodo = () => {
//     const newEntry = {
//       ...newTodo,
//       deadline: new Date(newTodo.deadline),
//     };
//     TodoList.push(newEntry);
//     setShowAddModal(false);
//   };

//   const deleteTodo = (idx) => {
//     TodoList.splice(idx, 1);
//     setShowDeleteModal(false);
//   };

//   return (
//     <div className="todos">
//       <div className="header">
//         <button
//           className="add-btn"
//           onClick={() => {
//             setShowAddModal(true);
//           }}
//         >
//           Add Todo
//         </button>
//       </div>
//       <div className="todo_list">
//         {TodoList.map((todo, index) => (
//           <div className="common_todo" key={index}>
//             <h3>
//               <span>#{index + 1}</span> {todo.title}
//             </h3>
//             <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
//             <p>Deadline: {todo.deadline.toLocaleString()}</p>
//             <button
//               className="delete-btn"
//               onClick={() => {
//                 setShowDeleteModal(true);
//                 setDelidx(index);
//               }}
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>

//       {showAddModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <h2>Add a new todo</h2>
//             <label htmlFor="">Todo title: </label>
//             <input
//               type="text"
//               placeholder="Todo title"
//               name="title"
//               value={newTodo.title}
//               onChange={handleChange}
//             />
//             <label>
//               <label htmlFor="">Completed: </label>
//               <input
//                 type="checkbox"
//                 name="completed"
//                 checked={newTodo.completed}
//                 onChange={handleChange}
//               />
//             </label>
//             <label htmlFor="">Deadline: </label>
//             <input
//               type="date"
//               name="deadline"
//               value={newTodo.deadline}
//               onChange={handleChange}
//             />
//             <div className="modal-buttons">
//               <button onClick={handleAddTodo}>Save</button>
//               <button
//                 onClick={() => {
//                   setShowAddModal(false);
//                 }}
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//       {showDeleteModal && (
//         <div className="modal">
//           <div className="modal-contant">
//             <h1>Are you sure you want to delete this record?</h1>
//             <div className="modal-buttons">
//               <button
//                 onClick={() => {
//                   setShowDeleteModal(false);
//                 }}
//               >
//                 Cancle
//               </button>
//               <button onClick={deleteTodo(delidx)}>Delete</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Todolist;
