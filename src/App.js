
import React, { useState } from "react";
import {Form } from "antd";
import List from "./components/List";
import "./App.css";

function App() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState('');

  function addName() {
    if (name !== "" && names.indexOf(name) === -1) {
      const newNames = [name, ...names];
      setNames(newNames);    
    }
  }
  function removeName(name) {
    //                 ['1', '2'], ('2') !== '' //Va a buscar elemento por elemento y el coincida lo va a dejar fuera en el filtro
    const newNames = names.filter((n) => n !== name);
    setNames(newNames); //El arreglo se vuelve a guardar sin el elemento filtrado
  }
  function editName(name) {
    const newNames = names.filter((n) => n !== name);

    if (name !== "" && names.indexOf(name) === -1) {
      const newNames = [name, ...names];
      setNames(newNames);
    }
  }
  
  return (
    <div className="App">
      <form name="f1">
        <input id="i1" placeholder="Nombre" onChange={e => setName(e.target.value)}/>
        <button type="reset" onClick={() => addName() }>Añadir</button>
        {/*names.map(name => <Name value={name} removeName={removeName}/>)*/}
        <List 
          data={names}
          removeName={removeName}
          editName={editName}
          />
      </form>
    </div>
  );
  }
  

export default App;
