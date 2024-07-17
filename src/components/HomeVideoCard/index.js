import {Link} from 'react-router-dom'

import ThemeAndVideosContext from './context/ThemeAndVideosContext'

import {
  ListItem,
  ThumbNailImage,
  VideosDetails,
  ProfileImage,
  ContentSection,
  ChannelName,
  ViewsAndDate,
  Dot,
} from '.styledComponents'
import './index.css'

const HomeVideoCard = props => {
  const {video} = props
  const {
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    name,
    profileImageUrl,
  } = video
  return (
    <ThemeAndVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/video.${id}`} className="Link">
            <ListItem>
              <ThumbNailImage src={thumbnailUrl} alt="video thumbnail" />
              <VideosDetails>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <ContentSection>
                  <Title color={textColor}>{title}</Title>
                  <ChannelName color={textColor}>{name}</ChannelName>
                  <ViewsAndDate color={textColor}>
                    {viewCount} views <Dot>&#8226</Dot>
                  </ViewsAndDate>
                </ContentSection>
              </VideosDetails>
            </ListItem>
          </Link>
        )
      }}
    </ThemeAndVideosContext.Consumer>
  )
}
export default HomeVideoCard
