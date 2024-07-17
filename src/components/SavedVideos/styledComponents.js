import styled from 'styledComponents.js'

export const SavedContainer =styled.div`
background-color:${props =>bgColor};
min-height:100vh;
margin-top:60px;
margin-buttom:60px;
overflow-y:auto;

`
export const SavedVideoTitle=styled.div`
display:flex;
aligin-items:center;
`

export const SavedTitleIconContainer =styled.dov`
heighnt:40px;
width:40px;
border-radius:40px;
display:flex;
justify-content:center;
`
export const SavedText =styled.h1`
font-family:'Roboto';
font-size:25px;
color:${props =>props.color}

`
export const NoSavedVideosList = styled.ul`
list-style-type:none;
display:flex;
flex-direction:column;
margin:0px;
padding:0px;

`
export const NoSavedVideosView =styled.div`
display:flex;
flex-direction:column;
justify-content:center;
aligin-item:center;

`
export const NoSavedVideosImg =styled.img`
font-family:'Roboto';
font-size:25px;

`
export const NoSavedVideosHeading =styled.h1`
font-family:'Roboto';
font-size:25px;
color:${props =>props.noteColor}
text-align:center;
`