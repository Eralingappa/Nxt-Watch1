import styled from 'styled-components'

export const SavedContainer = styled.div`
background-color:${props => props.bgColor};
min-height:100vh;
margin-top:60px:
margin-bottom:60px;
overflow-y:auto;

`
export const SavedVideoTitle = styled.div`
display:flex;
align-items:center;

`
export const SavedTitleIconContainer = styled.div`
width:40px;
height:40px;
border-radius:80px;
margin-right:10px;
margin-left:10px;
display:flex;
justify-content:center;
align-items:center;
`
export const SavedText = styled.h1`
font-family:'Roboto';
font-size:25px;
color:${props => props.color}

`
export const SavedVideoList = styled.ul`
list-style-type:none;
display:flex;
flex-direction:column;
margin:0px;
padding:0px;
`
export const NoSavedVideosView = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:none;
`
export const NoSavedVideosImage = styled.img`
width:200px;
`
export const NoSavedVideosNote = styled.p`
font-family:'Roboto';
font-size:18px;
color:${props => props.noteColor};
text-align:center;
`
