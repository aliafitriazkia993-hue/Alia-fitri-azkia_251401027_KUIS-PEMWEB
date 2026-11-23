import { useState } from "react";
import TodoTable from "../components/TodoTable";
import TodoModal from "../components/TodoModal";

export default function Home({ todos, onAdd, onDelete }) {
  const [showAdd, setShowAdd] = useState(false);

  const handleDelete = (todo) => {
    if (window.confirm(`Yakin ingin menghapus "${todo.title}"?`)) {
      onDelete(todo.id);
    }
  };

  const handleAdd = (data) => {
    onAdd(data);
    setShowAdd(false);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Todo List</h1>
        <button className="btn blue" onClick={() => setShowAdd(true)}>
          Tambah Todo
        </button>
      </div>

      <TodoTable todos={todos} onDelete={handleDelete} />

      {showAdd && (
        <TodoModal
          heading="Tambah Todo"
          submitLabel="Tambah"
          onSubmit={handleAdd}
          onClose={() => setShowAdd(false)}
        />
      )}
    </div>
  );
}