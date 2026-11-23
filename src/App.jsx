import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { dummyTodos } from "./data/dummyTodos";
import Home from "./pages/Home";
import TodoDetail from "./pages/TodoDetail";
import "./index.css";

export default function App() {
  const [todos, setTodos] = useState(dummyTodos);
  const [toast, setToast] = useState("");

  const notify = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2500);
  };

  const addTodo = (data) => {
    setTodos([...todos, { ...data, id: Date.now() }]);
    notify("Todo berhasil ditambahkan");
  };

  const updateTodo = (id, data) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, ...data } : t)));
    notify("Todo berhasil diperbarui");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
    notify("Todo berhasil dihapus");
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home todos={todos} onAdd={addTodo} onDelete={deleteTodo} />}
        />
        <Route
          path="/todo/:id"
          element={<TodoDetail todos={todos} onUpdate={updateTodo} />}
        />
      </Routes>
      {toast && <div className="toast">{toast}</div>}
    </>
  );
}