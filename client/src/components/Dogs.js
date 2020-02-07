import React, { useContext } from "react";
import axios from "axios";
import DogContext from '../Context/DogContext'

 const Dogs=()=>{
    const { dogs } = useContext(DogContext);
    
    return (
        <div>

        </div>
    )
}

export default Dogs;