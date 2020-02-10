import React, { useState, useEffect } from "react";
import "./App.css";
import DogContext from "../src/Context/DogContext";
import axios from "axios";
import Dogs from "./components/DogsList";
import NewDog from "./components/NewDog";

function App() {
  const [dogs, setDogs] = useState();
  console.log("gg: dogs in App.js", dogs);

  useEffect(() => {
    axios
      .get("http://localhost:5000/dogradar")
      .then(res => {
        setDogs(res.data);
        console.log("gg: response original: ", res.data);
      })
      .catch(error => console.log("Did not get API", error));
  }, []);

  return (
    <DogContext.Provider value={{ dogs, setDogs }}>
      <div className="App">
        <h1> DOG RADAR</h1>
      </div>
      <center>
        <NewDog />
      </center>
      <center>
        <Dogs />
      </center>
    </DogContext.Provider>
  );
}

export default App;
