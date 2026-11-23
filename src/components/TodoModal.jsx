import { useState } from "react";

const emptyForm = {
  title: "",
  description: "",
  status: "to-do",
  priority: "low",
  deadline: "",
};

export default function TodoModal({ initialData, onSubmit, onClose }) {
  const isEdit = Boolean(initialData);
  const [form, setForm] = useState(initialData || emptyForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) {
      alert("Judul tidak boleh kosong");
      return;
    }
    onSubmit(form);
  };

  return (
    <div className="overlay" onClick={onClose}>
      <form
        className="modal"
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <h2>{isEdit ? "Update Todo" : "Tambah Todo"}</h2>

        <label>Judul</label>
        <input name="title" value={form.title} onChange={handleChange} />

        <label>Deskripsi</label>
        <textarea
          name="description"
          rows="3"
          value={form.description}
          onChange={handleChange}
        />

        <div className="row">
          <div>
            <label>Status</label>
            <select name="status" value={form.status} onChange={handleChange}>
              <option value="to-do">to-do</option>
              <option value="in progress">in progress</option>
              <option value="done">done</option>
            </select>
          </div>
          <div>
            <label>Prioritas</label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
            >
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>
        </div>

        <label>Deadline</label>
        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
        />

        <div className="row buttons">
          <button type="button" className="btn red" onClick={onClose}>
            Batal
          </button>
          <button type="submit" className="btn blue">
            {isEdit ? "Update" : "Tambah"}
          </button>
        </div>
      </form>
    </div>
  );
}