import styled from 'styled-components'

export const NotFoundContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:${props => props.bgColor};
min-height:92vh;
margin-top:60px:
margin-bottom:60px;
overflow-y:auto;
`
export const NotFoundVideosView = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:none;
`
export const NotFoundVideosImage = styled.img`
width:200px;
`
export const NotFoundVideosHeading = styled.h1`
font-family:'Roboto';
font-size:25px;
text-align:center;
color:${props =>props.headingColor}
`
export const NotFoundVideosNote=styled.p`
font-family:'Roboto';
font-size:18px;
text-align:center;
color:${props =>props.noteColor}
`
