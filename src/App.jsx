import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
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
      {/* <Routes>
        <Route path="/" element={<Todolist />} />
      </Routes> */}
    </div>
  );
}

export default App;
