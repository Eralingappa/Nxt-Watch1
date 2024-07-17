import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const NavbarHeader =styled.nav`
position:fixed;
top:0;
display:flex;
justify-content:space-between;
aligin-item:center;
padding:10px;
height:30px

`
export default HeaderLogo=styled.img`
width:80px;
height:30px;

`
export default ActionContainer=styled.div`
display:flex;
justify-content:flex-end;
align-items:center;

`
export default ThemeButton =styled.button `
background:none;
margin-right:10px;

`
export default LogoutButton =styled.button`
border:1px solid;
font-family:'Roboto;
padding-left:10px;
padding-right:10px;
padding-top:5px;

`
export default LogoutIconButton =styled.button`
border:none;
background:none;

`
export const ProfileImage=styled.img`
width:30px;
height:30px;
margin-right:10px

`
export const ModalContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
height:150px;
width:120px;
background-color:#cbd5e1;

`
export const CloseButton=styled.button`
background-color:trasparent;
border:1px solid grey;
padding:8px;
padding-right:12px;
padding-left:12px;
color:grey;
font-family:'Roboto';
font-weight:bold;

`
export const ConfirmButton =styled.button`
aligin-self:flex-end;
background-color:#3b82f6;
padding-right:12px;
padding-left:12px;
border:1px solid #3b82f6l

`
export default ModelDesc=styled.p`
font-family:'Roboto';
font-size:15px;
margin:10px;
color:black;
text-align:center;

`
export const ButtonsContainer=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
`
export default LogoLink=styled(Link)`
text-direction:none;
`