import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
// import styled from 'styled-components';
import Character from './components/Character';
import {BASE_URL} from './components/Constants';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
    const [characterData, getCharacterData] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    useEffect(() => {
      axios
      .get(`${BASE_URL}`)
      .then((resp) => {
        console.log('characterData', resp);
        getCharacterData(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters ={characterData}/>
    </div>
  );
}

export default App;
