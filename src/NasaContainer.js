import React from "react";

const NasaContainer = (props) => {
    console.log(`this is props in NasaContainer `, props);

    return (
        <div className="nasa-content-info">
            <h2>{props.value.title}</h2> 
            <img src={props.value.url}></img>      
        </div>
    )
}

export default NasaContainer;