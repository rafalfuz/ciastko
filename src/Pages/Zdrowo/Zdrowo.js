import React from 'react';
import styled from 'styled-components';

const StyledZdrowoWrapper = styled.section`
    background-color: #9BB7D4;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
`

const Zdrowo = () => (
    <StyledZdrowoWrapper>
        <h1>Zdrowo</h1>
        <p>Zdrowiej</p>
    </StyledZdrowoWrapper>
)
 
export default Zdrowo;