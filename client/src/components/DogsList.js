import React, { useContext } from "react";
import { DogContext } from "../Context/DogContext";

 const DogsList=()=>{
    
    const { dogs } = useContext(DogContext);

    return (
        <div>

        </div>
    )
}

export default DogsList;