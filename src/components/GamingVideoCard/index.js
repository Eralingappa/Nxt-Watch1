import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

import {
  ItemLink,
  GamingListItem,
  GamingContentSection,
  GamingThumbNailImage,
  GamingTitle,
  GamingViewsAndData,
} from './StyledComponents'

const videoCard = props => {
  const {videoDetails} = props
  const {id, title, thumbnilUrl, videoCount} = videoDetails

  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <ItemLink>
            <GamingListItem>
              <GamingThumbNailImage src={thumbnilUrl} alt="video thumbnil" />
              <GamingContentSection>
                <GamingTitle color={textColor}>{title}</GamingTitle>
                <GamingViewsAndData color={textColor}>
                  {videoCount} Watching WorldWide
                </GamingViewsAndData>
              </GamingContentSection>
            </GamingListItem>
          </ItemLink>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default videoCard
