import React from "react";

const TodoList = ({ todos, onToggle, onDelete }) => {
  // if (!todos.length) return <p>No todos found.</p>;
  return (
    <div className="py-2 rounded mt-3 max-h-72 overflow-y-auto">
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo._id}
              className={`p-0.5 flex flex-row items-center justify-around rounded my-1 bg-gray-300`}
            >
              {/* <span
                className={`${todo.isCompleted ? "visible" : "hidden"} pr-1`}
              >
                &#x2705;
              </span> */}
              <input
                type="checkbox"
                className="h-4 w-4 ml-1"
                checked={todo.isCompleted}
                onChange={() => onToggle(todo._id)}
              />
              <span
                className={`flex-9/12 px-1.5 ${
                  todo.isCompleted ? "line-through" : ""
                }`}
              >
                {todo.title}
              </span>
              <button onClick={() => onDelete(todo._id)}>
                <i className="fa-solid fa-trash p-1.5 text-red-400 hover:text-red-600"></i>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
