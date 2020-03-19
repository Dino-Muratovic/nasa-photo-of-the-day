import React from "react";
import styled from "styled-components"; 


const MainHeading = styled.h1`
    text-align:center;
    margin-top:0;
    font-size:4rem;
`;

const Header = () => {
    return (
        <div className="Header">
            <MainHeading>Astronomy picture of the day!</MainHeading>
        </div>
    )     
};

export default Header;