import styled from 'styled-components'
export const ListItem = styled.li`
background:none;
width:none;
display:flex;
flex-direction:column;
align-self:center;

`
export const ThumbNailImage = styled.img`
width:100%;
`
export const VideoDetails = styled.div`
displa:flex;
width:100%;
justify-content:flex-start;
`
export const ProfileImage = styled.img`
width:30px;
height:30px;
border-radius:50px;
margin:20px;
`
export const ContentSection = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
`
export const Title = styled.p`
font-family:'Roboto';
font-size:25px;
color:${props => props.color};

`
export const Dot = styled.span`
width:20px;
height:20px;
border-radius:50%;
padding-right:10px;
padding-left:10px;
`
