import React from "react";

const TodoList = ({ todos, onToggle, onDelete }) => {
  if (!todos.length) return <p>No todos found.</p>;
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo._id}>
              <span onClick={() => onToggle(todo._id)}>{todo.title}</span>
              <button onClick={() => onDelete(todo._id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
