import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
display:flex;

`
export const NavigationLgContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
width:250px;
height:92%;
position:fixed;
top:60px;
background-color:${props => props.bgColor};

`
export const NavOptions = styled.ul`
display:flex;
flex-direction:column;
flex-grow:1;
list-style-type:none;
padding:0px;
margin-top:0px;
`
export const NavLink = styled(Link)`
text-decoraton:none;
`
export const NavLinkContainer = styled.div`
display:flex;
flex-direction:row;
align-items:center;
background-color:${props => props.bgColor};
`

export const NavText = styled.p`
font-family:'Roboto';
font-size:25px;
margin-left:20px;
color:${props => props.color};
padding-left:20px;
align-items:center;
`
export const ContactInfo = styled.div`
display:flex;
flex-direction:column;
padding-left:20px;
`
export const ContactHeading = styled.h1`
font-family:'Roboto';
font-size:25px;
font-weight:bold;
color:${props => props.color}
`
export const ContactIcons = styled.div`
display:flex;
align-items:center;
`
export const ContactImage = styled.img`
width:25px;
height:25px;
border-radius:50px;
margin-right:10px;
`
export const ContactNote=styled.p`
font-family:'Roboto';
font-size:25px;
color:${props => props.color}
`
export const NavigationSmallContainer=styled.nav`
display:flex;
width:100%;
height:60px;
justify-content:space-between;
background-color:${props => props.color}
position:0;
align-items:center;
`