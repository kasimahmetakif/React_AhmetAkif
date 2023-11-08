import React, { useState } from "react";

export default function ToDoList2() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [couple, setCouple] = useState([]);
  const [updateIndex, setUpdateIndex] = useState(null);

  const addCouple = () => {
    if (name && surname) {
      setCouple([...couple, { name, surname }]);
      setName("");
      setSurname("");
    }
  };

  const deleteName = (deletedIndex) => {
    setCouple(couple.filter((element, index) => index !== deletedIndex));
  };

  const updateName = (index) => {
    setUpdateIndex(index);
    const nameToEdit = couple[index];
    setName(nameToEdit.name);
    setSurname(nameToEdit.surname);
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
              onClick={() => deleteName(index)}
            >
              Sil
            </button>
            <button
              style={{ marginTop: "5px", marginLeft: "5px" }}
              onClick={() => updateName(index)}
            >
              Güncelle
            </button>
          </li>
        ))}
      </ul>
      <div className="ekle">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="İsim yaz"
          value={name}
        />
        <input
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          placeholder="Soyisim yaz"
          value={surname}
        />
        <button style={{ marginTop: "5px" }} onClick={addCouple}>
          Ekle
        </button>
      </div>
    </div>
  );
}
