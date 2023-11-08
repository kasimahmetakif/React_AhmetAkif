import React, { useState } from "react";

export default function ToDoList2() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [couple, setCouple] = useState([]);

  const addCouple = () => {
    if (name && surname) {
      setCouple([...couple, { name, surname }]);
      setName("");
      setSurname("");
    }
  };

  const deleteTodo = (deletedIndex) => {
    setCouple(couple.filter((element, index) => index !== deletedIndex));
  };

  return (
    <div>
      <h2>İsim Listesi</h2>
      <ul className="list-group">
        {couple.map((element, index) => (
          <li key={index} className="list-group-item">
            {element.name} {element.surname}
            <button
              style={{ marginTop: "5px" }}
              onClick={() => deleteTodo(index)}
            >
              Sil
            </button>
          </li>
        ))}
        ;
        <div className="ekle">
          <input
            onChange={(name) => setName(name.target.value)}
            type="text"
            placeholder="İsim yaz"
            value={name}
          />
          <input
            onChange={(surname) => setSurname(surname.target.value)}
            type="text"
            placeholder="Soyisim yaz"
            value={surname}
          />
          <button style={{ marginTop: "5px" }} onClick={addCouple}>
            Ekle
          </button>
        </div>
      </ul>
    </div>
  );
}