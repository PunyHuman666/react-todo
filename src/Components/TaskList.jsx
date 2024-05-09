import { useState } from "react";

export default function TaskList({ todo, onDelete }) {
  const [checked, setChecked] = useState(false);

  const isChecked = function () {
    setChecked(!checked);
  };

  return (
    <li className={checked ? "checked" : ""}>
      <input type="checkbox" onClick={isChecked} />
      <span className="todo">{todo}</span>
      <button className="btnDelete" onClick={() => onDelete(todo)}>
        Delete
      </button>
    </li>
  );
}
