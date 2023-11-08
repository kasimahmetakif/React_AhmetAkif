import React, { useState } from "react";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]); //todosu aç ve sonuna newTodo ekle
      setNewTodo("");
    }
  };

  return (
    <div>
      <h2>Görev Listesi</h2>
      <ul className="list-group">
        {todos.map((element, index) => (
          <li key={index} className="list-group-item">
            {element}
          </li>
        ))}
        ;
        <div className="ekle">
          <input
            onChange={(e) => setNewTodo(e.target.value)}
            type="text"
            placeholder="Yeni görev ekle"
            value={newTodo}
          />
          <button style={{ marginTop: "5px" }} onClick={addTodo}>
            Ekle
          </button>
        </div>
      </ul>
    </div>
  );
}
