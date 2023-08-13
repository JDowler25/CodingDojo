import React from 'react'
import { useParams } from "react-router";

const Number = () => {
    const {id} = useParams();
    if (isNaN(id)){
        return (
            <div>Word is {id}</div>
        )
    }
    else{
        return (
          <div>Number {id}</div>
        )
    }
}

export default Number