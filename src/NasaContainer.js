import React from "react";
import styled from "styled-components"; // bring in styled library 
import { Badge } from 'reactstrap';


const Heading = styled.h2`
    text-align:center;
`;


// styling of the image
 const Image = styled.img`
   border-radius:10px;
   border: 1px solid black;
   display:flex;
   justify-content: center;
   width: 70%; 
   margin:0 auto;
   margin-bottom:5%;
 `;





const NasaContainer = (props) => {
    console.log(`this is props in NasaContainer `, props);   
    return (
        <div className="nasa-content-info">
            <Heading>{props.value.title}</Heading> 
            <Image src={props.value.url} alt={props.value.title}></Image>          
        </div>
    )
}

export default NasaContainer;