import styled, {css} from 'styled-components'

const Button = styled.button`
    background-color: ${({primary})=>primary ? '#ff1493' : '#ffcff1'};
    color: ${({primary})=>primary ? '#ffcff1' : '#ff1493'};
    white-space: nowrap;
    border-radius: 5px;
    padding: ${({small})=>small ? '10px 20px' : '12px 64px'};
    font-size: ${({bigFont})=>bigFont ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;
    
    &:hover{
        transition: all .4s ease;
        background-color: ${({primary})=>primary ? '#ffcff1' : '#ff1493'};
        color: ${({primary})=>primary ? '#ff1493' : '#ffcff1' } 
    }

    @media screen and (max-width: 960px){
        width: 90%;
    }

    ${({facebookBtn})=>facebookBtn && css `
        background-color: #4267B2;
        color: #ffffff;
        height: 64px;
        font-weight: 600;
        transition: all .4s ease;
        &:hover{
            background-color: #fff;
            color: #4267B2; 
        }
    `}
    ${({instagramBtn})=>instagramBtn && css `
        background-color: #f05161;
        color: #ffffff;
        height: 64px;
        font-weight: 600;
        transition: all .4s ease;
        &:hover{
            background-color: #fff;
            color: #f05161; 
        }
    `}
`


export default Button