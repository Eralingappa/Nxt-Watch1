import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ItemLink = styled(Link)`
text-direction:none;
`
export const TrendingListItem = styled.li`
background:none;
width:100%;
display:flex;
flex-direction:column;
margin-bottom:20px;
`

export const TrendingThumbNailImage = styled.img`
width:100%;
`
export const TrendingVideoDetails = styled.div`
display:flex;
justify-content:flex-start;
width:100%;
`
export const TrendingProfileImage = styled.img`
width:30px;
height:40px;
border-radius:50px;
margin:20px;
`
export const TrendingContentSection = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
`
export const TrendingTitle = styled.p`
font-family:'Roboto';
font-size:113px;
color:${props => props.color}
`
export const TrendingViewsAndDate = styled.p`
font-family:'Roboto';
font-size:113px;
color:${props => props.color}

`
export const TrendingDot = styled.span`
width:20px;
height:20px;
border-radius:50%;
padding-right:5px;
padding-left:5px;
`
