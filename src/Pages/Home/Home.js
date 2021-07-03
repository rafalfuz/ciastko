import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from '../../Components/Button/Button'
import Cake from '../../Assets/cupCake.png'

const StyledHomeWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: rgb(55,188,228);
    background: linear-gradient(90deg, rgba(55,188,228,1) 0%, rgba(163,170,225,1) 50%, rgba(231,159,197,1) 100%);
    margin: 0 auto;
    text-align: center;
    color: cornsilk;
    @media (max-width: 960px){
        flex-direction: column-reverse;
        height: 100%;
        padding-bottom: 2rem;
    }
`
const StyledTitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 60%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        font-size: 10rem;
        margin: 0 5rem 10rem 0; 

    @media(max-width: 960px){
        font-size: 4.5rem;
        margin: 3rem auto;
    }
    }
`
const StyledImageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`
const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    @media (max-width: 960px){
        width: 70%;
        height: 70%;
    }
`
const Home = ({title, color,}) => (
    <StyledHomeWrapper color={color}>
        <StyledTitleWrapper>
            <h1>{title}</h1>
            <a href='https://pl-pl.facebook.com/lekkieciacho'><Button primary facebookBtn>Odwiedź Nas na Facebooku</Button></a>
            <br/>
            <a href='https://www.instagram.com'><Button primary instagramBtn>Odwiedź Nas na Instagramie</Button></a>
        </StyledTitleWrapper>
        <StyledImageWrapper>
        <StyledImage src={Cake} alt='Ciacho'/>
        </StyledImageWrapper>
    </StyledHomeWrapper>
)

Home.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,

}
Home.defaultProps = {
    title: '100% ZDROWIA I  LEKKOŚCI',
    color: 'cornsilk'

}
export default Home