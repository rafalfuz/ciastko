import React from 'react';
import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom'
import {GiStairsCake} from 'react-icons/gi'
import {MdMenu, MdClose} from 'react-icons/md'


const StyledNavbarWrapper = styled.nav`
    background: rgb(55,188,228);
    background: linear-gradient(90deg, rgb(55, 188, 228) 0%, rgba(163,170,225,1) 50%, rgba(231,159,197,1) 100%);
    height: 80px;
    display: flex;
`

const StyledNavbar = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: space-between;
`

const StyledNavLogo = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    font-size: 2.4rem;
    display: flex;
    color: cornsilk;
`

const StyledIcon = styled(GiStairsCake)`
    margin: 0;
`

const StyledCorpName = styled.h1`
    text-transform: uppercase;
`


const MobileIcon = styled.div`
        display: none;
    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0px;
        right: 0;
        transform: translate(-100%, 60%);
        cursor: pointer;
        font-size: 3rem;
    }
`

const StyledNavMenu = styled.ul`
    list-style-type: none;
    width: 50%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-around;
        @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({mobile})=>mobile ? 0 : '-100%'};
        background-color:  #ffcff1;
        transition: all .5s ease;
        }
    `
const StyledItem = styled.li`
    border-bottom: 2px solid transparent;
    &:hover{
        border-bottom: 2px solid #ff1493;
        transition: all .5s ease;
    }

    @media screen and (max-width: 960px){
        width: 100%;
        &:hover{
            border-bottom: 2px solid transparent;
        }
    }
`

const StyledNavLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 2.4rem;
    color: cornsilk;
    z-index: 9999;
    &.active{
        font-weight: 600;
        font-size: 2.5rem;
    }
`
class Navbar extends React.Component {

    state = {
        mobileActive: false,

    }

    handleMobileActive = () => (
        this.setState(prevState=>(
            {mobileActive: !prevState.mobileActive,
            }
        ))
    )
    
    removeMenuMobile = () => (
        this.setState({
            mobileActive: false
        })
    )

    render(){

        const {mobileActive} = this.state

        return(
            <StyledNavbarWrapper>
                <StyledNavbar>
                    <StyledNavLogo  to='/' onClick={this.removeMenuMobile}>
                        Lekkie<StyledCorpName>ci<StyledIcon />cho</StyledCorpName>
                    </StyledNavLogo>
        
                    <MobileIcon onClick={()=>this.handleMobileActive({mobileActive})}>{mobileActive ? <MdClose/> : <MdMenu/>}</MobileIcon>
                    {mobileActive ? <StyledNavMenu mobile>
                            <StyledItem mobile onClick={this.removeMenuMobile}><StyledNavLink as={NavLink} to ='/zdrowo'>Zdrowo</StyledNavLink></StyledItem>
                            <StyledItem mobile onClick={this.removeMenuMobile}><StyledNavLink as={NavLink} to ='/lekko'>Lekko</StyledNavLink></StyledItem>
                            <StyledItem mobile onClick={this.removeMenuMobile}><StyledNavLink as={NavLink} to ='/smacznie'>Smacznie</StyledNavLink></StyledItem>
                            <StyledItem mobile onClick={this.removeMenuMobile}><StyledNavLink as={NavLink} to ='/kolorowo'>Kolorowo</StyledNavLink></StyledItem>
                    </StyledNavMenu> : 
                        <StyledNavMenu>   
                            <StyledItem><StyledNavLink as={NavLink} to ='/zdrowo' activeclass='active'>Zdrowo</StyledNavLink></StyledItem>
                            <StyledItem><StyledNavLink as={NavLink} to ='/lekko' activeclass='active'>Lekko</StyledNavLink></StyledItem>
                            <StyledItem><StyledNavLink as={NavLink} to ='/smacznie' activeclass='active'>Smacznie</StyledNavLink></StyledItem>
                            <StyledItem><StyledNavLink as={NavLink} to ='/kolorowo' activeclass='active'>Kolorowo</StyledNavLink></StyledItem>
                        </StyledNavMenu>}
                        </StyledNavbar>
            </StyledNavbarWrapper>
            )
    }

    
}

export default Navbar