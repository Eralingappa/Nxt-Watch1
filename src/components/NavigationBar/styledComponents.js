import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const NavBar = styled.div`
dispaly:flex;
`
export const NavigationLgContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
width:130px;
height:92%;

`
export const NavOptions = styled.ul`
display:flex;
flex-direction:column;
flex-grow:1;
padding:0px;

`
export const NavLink = styled(Link)`
text-direction:none;
`
export const NavLinkContainer = styled.div`
display:flex;
flex-direction:row;
aligin-items:center;

`
export const NavText = styled.p`
font-family:'Roboto';
font-size:12px;
margin-left:15px;

`
export const ContactInfo = styled.div`
display:flex;
flex-direction:column;
padding-left:20px;

`
export const ContactHeading = styled.p`
font-family:'Roboto';
fon-size:12px;
font-wight:bold;

`
export const ContactIcons = styled.div`
dispaly:flex;
align-items:center;
`
export const ContactImage = styled.img`
height:25px;
width:25px;

`

export const ContactNote = styled.p`
font-family:'Robot';
font-size:18px;

`
export const NavigationSmallContainer = styled.nav`
display:flex;
width:100%;

`
