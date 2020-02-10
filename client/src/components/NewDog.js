import React, { useState, useContext } from "react";
import axios from "axios";
import DogContext from "../Context/DogContext";

const NewDog = () => {
  const [addingDog, SetNewDog] = useState({
    name: "",
    image: ""
  });

  const handleChanges = event => {
    SetNewDog({ ...addingDog, [event.target.name]: event.target.value });
  };

  const newDogForm = () => {
    axios
      .post("http://localhost:5000/dogradar")
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.log(error));
  };

  const handleSubmit = event => {
    event.preventDefault();
    newDogForm();
  };

  return (
    <form onSubmit={event => handleSubmit(event)}>
      <input
        type="text"
        name="name"
        placeholder="Dog Name"
        value={addingDog.name}
        onChange={event => handleChanges(event)}
      />
      <input
        type="text"
        name="image"
        placeholder="Dog Image"
        value={addingDog.image}
        onChange={event => handleChanges(event)}
      />
      <button>ADD NEW DOG</button>
    </form>
  );
};

export default NewDog;
