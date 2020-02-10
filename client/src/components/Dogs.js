import React from "react";

const Dogs = props => {
  console.log("dogs in Dogs.js: ", props.dogs);
  return (
    <div>
      <h1>Dog: {props.dogs.name}</h1>
      <img src={props.dogs.image} alt="Hello" />
    </div>
  );
};

export default Dogs;
