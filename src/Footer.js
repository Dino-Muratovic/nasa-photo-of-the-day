import React from "react";
import styled from "styled-components";
import { Container } from 'reactstrap'; // import from reactstrap

//Heading styles
const Heading = styled.h2`
        margin-top:5%;
        margin-bottom:0; 
        font-family: 'Baloo Chettan 2', cursive; 
        text-align:center;            
`;





const Footer = (props) => {
    console.log(`this is props in footer`, props);    

    return (            
        <Container fluid>
          <Heading className="display-3">{props.value.date} &copy;{props.value.copyright}</Heading>                                 
        </Container>

        
      
    )

}

export default Footer;