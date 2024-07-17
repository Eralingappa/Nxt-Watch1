import styled from 'styled-components'

export const GamingContainer = styled.div`
background-color:${props => props.bgColor};
min-height:100vh;
margin-top:60px;
margin-bottom:60px;

`
export const GamingVideoTitle = styled.div`
display:flex;
align-item:center;
`

export const GamingTitleIconContainer = styled.div`
width:30px;
height:30px;
border-radius:80px;
margin-left:10px;
disply:flex;
justify-content:center;
align-item:center;
`
export const GamingText = styled.h1`
font-family:"Roboto";
font-size:24px;


`
export const GamingVideoList = styled.u1`

display:flex;
flex-direction:row;

`
export const LoaderContainer = styled.div`
display:flex;
align-items:center;
justify-conent:center;
`
