import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstRender, setFirstRender] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    if (firstRender) {
      //
    }
    setFirstRender(true);
  }, [todos]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTodo) setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleCheckboxChange = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  function handleDeleteList(index) {
    setTodos(todos.filter((e, i) => i !== index));
  }

  return (
    <div class="container">
      <h1>React To-Do List</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">
          <i className="fa fa-plus-circle"></i>
          &nbsp; Add
        </button>
      </form>

      <hr />

      <ul class="list">
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(index)}
              />
              <label
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.text}
              </label>
              <button class="delete" onClick={() => handleDeleteList(index)}>
                <i className="fa fa-trash"></i>
                &nbsp; Delete
              </button>
              <button class="delete" onClick={() => handleDeleteList(index)}>
                <i className="fa fa-edit"></i>
              </button>
            </li>
          ))
        ) : (
          <p>No Item Yet !</p>
        )}
      </ul>
    </div>
  );
}

export default App;
