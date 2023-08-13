import { useParams } from "react-router-dom";
import React from 'react'

const ColoredWord = () => {
    const {id, colorbg, colortext} = useParams();
    console.log(id);
    console.log(colorbg);
    console.log(colortext);
  return (
    <h1 style={{backgroundColor: `${colorbg}`, color : `${colortext}`}}>{id}</h1>
  )
}

export default ColoredWord