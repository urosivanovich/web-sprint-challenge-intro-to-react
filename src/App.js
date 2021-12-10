import React from 'react';
import './App.css';
import Character from './components/Character.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([])
  useEffect(() =>{
    axios.get('https://swapi.dev/api/people')
    .then(resp => {
      setData(resp.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars</h1>
      {
        data.map(ele  => (
          <Character data={ele} key={ele.id}  />
        ))
         
      }
    </div>
  );
}

export default App;
