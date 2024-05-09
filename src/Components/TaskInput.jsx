import { useState } from "react";
import TaskList from "./TaskList";

export default function TaskInput() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTask = function () {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const deleteTodo = function (todo) {
    setTodos(todos.filter((item) => item !== todo));
  };

  return (
    <div>
      <label htmlFor="input"></label>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        id="input"
        placeholder="Enter task"
      ></input>
      <button className="add-task" onClick={addTask}>
        Add Task
      </button>
      <hr />

      <ul>
        {todos.map((todo, index) => (
          <TaskList key={index} todo={todo} onDelete={deleteTodo} />
        ))}
      </ul>
    </div>
  );
}
