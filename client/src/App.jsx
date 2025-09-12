import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
const App = () => {
  const API_URI = "http://localhost:6969/";

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URI);
      const data = await res.json();
      setTodos(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Failed to fetch data:" + { error });
    }
  };

  const addTodos = async (e) => {
    e.preventDefault();
    try {
      await fetch(API_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTodo,
          isCompleted: false,
        }),
      });
      setNewTodo("");
      fetchTodos();
    } catch (error) {
      setError(`Failed to add data : ${error.message}`);
    }
  };

  const updateTodos = async (title) => {
    try {
      await fetch(`{API_URI}/${title}`, {
        method: "PUT",
      });
      fetchTodos();
    } catch (error) {
      setError("Failed to update data" + error.message);
    }
  };

  const detetodos = async (title) => {
    if (!window.confirm(`Delete "${title}"?`)) return;
    try {
      await fetch(`{API_URI}/${encodeURIComponent(title)}`, {
        method: "DELETE",
      });
      setTodos((prev) => prev.filter((todo) => todo.title !== title));
    } catch (error) {
      setError("Failed to delete data" + error.message);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={addTodos}>
          <input
            type="text"
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
          <button type="submit">ADD</button>
        </form>
        {loading && <p>Loading....</p>}
        {error && <p>{error}</p>}
        <TodoList todos={todos} ontoggle={updateTodos} onDelete={detetodos} />
      </div>
    </>
  );
};

export default App;
