import React from 'react';
import styled from 'styled-components';
import Logo from '../../Assets/LogoLekkieCiacho.jpg'

const StyledKolorowoWrapper = styled.section`
    background: rgb(55,188,228);
    background: linear-gradient(90deg, rgba(55,188,228,1) 0%, rgba(163,170,225,1) 50%, rgba(231,159,197,1) 100%);   
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 100vh;
`
const StyledPhoto = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    margin: 2rem 0;
    @media screen and (max-width: 960px){
        width: 275px;
        height: 275px;
    }
`

const StyledTitle = styled.h1`
    font-size: 3.6rem;
    color: #fff;
    margin: 2rem auto;
`
const StyledDescription = styled.p`
    font-size: 2rem;
    color: #fff;
    width: 40%;
    text-indent: 1.5rem;
    line-height: 2.4rem;
    text-align: center;
    margin-bottom: 1.5rem;
    @media (max-width: 960px){
        font-size: 1.8rem;
        width: 95%;
    }
`
const Kolorowo = () => (
    <StyledKolorowoWrapper>
    <StyledPhoto src={Logo}/>
    <StyledTitle>Kolorowo</StyledTitle>
    <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet neque nisi. Proin vel elit tincidunt, lobortis felis a, convallis massa. Suspendisse potenti. Aenean quis orci et neque venenatis varius. Proin volutpat ultricies elementum. Morbi nec mollis nibh, ut sollicitudin tellus. Etiam ullamcorper imperdiet porta. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at libero nibh. Aenean sed finibus diam. Cras erat nibh, elementum id consequat quis, dignissim id nunc.</StyledDescription>
    <StyledDescription>Maecenas rhoncus nunc a turpis pretium commodo. Fusce non congue justo. Phasellus sit amet vulputate est. Mauris dapibus interdum lectus, vitae lobortis neque bibendum a. Fusce vitae massa justo. Duis eu luctus turpis, at commodo libero. Nunc sodales consectetur ultrices. Sed mollis dapibus mi, sit amet blandit justo auctor sed. Fusce tincidunt ligula eget ipsum rutrum aliquam. Aliquam erat volutpat. Donec varius felis ut sem malesuada scelerisque. Donec at ultricies nulla. Vivamus volutpat commodo enim, non accumsan diam rhoncus non. Curabitur non sem maximus, tempus orci eleifend, mattis nibh.</StyledDescription>

    </StyledKolorowoWrapper>
)
 
export default Kolorowo;