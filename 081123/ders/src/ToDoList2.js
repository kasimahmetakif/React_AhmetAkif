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
      <h1 class="display-5">İsim Listesi</h1>
      <ul className="list-group">
        {couple.map((element, index) => (
          <li key={index} className="list-group-item list-group-item-action">
            {element.name} {element.surname}
            <button
              style={{ marginTop: "5px" }}
              onClick={() => deleteName(index)}
              className="btn btn-danger"
            >
              Sil
            </button>
            <button
              style={{ marginTop: "5px", marginLeft: "5px" }}
              onClick={() => updateName(index)}
              className="btn btn-warning"
            >
              Güncelle
            </button>
          </li>
        ))}
      </ul>
      <div className="input-group">
        <span class="input-group-text">Ad ve soyad giriniz</span>

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
        <button className="btn btn-info" onClick={addCouple}>
          Ekle
        </button>
      </div>
    </div>
  );
}
