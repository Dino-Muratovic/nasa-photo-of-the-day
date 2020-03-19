import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaContainer from "./NasaContainer";
import Footer from "./Footer";
import styled from "styled-components";

//style the body container
const BodyContainer = styled.section`
    background-color: #f0f8ff;
    margin-top:5%;
    width:70%;
    margin:0 auto;
    box-sizing: border-box;
    padding:3%;
    border-radius: 20px;
    border:2px ridge #a4d4ff;
    font-size:1.5rem;
`;

// style the paragraph inside of that container

const ImageDesc = styled.p`
    width:60%;
    text-align:center;
    margin:0 auto;
    letter-spacing:2px;
    background-color:white;
    padding:2%;
    border-radius: 20px;
    font-family: 'Baloo Chettan 2', cursive;
`;







const Body = () => {
//set the state

const [data, dataUpdater] = useState({});
    

  useEffect (() => {
    axios
    .get ('https://api.nasa.gov/planetary/apod?api_key=tmidPAvhxfCkLXtsdRCpsTjUrRsxN0W7qWCw0fmh')
    .then (response => {
        console.log(`This is response inside body`, response);
        console.log(`this is data inside body `, response.data);
        dataUpdater(response.data); // drilled to where I needed to be see line 32
    })
    .catch (error => {
        console.log(`Oops there was an error`, error)
    })
  }, []); // dependancy array here -- IMPORTANT        

    return (
        <BodyContainer>
            {/* some buttons or other content may go here */}
            
                <ImageDesc>{data.explanation}</ImageDesc>
                <NasaContainer value={data} />
                <Footer value={data}/>                   
        </BodyContainer> // this closes bodyContainer
    )
}

export default Body;