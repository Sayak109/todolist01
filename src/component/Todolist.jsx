import React, { useEffect, useState } from "react";

const Todolist = () => {
  const [todolist, setTodolist] = useState([]);

  const fetchTodo = async (limit, skip) => {
    try {
      const response = await fetch(
        `https://dummyjson.com/todos?limit=${limit}&skip=${skip}`
      );
      const data = await response.json();
      setTodolist(data?.todos);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const delTodo = await fetch(`https://dummyjson.com/todos/${id}`, {
        method: "DELETE",
      });
      //   fetchTodo(6, 0);
      const data = await delTodo.json();
      console.log("Deleted:", data);

      setTodolist((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodo(6, 0);
  }, []);

  return (
    <div className="todos-wrapper">
      {todolist.map((todo) => (
        <div className="todo_container" key={todo.id}>
          <div className="todos">
            <h1>
              #{todo.id} Todo: {todo.todo}
            </h1>
            <p
              className={todo.completed ? "text-green-500" : "text-yellow-500"}
            >
              {todo.completed ? "Completed" : "Pending"}
            </p>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
