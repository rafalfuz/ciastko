import React from 'react';
import styled from 'styled-components'
import {IoMdArrowRoundBack} from 'react-icons/io'
import Cookies from '../../Assets/Biscuits.jpg'
import Card from './Card'

const StyledDetailsCardWrapper = styled.article`
   display: flex;
   justify-content: flex-start;
   align-items: center;
   flex-direction: column;
   height: 80vh;
    max-height: 80vh;
    background-color: cadetblue;
    width: 80%;
    margin: 0 auto;
    border-radius: 25px;
`
const StyledHeader = styled.header`
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;  
    flex-basis: 10%;
    position: relative;
`
const StyledBackArrow = styled(IoMdArrowRoundBack)`
    font-size: 5rem;
    color: #fff;
    border: 2px solid #37bce4;
    border-radius: 50%;
    position: absolute;
    left: 3rem;
    transition: all .3s ease;
    :hover{
        cursor: pointer;
        color: #37bce4;
        border-color: #fff;
    }
`
const StyledTitle = styled.h2`
    font-size: 4rem;
    color: #fff;
`

const StyledCardContent = styled.div`
    display: flex;
    width: 100%;
    flex-basis: calc(90% - 25px);
    justify-content: center;
    align-items: center;
    padding: 2rem;
`
const StyledPhotoWrapper = styled.div`
    display: flex;
    flex-basis: 60%;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

const SweetPhoto = styled.img`
    width: 80%;
    height: 75%;
    max-width: 95%;
    max-height: 95%;
    background-color: transparent;
    box-shadow: 0 10px 30px -10px hsla(0,0%,0%,0.8);
    border-radius: 5px;
`

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 40%;
    width: 100%;
    height: 85%;
    justify-content: center;
    align-items: center;
    color: cornsilk;
`

 class DetailsCard extends Card{
    
    state = {
        whichCard: 'pustyString'
    }

    render(){
        const {path} = this.props.match
        return(
            <StyledDetailsCardWrapper>
        <StyledHeader>
            <StyledBackArrow />
            <StyledTitle>Murzynek</StyledTitle>
        </StyledHeader>
        <StyledCardContent>
            <StyledPhotoWrapper><SweetPhoto src={Cookies}/></StyledPhotoWrapper>
            <StyledDetails>
                <h3>Murzynskie</h3>
                <p>składniki</p>
                <p>{`o co chodzi z match: ${path}`}</p>
                <p>{`widok state: ${this.state.whichCard}`}</p>
                <p>wartosci odzywcze</p>
            </StyledDetails>
        </StyledCardContent>
    </StyledDetailsCardWrapper>
        )
    }
}


export default DetailsCard