import styled from 'styled-components'

export const FailedView = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:none;
`
export const FailedImage = styled.img`
width:200px;
`
export const FailedHeading = styled.h1`
font-family:'Roboto';
font-size:25px;
color:${props => props.headingColor}

`
export const FailedNote = styled.p`
font-family:'Roboto';
font-size:18px;
color:${props => props.noteColor}
text-align:center;
`
export const RetryButton = styled.button`
background-color:#4f46e5;
border-radius:3px;
color:#ffffff;
padding-left:12px;
padding-bottom:center;
`
