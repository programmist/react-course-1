import React, { useState, useRef, useEffect } from "react";
import "./styles.css";

/**
 * Represents one Todo item. Clicking on the Todo allows editing content
 *
 * @param {string} todo
 */
export default function Todo({ todo, onTodoEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    // If the input is visible ensure it gets cursor focus
    if (isEditing) {
      inputRef.current.focus();
    }
  });

  const startEdit = () => setIsEditing(true);
  const stopEdit = () => setIsEditing(false);

  const updateTodo = () => {
    const newTodo = inputRef.current.value;
    if (todo !== newTodo) {
      onTodoEdit(todo, newTodo);
    }
    stopEdit();
  };

  const handleEnterEsc = (event) => {
    // If Enter key pressed, update todo
    if (event.keyCode === 13) {
      updateTodo();
    }
    // if Esc key pressed, abort the update
    else if (event.keyCode === 27) {
      stopEdit();
    }
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  return (
    <li onKeyDown={handleEnterEsc}>
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          defaultValue={todo}
          onBlur={updateTodo}
        />
      ) : (
        <span onClick={startEdit}>{todo}</span>
      )}
      <button onClick={handleDelete} className="destroy"></button>
    </li>
  );
}
