import { useNavigate } from "react-router-dom";

export default function TodoTable({ todos, onDelete }) {
  const navigate = useNavigate();

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Judul</th>
          <th>Status</th>
          <th>Prioritas</th>
          <th>Deadline</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {todos.length === 0 && (
          <tr>
            <td colSpan="5" className="empty">
              Belum ada tugas
            </td>
          </tr>
        )}
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td title={todo.title}>{todo.title}</td>
            <td>
              <span
                className={`badge status-${todo.status.replace(" ", "-")}`}
              >
                {todo.status}
              </span>
            </td>
            <td>
              <span className={`badge priority-${todo.priority}`}>
                {todo.priority}
              </span>
            </td>
            <td>{todo.deadline}</td>
            <td>
              <button
                className="icon blue"
                title="Lihat detail"
                onClick={() => navigate(`/todo/${todo.id}`)}
              >
                👁
              </button>
              <button
                className="icon red"
                title="Hapus"
                onClick={() => onDelete(todo)}
              >
                🗑
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}