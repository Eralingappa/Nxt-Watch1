import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import {
  ItemLink,
  GamingListItem,
  GamingThumbNailImage,
  GamingContentSection,
  GamingTitle,
  GamingViewsAndDate,
} from './styledComponents'

const VideoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textcolor = isDarkTheme ? '#f9f9f9' : '#321f20'

        return (
          <ItemLink to={`/videos/${id}`} className='link'>
            <GamingListItem>
              <GamingThumbNailImage src={thumbnailUrl} alt='video thumbnail' />
              <GamingContentSection>
                <GamingTitle color={textcolor}>{title}</GamingTitle>
                <GamingViewsAndDate color={textcolor}>
                  {viewCount} Watching WorldWide
                </GamingViewsAndDate>
              </GamingContentSection>
            </GamingListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default VideoCard
