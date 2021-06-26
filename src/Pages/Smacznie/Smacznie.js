import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';
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


const Smacznie = ({cakes}) => (  
    <StyledSmacznieWrapper>
        <StyledTitle>Spełniamy słodkie marzenia!</StyledTitle>
        <StyledDescription>Dostosowujemy się do potrzeb klientów. Jesteś alegrikiem, cukrzykiem, sportowcem, a może jesteś na diecie albo po prostu zdrowo się odżywiasz? Niezależnie kim jesteś bądź co robisz, u Nas zawsze znajdziesz coś dla siebie!</StyledDescription>
        <StyledCardsWrapper>
        {cakes.map((cake)=><Card {...cake} key={cake.id} />)}
    </StyledCardsWrapper>
    </StyledSmacznieWrapper>
)

const mapStateToProps = ({cakes}) => ({cakes})

Smacznie.propTypes = {
    cakes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            photo: PropTypes.string.isRequired,
            prize: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            superInfo: PropTypes.string.isRequired,
            suplementsFacts: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            backgroundColor: PropTypes.string.isRequired,
        })
    )
}
Smacznie.defaultProps = {
    cakes: [],
  };

export default connect(mapStateToProps)(Smacznie);