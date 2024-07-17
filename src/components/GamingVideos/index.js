import {Component} from 'react'
import Cookies from 'react-cookies'
import Loader from 'react-loader-spinner'

import {SiYoutubegaming} from 'react-icons/si'
import Header from './Header'
import NavigationBar from './NavigationBar'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'
import FailureView from './FailureView'
import GamingVideoCard from './GamingVideoCard'
import {
  GamingContainer,
  GamingTitleIconContainer,
  GamingVideoTitle,
  GamingVideoList,
  GamingText,
  LoaderContainer,
} from './StyledComponents'

const apiStatusConstnts = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}
class GamingVideos extends Component {
  state = {
    gamingVideos: [],
    apiStatus: apiStatusConstnts.initial,
  }
  componentDidMount() {
    this.getVideos()
  }
  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstnts.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_Url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiStatusConstnts.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstnts.failure})
    }
  }
  renderLoadingView = () => (
    <LoaderContainer data-testis="loader">
      <Loader type="ThreeDots" color="#069fff" height="50" width="50" />
    </LoaderContainer>
  )
  renderVideosView = () => {
    const {gamingVideos} = this.state
    return (
      <GamingVideoList>
        {gamingVideos.map(eachVideo => (
          <GamingVideoCard key={eachVideo.id} videosDetails={eachVideo} />
        ))}
      </GamingVideoList>
    )
  }
  onRetry = () => {
    this.getVideos()
  }

  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  rendeerTrendingVideos = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstnts.success:
        return this.renderVideosView()
      case apiStatusConstnts.failure:
        return this.renderFailureView()
      case apiStatusConstnts > inProgress:
        return this.renderLoadingView()
      default:
        null
    }
  }
  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f00f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <div>
              <Header />
              <NavigationBar />
              <GamingContainer data-testid="gaming" bgColor={bgColor}>
                <GamingVideoTitle>
                  <GamingTitleIconContainer>
                    <SiYoutubegaming size={35} color="#ff0000" />
                  </GamingTitleIconContainer>
                  <GamingText>color={textColor} Gaming</GamingText>
                </GamingVideoTitle>
                {this.rendeerTrendingVideos()}
              </GamingContainer>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default GamingVideos
