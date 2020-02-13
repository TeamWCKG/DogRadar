import React from "react";

const Dogs = props => {
  console.log("dogs in Dogs.js: ", props.dogs);
  return (
    <div className="dog-card-container">
      {/* <h1>Dog: {props.dogs.name}</h1> */}
      <div className="dog-card-title">
        <h1>Rate The Dogs Below</h1>
      </div>
      <div className="dog-card-img">
        <img src={props.dogs.image} alt="Hello" />
        <div className="dog-card-details">
          <p>Rate: 10/10</p>
          <p>Owner: Kiran</p>
        </div>
      </div>
    </div>
  );
};

export default Dogs;
