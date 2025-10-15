import { useState } from "react";
import "./App.css";
import Todolist from "./component/Todolist";

function App() {
  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "black",
        }}
      >
        Todo List
      </h1>
      <Todolist />
    </div>
  );
}

export default App;
