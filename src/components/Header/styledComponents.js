import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHeader = styled.nav`
position:fixed;
display:flex;
justify-content:space-between;
align-items:center;
padding:10px;
height:60px;
width:100%;
background-color:${props => props.bgColor}
`
export const HeaderLogo = styled.img`
width:80px;
height:40px;

`
export const ActionContainer = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;

`
export const ThemeButton = styled.button`
background:none;
border:none;
margin-right:10px
`
export const LoguotIconButton = styled.button`
background:none;
border:none;
`
export const LoguotButton = styled.button`
border:1px solid;
font-family:'Roboto';
padding-left:10px;
padding-right:10px;
padding-top:10px;
padding-bottom:5px;
background-color:${props => props.bgColor}
border-color:${props => props.color}
`
export const ProfileImage = styled.img`
width:30px;
height:30px;
margin-right:10px;

`
export const ModalContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
height:120px;
width:250px;
background-color:#cbd5e1;
padding:20px;
`
export const CloseButton = styled.button`
background-color:transparent;
border:1px solid grey;
padding:8px;
padding-left:12px;
padding-right:12px;
color:grey;
margin:10px;
outline:12px;
font-family:'Roboto';
font-weight:bold;
font-size:12px;
`
export const ConfirmButton = styled.button`
align-self:flex-end;
background-color:#3b82f6;
color:white;
padding:8px;
padding-left:12px;
padding-right:12px;
margin:10px;
font-family:'Roboto';
font-weight:bold;
font-size:12px;
`
export const ModalDesc = styled.p`
font-family:'Roboto';
font-size:15px;
margin:10px;
color:black;
text-align:center;
`

export const ButtonsContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;

`
export const LogoLink = styled(Link)`
text-decoration:none;
`
