import React, { useEffect, useState } from 'react';
import Name from './components/Name';
import List from './components/List';
import { Button, Input, Col, Row, DatePicker } from "antd";
import moment from "moment";
import './App.css';
import Axios from 'axios';
import { responsiveArray } from 'antd/lib/_util/responsiveObserve';

function App() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState('');
  const [index, setIndex] = useState(null);
  const [date, setDate] = useState(new Date());
  
  function onChangeDate(date, dateString){
    setDate(dateString);
  }
  function getNames(){
    Axios.get("htto://localhost:2001/students").then((response)=>{
      setNames(response.data);
    });
  }
  useEffect(()=>{
    if (!names.length){
      getNames();
    }
  });

  function addName() {
  if (index === null && name !=="") {
  Axios
  .post("http://localhost:2001/students",{
    name: name, 
    dob: date,
  })
  .then((response)=>{
    getNames();
  });
    setName('');
    setNames(new Date);
  } else if (index !== null &&name!==""){
    Axios
    .put("http://localhost:2001/stundets/"+index,{
      name: name,
      dob: date,
    })
    .then((response) =>{
      getNames();
    });
    setNames("");
    setDate(new Date());
  }else{
    names[index] = name;
      setNames([...names]);
      setIndex(null);
      setName("");
  }   
}


function removeName(name) {
  const newNames = names.filter(n => n !== name);
  setNames(newNames);
}
function editName(name) {
  // Index 0,1 ['Ernesto', 'Cedano']
  const index = names.indexOf(name);
  // Guardar index en el estado
  setIndex(index);
   // names[index] names[1]
  setName(names[index]);
}
  
return (
  <div className="App">
    <Row justify="center" gutter={10}>
      <Col>
        <Input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder="Ingrese un nombre"
        />
      </Col>
      <Col>
        <DatePicker
          value={moment(date)}
          allowClear={false}
          onChange={onChangeDate}
        />
      </Col>
      <Col>
        <Button onClick={() => addName()} type="primary">
          Agregar
        </Button>
      </Col>
    </Row>
    <List data={names} removeName={removeName} editName={editName} />
    {/* {names.map((name) => (
      <Name value={name} removeName={removeName} />
    ))} */}
    {/* <Age edad="18" />
    {ages.map((age) => (
      <Age edad={age} />
    ))} */}
  </div>
);
  }
  

export default App;
