import React, { useState, useEffect } from "react";
import "./Styles/styles.scss";
import DogContext from "../src/Context/DogContext";
import axios from "axios";
// import NewDog from "./components/NewDog";
import Navigation from "./components/Navigation";
import HomePageBody from "./components/HomePageBody";

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
        <Navigation />
        {/* <NewDog /> */}
        <HomePageBody />
      </div>
    </DogContext.Provider>
  );
}

export default App;
