import React, { useContext } from "react";
import DogContext from "../Context/DogContext";
import Dogs from "../components/Dogs";

const DogsList = () => {
  const { dogs } = useContext(DogContext);
  console.log("gg: dogs in DogList: ", dogs);

  return (
    <div>{dogs && dogs.map(dogs => <Dogs key={dogs.name} dogs={dogs} />)}</div>
  );
};

export default DogsList;
