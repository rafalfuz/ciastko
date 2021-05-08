import React from 'react';
import styled from 'styled-components';
import {Cakes} from './DataCakes'
import Card from './Card'


const StyledSmacznieWrapper = styled.section`
    background: rgb(55,188,228);
    background: linear-gradient(90deg, rgba(55,188,228,1) 0%, rgba(163,170,225,1) 50%, rgba(231,159,197,1) 100%);
    min-height: 100vh;
    margin: 0 auto;
    text-align: center;
`
const StyledTitle = styled.h1`
    font-size: 5rem;
    color: cornsilk;
    padding: 3rem;
`
const StyledDescription = styled.p`
    font-size: 1.8rem;
    padding: 3rem 5%;
    color: cornsilk;
`
const StyledCardsWrapper = styled.section`
    display: flex;
    padding: 0 5%;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width: 960px){
        padding: 0;
    }
`


const Smacznie = () => (  
    <StyledSmacznieWrapper>
        <StyledTitle>Spełniamy słodkie marzenia!</StyledTitle>
        <StyledDescription>Dostosowujemy się do potrzeb klientów. Jesteś alegrikiem, cukrzykiem, sportowcem, a może jesteś na diecie albo po prostu zdrowo się odżywiasz? Niezależnie kim jesteś bądź co robisz, u Nas zawsze znajdziesz coś dla siebie!</StyledDescription>
        <StyledCardsWrapper>
        {Cakes.map((cake)=><Card {...cake} key={cake.id} />)}
    </StyledCardsWrapper>
    </StyledSmacznieWrapper>
)

export default Smacznie;