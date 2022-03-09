import React,{Fragment} from "react";
import Pokemon from './pokemon'
const Pokemons = ()=>{

    return(
        <Fragment>
            <h3>Pokemon List</h3>
            <hr/>
            <Pokemon name ="Pikachu" description = "Mouse Pokemon" link = "https://bulbapedia.bulbagarden.net/wiki/Pikachu" img_url= "https://archives.bulbagarden.net/media/upload/0/0d/025Pikachu.png" /> 
        </Fragment>
    )

}

export default Pokemons