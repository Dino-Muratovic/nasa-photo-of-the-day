import React from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import styled from "styled-components"; 



const MainAppContainer = styled.div`
   background-image: linear-gradient(to bottom, rgba(240, 248, 255), rgba(150, 248, 255));
   margin-top:0;

`;


function App() {
  return (
    <MainAppContainer>
      <Header />
      <Body />  
    </MainAppContainer>
  );
}

export default App;
