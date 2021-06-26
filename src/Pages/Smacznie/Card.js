import React from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'
import PropTypes from 'prop-types'
import Biscuit from '../../Assets/Biscuits.jpg'


const StyledCardWrapper = styled.div`
    box-shadow: 0 10px 30px -10px hsla(0,0%,0%,0.8);
    color: cornsilk;
    width: 340px;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 25px;
    background-color: ${({bgColor})=> bgColor || '#9BB7D4'};
    margin: 25px 10px;
    transition: all .3s ease;
    @media screen and (max-width: 960px){
        margin: 25px 15px;
        width: 310px;
        height: 350px;
    }
    :hover{
        cursor: pointer;
    }
    :hover h2{
        color: #ff1493;
    }
`
const SuperInfo = styled.p`
    flex-basis: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PhotoWrapper = styled.div`
    flex-basis: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 220px;
    max-width: 340px;
    @media screen and (max-width: 960px){
        max-height: 220px;
        max-width: 320px;
    }
`

const CakePhoto = styled.img`
    width: 100%;
    height: 100%;
`

const CakeName = styled.h2`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 20%;
`

const Prize = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;    
    flex-basis: 10%;
`
class Card extends React.Component{
    
    state = {
        redirect: false,
    }
    
    
    handleViewportCard = () => {
        this.setState({redirect: true})
        
    }
        

    render(){     
        const {...cake} = this.props
        const {redirect} = this.state
        if(redirect){
            return <Redirect to={`smacznie/${cake.id}`} />
        }
        return(
    <StyledCardWrapper bgColor={cake.backgroundColor} onClick={this.handleViewportCard}>
        <SuperInfo superInfo={cake.superInfo}>
            {cake.superInfo ? `${cake.superInfo}` : ''}
        </SuperInfo>
        <PhotoWrapper>
            {cake.photo ? <CakePhoto src={cake.photo}/> : <CakePhoto src={Biscuit}/>}
        </PhotoWrapper>
        <CakeName>{cake.name}</CakeName>
        <Prize>{cake.prize} {cake.value}</Prize>
    </StyledCardWrapper>
        )
    }
}


Card.propTypes = {
    name: PropTypes.string,
    prize: PropTypes.string,
    backgroundColor: PropTypes.oneOf(['#37bce4','#a3aae1','#e79fc5','#9BB7D4',]),
    superInfo: PropTypes.string,
    photo: PropTypes.string,
    value: PropTypes.string
}

Card.defaultProps = {
    name: 'Biszkopt',
    prize: 'zero',
    backgroundColor: '#9BB7D4',
    superInfo: null,
    photo: null,
    value: 'szt.'
}

export default Card;