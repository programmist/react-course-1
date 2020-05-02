import React, { useState, useRef, useEffect } from "react";
import Todo from "./Todo";
import "./styles.css";

/**
 * Displays a Todo list
 *
 * Features:
 *   - Add to the list
 *   - Edit item in place
 *   - Delete individual list items
 *   - Clear the list
 *   - Auto-save list
 */
export default function TodoList() {
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

  const editTodo = (prev, current) => {
    const todosCopy = [...todos];
    todosCopy[todos.indexOf(prev)] = current;
    setTodos(todosCopy);
  };

  const deleteTodo = (todoToDelete) => {
    setTodos(todos.filter((todo) => todo !== todoToDelete));
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
          <Todo
            key={item}
            todo={item}
            onTodoEdit={editTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </form>
  );
}
