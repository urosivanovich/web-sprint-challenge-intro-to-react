import React from 'react';
import './App.css';
import Character from './components/Character.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

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
