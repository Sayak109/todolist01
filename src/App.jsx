import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Todolist from "./component/Todolist";

function App() {
  return (
    <div>
      <h1>Todo List Page</h1>
      <Routes>
        <Route path="/todos" element={<Todolist />} />
      </Routes>
    </div>
  );
}

export default App;
