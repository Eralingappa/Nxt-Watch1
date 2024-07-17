import styled from 'styled-components'

export const TreadingContainer = styled.div`
background-color:${props =>props.bgColor};
min-height:100vh;
margin-top:60px;
margin-bottom:60px;
`
export const TreadingVideoTitle=styled.p`
font-family:'Roboto';
font-size:12px;

`

export const TitleIconContainer =styled.div`
width:40px;
height:40px;
border-radius:80px;
margin-left:10px;
margin-right:10px;
display:flex;
justify-content:center;
aligin-items:center;
`

export const TreadingText =styled.h1`
font-family:'Roboto';
font-size:12px;
color:${props=>props.color}

`
export const TreadingVideoList =styled.u1`
display:flex:
flex-direction:column;
list-style-type:none;
margin:0px;
`
export const LoaderContainer =styled.div`
display:flex;
justify-content:center;
aligin-items:center;
min-height:80vh
`
