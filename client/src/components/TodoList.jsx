import React from "react";

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (!todos.length) return <p>No todos found.</p>;
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.title}>
              <span onClick={() => onToggle(todo.title)}>{todo.title}</span>
              <button onClick={() => onDelete(todo.title)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
