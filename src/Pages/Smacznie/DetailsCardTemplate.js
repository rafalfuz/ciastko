import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import {IoMdArrowRoundBack} from 'react-icons/io'
import PropTypes from 'prop-types';
import {Routes} from '../../routes/index'

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
    max-height: 80vh;
    background: rgb(55,188,228);
    background: linear-gradient(90deg, rgba(55,188,228,1) 0%, rgba(163,170,225,1) 50%, rgba(231,159,197,1) 100%);
    width: 80%;
    margin: 0 auto;
    border-radius: 25px;
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
    background-color: ${({backgroundColor})=>backgroundColor};
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

const DetailsCardTemplate = ({name, photo, prize, value, suplementsFacts, description, nutritionalValue, weight,backgroundColor}) => (
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
            <StyledPhotoWrapper><SweetPhoto src={photo}/></StyledPhotoWrapper>
            <StyledDetails>
                <h4>Opis:</h4>
                <p>{description}</p>
                <br/><br/>
                <h4>Cena: {prize} / {value}</h4>
                <br/>
                <h4>Waga: {weight} g</h4>
                <br/>
                <h4>Skład:</h4>
                <p>{suplementsFacts}</p>
                <br/>
                <h4>Wartość odżywcza produktu:</h4>
                <p>W {nutritionalValue.grammage} gramach:</p>
                <p>Energia: {nutritionalValue.energy.kJ} kJ / {nutritionalValue.energy.kcal} kcal </p>
                <p>Tłuszcz: {nutritionalValue.fat} g, w tym kwasy tłuszczowe nasycone: {nutritionalValue.includingSaturatedSattyAcids} g</p>
                <p>Węglowodany: {nutritionalValue.carbohydrates} g, w tym cukry {nutritionalValue.includingSugars} g</p>
                <p>Białko: {nutritionalValue.protein}</p>
                <p>Sól: {nutritionalValue.salt}</p>
            </StyledDetails>
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