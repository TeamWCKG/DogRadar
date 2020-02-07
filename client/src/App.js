import React, {useState} from 'react';
import './App.css';
import {DogContext} from "../src/Context/DogContext";
import axios from 'axios';


function App() {
  const [dogs, setDogs]=useState({})

  axios
  .get("http://localhost:5000/dogadar")
  .then( res=>{
    console.log("res", res);
  })  
  .catch(error => console.log("Did not get API", error));


  return (
    <DogContext.Provider value={dogs}>
    <div className="App">
      <h1> DOG RADAR</h1>
    </div>
    </DogContext.Provider>
  );
}

export default App;
