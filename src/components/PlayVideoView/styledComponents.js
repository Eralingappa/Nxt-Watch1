import styled from 'styled-components'

export const VideoPlayer = styled.div`
padding:20px;
`
export const PlayVideoTitle = styled.p`
font-family:'Roboto';
font-size:25px;
color:${props => props.color}
`
export const PlayVideoStatusConstainer = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`
export const PlayVideoStatus = styled.p`
font-family:'Roboto';
font-size:12px;
color:${props => props.color}
`
export const PLayVideoDot = styled.span`
width:20px;
height:20px;
border-radius:59%;
padding-right:5px;
padding-left:5px;

`
export const PlaySocialButtonContainer = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
`
export const SocialButton = styled.button`
border:none;
background:none;
display:flex;
justify-content:center;
align-items:center;
color:${props => props.color}
`
export const ButtonText = styled.span`
margin-left:5px;
color:#2563eb;
`
export const HrLine = styled.hr`
border:1px solid #909090;

`
export const ChannelContainer = styled.div`
display:flex;
align-items:flex-start;
margin-top:20px;
`
export const ChannelImage = styled.img`
width:30px;
height:30px;
border-radius:50px;
`
export const ChannelInfo = styled.div`
display:flex;
flex-direction:column;
`
export const ChannelName = styled.p`
font-family:'Roboto';
font-size:15px;
color:${props => props.color}
`
export const ChannelSubscribers = styled.p`
font-family:'Roboto';
font-size:12px;
color:${props => props.color}
`
export const ChannelDescripition = styled.p`
font-family:'Roboto';
font-size:12px;
color:${props => props.color}
`
export const BtnContainer = styled.div`
display:flex;
background:none;
`
