import React, {useState} from "react";
import axios from 'axios';

const CallingApi = () => {
    const [allpokemon, setAllpokemon] = useState([])
    const axiosApi = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1281&offset=0")
            .then(response => {
            // not the actual JSON response body but the entire HTTP response
            // we now run another promise to parse the HTTP response into usable JSON
            console.log(response);
            setAllpokemon(response.data.results);
            // setAllpokemon(response.data.results);
            }).catch(err=>{
            console.log(err);
            });
    }
    return (
        <div>
            <button onClick={axiosApi}>Fetch Pokemon</button>
            {allpokemon.map((singlePokemon, index) => 
            <p key = {index}>{singlePokemon.name}</p>
            )}
        </div>
    )
}
export default CallingApi 