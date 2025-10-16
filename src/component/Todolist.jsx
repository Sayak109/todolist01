// import React, { useEffect, useState } from "react";
// import "../todolist.css";

// const Todolist = () => {
//   const [todolist, setTodolist] = useState([]);
//   const [opneModal, setOpneModal] = useState(false);
//   const [editTodo, setEditTodo] = useState(null);
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
//       console.log(data);
//       setTodolist(data?.todos);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handelDelete = async (todo_id) => {
//     try {
//       const response = await fetch(`https://dummyjson.com/todos/${todo_id}`, {
//         method: "DELETE",
//       });
//       const data = await response.json();
//       setTodolist((prev) => prev.filter((t) => t.id != todo_id));
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleAddTodo = async (e) => {
//     try {
//       e.preventDefault();
//       console.log(newTodo, "newTodo");

//       const response = await fetch("https://dummyjson.com/todos/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           todo: newTodo?.todo,
//           completed: newTodo?.completed,
//           userId: 5,
//         }),
//       });

//       const data = await response.json();

//       setTodolist((prev) => [data, ...prev]);
//       setOpneModal(false);
//       setNewTodo({ todo: "", completed: false });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleUpdateTodo = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         `https://dummyjson.com/todos/${editTodo.id}`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             todo: newTodo.todo,
//             completed: newTodo.completed,
//           }),
//         }
//       );
//       const data = await response.json();

//       setTodolist((prev) =>
//         prev.map((item) => (item.id === editTodo.id ? data : item))
//       );

//       setEditTodo(null);
//       setOpneModal(false);
//       setNewTodo({ todo: "", completed: false });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleEditClick = (todo) => {
//     setEditTodo(todo);
//     setNewTodo({ todo: todo.todo, completed: todo.completed });
//     setOpneModal(true);
//   };

//   useEffect(() => {
//     fetchTodo(8, 0);
//   }, []);

//   return (
//     <>
//       <div className="todo_wrapper">
//         <button className="btn btn_primary" onClick={() => setOpneModal(true)}>
//           Add new todo
//         </button>
//         <div className="todo_list">
//           {todolist.map((list) => (
//             <div key={list.id} className="todo_container">
//               <h4>
//                 #{list.id} {""}
//                 {list.todo}
//               </h4>
//               <p style={list.completed ? { color: "green" } : { color: "red" }}>
//                 {list.completed ? "Completed" : "Pending"}
//               </p>
//               <div className="">
//                 <button
//                   className="btn btn_edit"
//                   onClick={() => handleEditClick(list)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn_danger"
//                   onClick={() => handelDelete(list.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//         {opneModal && (
//           <div className="modal_backdrop" onClick={() => setOpneModal(false)}>
//             <div className="modal" onClick={(e) => e.stopPropagation()}>
//               <h4>{editTodo ? "Edit Todo" : "Add a new Todo"}</h4>
//               <form onSubmit={editTodo ? handleUpdateTodo : handleAddTodo}>
//                 <div className="form_group ">
//                   <label htmlFor="">Todo:</label>
//                   <input
//                     className="text_field"
//                     type="text"
//                     title="todo"
//                     id="todo"
//                     placeholder="add a todo"
//                     value={newTodo.todo}
//                     required
//                     onChange={(e) =>
//                       setNewTodo({ ...newTodo, todo: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor=""
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "10px",
//                     }}
//                   >
//                     <input
//                       type="checkbox"
//                       value={newTodo.completed}
//                       onChange={(e) =>
//                         setNewTodo({ ...newTodo, completed: e.target.checked })
//                       }
//                     />
//                     Completed
//                   </label>
//                 </div>
//                 <div className="modal_buttons">
//                   <button
//                     className="btn"
//                     type="button"
//                     onClick={() => setOpneModal(false)}
//                   >
//                     cancel
//                   </button>
//                   <button className="btn" type="submit">
//                     {editTodo ? "Edit" : "Add"}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Todolist;

import React, { useEffect, useState } from "react";
import "../todolist.css";

const Todolist = () => {
  const [todolist, setTodolist] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editTodo, setEditTodo] = useState(null);
  const [newTodo, setNewTodo] = useState({
    todo: "",
    completed: false,
  });

  const fetchTodo = async (limit, skip) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();
      console.log(data?.todos);

      setTodolist(data?.todos);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (todo_id) => {
    try {
      const response = await fetch(`https://dummyjson.com/todos/${todo_id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      setTodolist((prev) => prev.filter((t) => t.id != todo_id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTodo = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("https://dummyjson.com/todos/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: newTodo.todo,
          completed: newTodo.completed || false,
          userId: 5,
        }),
      });
      const data = await response.json();
      setTodolist((prev) => [data, ...prev]);
      setOpenModal(false);
      setNewTodo({ todo: "", completed: false });
    } catch (error) {
      console.log(error);
    }
  };
  const handleEdit = (todo) => {
    try {
      console.log(todo, "todo+++");

      setEditTodo(todo);
      setNewTodo({ todo: todo?.todo, completed: todo.completed });
      setOpenModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateTodo = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch(
        `https://dummyjson.com/todos/${editTodo.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            todo: newTodo.todo,
            completed: newTodo.completed,
          }),
        }
      );
      const data = await response.json();
      const updatedTodo = {
        ...editTodo,
        todo: newTodo.todo,
        completed: newTodo.completed,
      };

      setTodolist((prev) =>
        prev.map((item) => (item?.id === editTodo?.id ? updatedTodo : item))
      );
      setNewTodo({ todo: "", completed: false });
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setOpenModal(false),
      setEditTodo(null),
      setNewTodo({ todo: "", completed: false });
  };

  useEffect(() => {
    fetchTodo(8, 0);
  }, []);

  return (
    <div className="todo_wrapper">
      <button className="btn btn_primary" onClick={() => setOpenModal(true)}>
        Add new todo
      </button>
      <div className="todo_list">
        {todolist.map((list) => {
          return (
            <div key={list.id} className="todo_container">
              <h3>
                #{list.id} {list.todo}
              </h3>
              <p
                style={list?.completed ? { color: "green" } : { color: "blue" }}
              >
                {list?.completed ? "Completed" : "Pending"}
              </p>
              <div>
                <button
                  className="btn btn_edit"
                  onClick={() => handleEdit(list)}
                >
                  Edit
                </button>
                <button
                  className="btn btn_delete"
                  onClick={() => handleDelete(list.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {openModal && (
        <div
          className="modal_backdrop"
          onClick={() => {
            handleClose();
          }}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <form
              onSubmit={editTodo ? handleUpdateTodo : handleAddTodo}
              className="modal_form"
            >
              <h3 style={{ display: "flex", justifyContent: "center" }}>
                {editTodo ? "Edit Todo" : "Add a new Todo"}
              </h3>
              <div className="">
                <label htmlFor="" style={{ display: "flex" }}>
                  Todo:{" "}
                </label>
                <input
                  type="text"
                  name="todo"
                  id="todo"
                  title="todo"
                  placeholder="Add a new todo"
                  value={newTodo.todo}
                  required
                  onChange={(e) =>
                    setNewTodo({ ...newTodo, todo: e.target.value })
                  }
                  className="modal_input"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  style={{ display: "flex", gap: "8px", marginBottom: "10px" }}
                >
                  <input
                    type="checkbox"
                    checked={newTodo.completed}
                    onChange={(e) =>
                      setNewTodo({ ...newTodo, completed: e.target.checked })
                    }
                  />
                  Completed
                </label>
              </div>
              <div className="btn_modal">
                <button
                  className="btn"
                  type="button"
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Cancel
                </button>
                <button className="btn" type="submit">
                  {editTodo ? "Edit" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todolist;
