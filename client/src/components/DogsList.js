import React, { useContext } from "react";
import DogContext from "../Context/DogContext";
import Dogs from "../components/Dogs";

const DogsList = () => {
  const { dogs } = useContext(DogContext);
  console.log("gg: dogs in DogList: ", dogs);

  return (
    <>{dogs && dogs.map(dogs => <Dogs key={dogs.name} dogs={dogs} />)}</>
  );
};

export default DogsList;
