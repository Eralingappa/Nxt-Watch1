import styled from 'styled-components'

export const NoVideosView = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:none;

`
export const NoVideosImage = styled.img`
width:200px;
`
export const NoVideosHeading = styled.h1`
font-family:'Roboto';
font-size:15px;
color:${props => props.headingColor}
`
export const NoVideosNote = styled.p`
font-family:'Roboto';
font-size:18px;
color:${props => props.noteColor}

`
export const RetryButton = styled.button`
border:none;
background-color:#4f46e5;
border-radius:3px;
padding-right:10px;
padding-left:10px;
padding-top:10px;
padding-bottom:5px;
font-family:'Roboto';
font-size:25px;
`

export const VideoCardList = styled.ul`
list-style-type:none;
padding:0px;
flex-wrap:flex-start;
justify-content:flex-start;
`
