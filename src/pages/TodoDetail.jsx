import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TodoModal from "../components/TodoModal";

export default function TodoDetail({ todos, onUpdate }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showEdit, setShowEdit] = useState(false);

  const todo = todos.find((t) => t.id === Number(id));

  if (!todo) {
    return (
      <div className="container">
        <p>Todo tidak ditemukan.</p>
        <button className="btn red" onClick={() => navigate("/")}>
          Kembali
        </button>
      </div>
    );
  }

  const handleUpdate = (data) => {
    onUpdate(todo.id, data);
    setShowEdit(false);
  };

  return (
    <div className="detail-wrapper">
      <div className="detail-card">
        <div className="detail-left">
          <h3>Judul</h3>
          <p>{todo.title}</p>
          <h3>Deskripsi</h3>
          <div className="desc-box">{todo.description}</div>
        </div>

        <div className="detail-right">
          <h3>Status</h3>
          <p>{todo.status}</p>
          <h3>Prioritas</h3>
          <p>{todo.priority}</p>
          <h3>Deadline</h3>
          <p>{todo.deadline}</p>
          <div className="row buttons">
            <button className="btn red" onClick={() => navigate("/")}>
              Kembali
            </button>
            <button className="btn blue" onClick={() => setShowEdit(true)}>
              Update
            </button>
          </div>
        </div>
      </div>

      {showEdit && (
        <TodoModal
          heading="Update Todo"
          submitLabel="Update"
          initialData={{
            title: todo.title,
            description: todo.description,
            status: todo.status,
            priority: todo.priority,
            deadline: todo.deadline,
          }}
          onSubmit={handleUpdate}
          onClose={() => setShowEdit(false)}
        />
      )}
    </div>
  );
}