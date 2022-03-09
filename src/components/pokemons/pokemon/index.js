import React from "react";
import './shared.css'



const Pokemon = (props) =>{
    return(
        <div>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href={props.link}>{props.link}</a>
            <br/>
            <img class="width" src={props.img_url}></img>
        </div>
    )
}

export default Pokemon