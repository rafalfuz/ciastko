import React from 'react';
import styled from 'styled-components';

const StyledLekkoWrapper = styled.section`
    background-color: cadetblue;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`


const Lekko = () => (
    <StyledLekkoWrapper>
    <h1>Lekko</h1> 
    <p>-[W BUDOWIE...]-</p>
    </StyledLekkoWrapper>
)
 
export default Lekko;