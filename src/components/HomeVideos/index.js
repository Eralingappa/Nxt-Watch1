import {
  NoVideosView,
  NoVideosImage,
  NoVideosHeading,
  NoVideosNote,
  RetryButton,
  VideoCardList,
} from 'styledComponents'

import ThemeAndVideoContext from './context/ThemeAndVideoContext'
import HomeVideoCard from './HomeVideoCard'
const HomeVideos = props => {
  const {homevideos, onRetry} = props
  const videoCount = homevideos.length

  const onClickRetry = () => {
    onRetry()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e32e8g0' : '#475569'

        return videoCount > 0 ? (
          <VideoCardList>
            {homevideos.map(eachVideo => (
              <HomeVideoCard video={eachVideo} key={eachVideo.id} />
            ))}
          </VideoCardList>
        ) : (
          <NoVideosView>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading noteColor={headingColor}>
              No Search results found
            </NoVideosHeading>
            <NoVideosNote noteColor={noteColor}>
              Try different keywords are remove search filter
            </NoVideosNote>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </NoVideosView>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default HomeVideos
