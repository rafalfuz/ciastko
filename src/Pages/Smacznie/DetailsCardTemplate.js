import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { IoMdArrowRoundBack } from 'react-icons/io'
import PropTypes from 'prop-types';
import { Routes } from '../../routes/index'

const StyledBackgroundTexture = styled.div`
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    padding: 5% 0;
`

const StyledDetailsCardWrapper = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    min-height: 80vh;
    max-height: 100vh;
    background: rgb(55,188,228);
    background: linear-gradient(90deg, rgba(55,188,228,1) 0%, rgba(163,170,225,1) 50%, rgba(231,159,197,1) 100%);
    width: 80%;
    margin: 0 auto;
    border-radius: 25px;
    @media screen and (max-width: 960px){
        height: auto;
        max-height: 100%;
        width: 90%;
    }
    
`
const StyledHeader = styled.header`
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding: 2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;  
    flex-basis: 10%;
    background-color: ${({ backgroundColor }) => backgroundColor};
`

const StyledBackArrow = styled.div`
    text-align: center;
    flex-basis: 5%;
    opacity: 1;
    line-height: 10%;
`

const BackButton = styled(IoMdArrowRoundBack)`
    font-size: 5rem;
    color: #fff;
    border: 2px solid #37bce4;
    border-radius: 50%;
    transition: all .3s ease;
    @media screen and (max-width: 960px){
        font-size: 3rem;
    }
    :hover{
        cursor: pointer;
        color: #37bce4;
        border-color: #fff;
    }
`
const StyledTitleWrapper = styled.div`
    width: 100%;
    text-align: center;
    padding-left: 10px;
`
const StyledTitle = styled.h2`
    font-size: 4rem;
    color: #fff;
    @media screen and (max-width: 960px){
        font-size: 1.6rem;
    }
`

const StyledCardContent = styled.div`
    display: flex;
    width: 100%;
    flex-basis: calc(90% - 25px);
    justify-content: center;
    align-items: center;
    padding: 2rem;
    flex-wrap: wrap;
    @media screen and (max-width: 960px){
        flex-direction: column;
        justify-content: flex-start;
        padding: 0;
    }
`
const StyledPhotoWrapper = styled.div`
    display: flex;
    flex-basis: 60%;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
    @media screen and (max-width: 960px){
        align-items: flex-start;
    }
`

const SweetPhoto = styled.img`
    width: 80%;
    height: 75%;
    max-width: 95%;
    max-height: 95%;
    background-color: transparent;
    border-radius: 5px;
    @media screen and (max-width: 960px){
        width: 100%;
        max-width: 100%;
    }
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
    @media screen and (max-width: 960px){
        flex-basis: 100%;
        align-items: flex-start;
        height: auto;
    }
`
const StyledDescription = styled.p`
    font-size: 1.6rem;
    padding: 1.6rem;
`
const StyledWeight = styled.p`
    font-size: 1.6rem;
    padding: 1.2rem;
    @media screen and (max-width: 960px){
        align-self: flex-end;
    }
`
const StyledPrize = styled.p`
    font-size: 2.2rem;
    padding: 1.2rem;
    color: tomato;
    @media screen and (max-width: 960px){
        align-self: center;
    }
`
const StyledMacronutrients = styled.p`
    font-weight: bold;
    font-size: 1.6rem;
    margin-left: 1.2rem;
    color: ${({ textColor }) => textColor};
`
const StyledMacronutrientsInfo = styled.p`
    font-size: 1.6rem;
    padding: .3rem;
    margin-left: 1.4rem;
`
const StyledSuplements = styled.div`
    color: cornsilk;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 90%;
    flex-wrap: wrap;
    @media screen and (max-width: 960px){
        margin: 1.6rem 0;
        justify-content: center;
    }
`
const StyledSuplementsHeader = styled.p`
    font-size: 1.6rem;
    font-weight: bold;
    flex-basis: 100%;
    color: ${({ textColor }) => textColor};
`
const StyledSuplementsInfo = styled.p`
    font-size: 1.6rem;
    flex-basis: 90%;
`
const DetailsCardTemplate = ({ name, photo, prize, value, suplementsFacts, description, nutritionalValue, weight, backgroundColor }) => (
    <StyledBackgroundTexture>
        <StyledDetailsCardWrapper>
            <StyledHeader backgroundColor={backgroundColor}>
                <StyledBackArrow as={Link} to={Routes.smacznie}>
                    <BackButton />
                </StyledBackArrow>
                <StyledTitleWrapper>
                    <StyledTitle>{name}</StyledTitle>
                </StyledTitleWrapper>
            </StyledHeader>
            <StyledCardContent>
                <StyledPhotoWrapper><SweetPhoto src={photo} /></StyledPhotoWrapper>
                <StyledDetails>
                    <StyledDescription>{description}</StyledDescription>
                    <StyledWeight>Waga: {weight} g</StyledWeight>
                    <StyledPrize>Cena: {prize} {value}</StyledPrize>
                    <StyledMacronutrients textColor={backgroundColor}>Wartość odżywcza produktu:</StyledMacronutrients>
                    <StyledMacronutrientsInfo>W {nutritionalValue.grammage} gramach:</StyledMacronutrientsInfo>
                    <StyledMacronutrientsInfo>Energia: {nutritionalValue.energy.kJ} kJ / {nutritionalValue.energy.kcal} kcal </StyledMacronutrientsInfo>
                    <StyledMacronutrientsInfo>Tłuszcz: {nutritionalValue.fat} g, w tym kwasy tłuszczowe nasycone: {nutritionalValue.includingSaturatedSattyAcids} g</StyledMacronutrientsInfo>
                    <StyledMacronutrientsInfo>Węglowodany: {nutritionalValue.carbohydrates} g, w tym cukry {nutritionalValue.includingSugars} g</StyledMacronutrientsInfo>
                    <StyledMacronutrientsInfo>Białko: {nutritionalValue.protein}</StyledMacronutrientsInfo>
                    <StyledMacronutrientsInfo>Sól: {nutritionalValue.salt}</StyledMacronutrientsInfo>
                </StyledDetails>
                <StyledSuplements>
                    <StyledSuplementsHeader textColor={backgroundColor}>Skład:</StyledSuplementsHeader>
                    <StyledSuplementsInfo>{suplementsFacts}</StyledSuplementsInfo>
                </StyledSuplements>
            </StyledCardContent>
        </StyledDetailsCardWrapper>
    </StyledBackgroundTexture>
)

DetailsCardTemplate.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    prize: PropTypes.string,
    value: PropTypes.string,
    suplementsFacts: PropTypes.string,
    description: PropTypes.string,
    weight: PropTypes.number,
    nutritionalValue: PropTypes.objectOf(PropTypes.number),
    backgroundColor: PropTypes.string

}

DetailsCardTemplate.defaultProps = {
    name: '',
    photo: '',
    prize: '',
    value: '',
    suplementsFacts: '',
    description: '',
    weight: 0,
    nutritionalValue: '',
    backgroundColor: '',
}
export default DetailsCardTemplate