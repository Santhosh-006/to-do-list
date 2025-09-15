import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
const App = () => {
  const API_URI = "https://to-do-list-three-liard-81.vercel.app/";

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
    if (newTodo.trim() === "") {
      alert("Empty value found");
      return;
    }
    try {
      const res = await fetch(`${API_URI}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTodo,
          isCompleted: false,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        alert(errorData.message || "Failed to add todo.");
        return;
      }
      setNewTodo("");
      fetchTodos();
    } catch (error) {
      setError(`Failed to add data : ${error.message}`);
      console.log(error.message);
    }
  };

  const updateTodos = async (toDoid) => {
    try {
      await fetch(`${API_URI}${toDoid}`, {
        method: "PUT",
      });
      fetchTodos();
    } catch (error) {
      setError("Failed to update data" + error.message);
    }
  };

  const detetodos = async (toDoid) => {
    if (!window.confirm("Delete this Todo ? ")) return;
    try {
      await fetch(`${API_URI}${toDoid}`, {
        method: "DELETE",
      });
      setTodos((prev) => prev.filter((todo) => todo._id !== toDoid));
    } catch (error) {
      setError("Failed to delete data" + error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-24 ">
      <div className=" rounded shadow-2xl p-5">
        <form
          onSubmit={addTodos}
          className=" my-2
          "
        >
          <input
            className="mr-3 border-2 border-indigo-400 rounded h-8 p-1.5 focus:outline-blue-500"
            placeholder="Enter new Todo..."
            type="text"
            value={newTodo}
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
          />
          <button
            className="bg-indigo-400 text-black font-bold rounded p-1 px-1.5 h-8 "
            type="submit"
          >
            ADD
          </button>
        </form>
        {/* {loading && <p>Loading....</p>}
        {error && <p>{error}</p>} */}
        <TodoList todos={todos} onToggle={updateTodos} onDelete={detetodos} />
      </div>
    </div>
  );
};

export default App;
