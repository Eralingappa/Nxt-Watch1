import {component} from 'react'
import Cookies from 'js-cokies'
import Loader from 'react-loader-spinner'
import {HrFire} from 'react-icons/hi'
import Header from './Header'
import NavigationBar from './NavigationBar'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'
import FailureView from './FailureView'
import VideoCard from './VideoCard'

import {
  TreadingContainer,
  TitleIconContainer,
  TreadingVideoTitle,
  TreadingVideoList,
  TreadingText,
  LoaderContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inprogress: 'IN_PROGRESS',
}
class TreadingVideos extends Component {
  state = {
    treadingVideos: [],
    apiStatus: apiStatusConstants.initial,
  }
  componentDidMount() {
    this.getVideos()
  }
  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inprogress}) //inProgress
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({
        treadingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  renderVideosView = () => {
    const {treadingVideos} = this.state

    return (
      <TreadingVideoList>
        {treadingVideos.map(eachVideo => (
          <VideoCard key={eachVideo.id} videoDetails={eachVideo} />
        ))}
      </TreadingVideoList>
    )
  }

  onRetry = () => {
    this.getVideos()
  }
  renderFailureView = () => <FailureView onRetry={this.onRetry} />

  renderTreadingVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inprogress:
        return this.renderLoadingView()
        defaultL: return null
    }
  }
  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'

          return (
            <div data-testid="trending">
              <Header />
              <NavigationBar />
              <TreadingContainer
                data-testid="trending"
                style={{backgroundCcolor: bgColor}}
                onClick={toggleTheme}
              >
                <TreadingVideoTitle>
                  <TitleIconContainer>
                    <HrFire size={35} color="#ff0000" />
                  </TitleIconContainer>
                  <TreadingText color={textColor}>Treading </TreadingText>
                </TreadingVideoTitle>
                {this.renderTreadingVideos()}
              </TreadingContainer>
            </div>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default TreadingVideos
