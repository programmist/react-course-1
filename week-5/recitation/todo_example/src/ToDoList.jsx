import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

/**
 * Displays a Todo list
 *
 * Current Features:
 *   - Add to the list
 *   - Clear the list
 *
 * Requested features:
 *   - Edit list items
 *   - Delete individual list items
 *   - Auto-save list
 *
 */
export default function ToDoList() {
  const [todos, setTodos] = useState(
    () => JSON.parse(window.localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  });

  const todoRef = useRef();

  const clearList = () => setTodos([]);

  const addTodo = (event) => {
    event.preventDefault();
    const todo = todoRef.current.value.trim();
    const isDup = todos.includes(todo);
    if (todo !== "" && !isDup) {
      setTodos([...todos, todoRef.current.value]);
    }
    todoRef.current.value = "";
  };

  return (
    <form onSubmit={addTodo}>
      <input
        ref={todoRef}
        name="todo"
        type="text"
        placeholder="Add a Todo Item"
      />
      <button type="submit">Add</button>
      <button type="button" onClick={clearList}>
        Clear
      </button>
      <ul className="todo-out">
        {todos.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </form>
  );
}
