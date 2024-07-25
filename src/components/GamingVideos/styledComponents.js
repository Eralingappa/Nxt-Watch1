import styled from 'styled-components'

export const GamingContainer = styled.div`
background-color:${props => props.bgColor}
min-height:100vh;
margin-top:50px;
margin-bottom:60px;
overflow-y:auto;

`
export const GamingVideoTitle = styled.div`
display:flex;
aligin-itemms:center;
`
export const GamingTitleIconContainer = styled.div`
width:40px;
height:40px;
border-radius:80px;
margin-left:10px;
margin-right:10px;
dispaly:flex;
justify-content:center;
align-items:center;
`
export const GamingText = styled.h1`
font-family:'Roboto';
font-size:25px;
color:${props => props.color}
`
export const GamingVideoList = styled.ul`
list-style-type:none;
display:flex;
flex-direction:row;
flex-wrap:wrap;
pading:0px;

`
export const LoaderContainer = styled.div`
display:flex;
flex-direction:center;
align-items:center;
min-height:80vh;

`
