import React, { useContext } from "react";
import DogContext  from "../Context/DogContext";
import Dogs from "../components/Dogs";

const DogsList = () => {
  const dogs = useContext(DogContext);
  console.log('gg: dogs in DogList: ', dogs);

  return (
    <div>
      {dogs.map(dogs => {
        return <Dogs key={dogs.id} dog={dogs}/>
    })}
    </div>
  );
};

export default DogsList;
