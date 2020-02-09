import React, { useContext } from "react";
import DogContext from '../Context/DogContext'

 const Dogs=()=>{
    const dogs  = useContext(DogContext);
    console.log('gg: dogs in Dogs.js: ', dogs.name)
    
    return (
        <div>
            <h1>Dog: {dogs[1].name}</h1>
            <img src={dogs[1].image} alt="Hello"/>
        </div>
    )
}

export default Dogs;

//! This only works by using [0] or [1]. I am looking for ways to fix this.