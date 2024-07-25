import ReactPlayer from 'react-player'
import {AiOutlineLike, AiOutlineDisLike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'

import {
  VideoPlayer,
  PlayVideoTitle,
  PlayVideoStatus,
  PlayVideoStatusConstainer,
  PLayVideoDot,
  PlaySocialButtonContainer,
  SocialButton,
  ButtonText,
  HrLine,
  ChannelImage,
  ChannelContainer,
  ChannelInfo,
  ChannelName,
  ChannelSubscribers,
  ChannelDescripition,
  BtnContainer,
} from './styledComponents'

const PlayVideoView = props => {
  const {videoDetails, isLiked, isDisLiked, clickLiked, clickDisLiked} = props
  const onClickLike = () => {
    clickLiked()
  }
  const onClickDisLike = () => {
    clickDisLiked()
  }
  return (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDarkTheme, addVideo, savedVideos} = value
        const textColor = isDarkTheme ? '#64748b' : '#231f20'
        let isSaved
        const index = savedVideos.findIndex(
          eachVideo => eachVideo.id === videoDetails.id,
        )
        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }
        const SaveIconColor = isSaved ? '#2563eb' : 'textColor'

        const onClickSave = () => {
          addVideo(videoDetails)
        }
        return (
          <VideoPlayer>
            <ReactPlayer url={videoDetails.videoUrl} controls width="100%" />
            <PlayVideoTitle color={textColor}>
              {videoDetails.title}
            </PlayVideoTitle>
            <PlayVideoStatusConstainer>
              <PlayVideoStatus color={textColor}>
                {videoDetails.viewCount} views
                <PLayVideoDot>&8226;</PLayVideoDot>
                {videoDetails.publishedAt}
              </PlayVideoStatus>
              <PlaySocialButtonContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isLiked ? '#2563eb' : '#64748b'}
                    onClick={onClickLike}
                  >
                    <AiOutlineLike size={25} />
                    <ButtonText>Like</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={isDisLiked ? '2563eb' : '#64748b'}
                    onClick={onClickDisLike}
                  >
                    <AiOutlineDisLike size={25} />
                    <ButtonText>Disliked</ButtonText>
                  </SocialButton>
                </BtnContainer>
                <BtnContainer>
                  <SocialButton
                    type="button"
                    color={SaveIconColor}
                    onClick={onClickSave}
                  >
                    <BiListPlus size={25} />
                    <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                  </SocialButton>
                </BtnContainer>
              </PlaySocialButtonContainer>
            </PlayVideoStatusConstainer>
            <HrLine />
            <ChannelContainer>
              <ChannelImage
                src={videoDetails.profileImgUrl}
                alt="channel logo"
              />
              <ChannelInfo>
                <ChannelName color={textColor}>{videoDetails.name}</ChannelName>
                <ChannelSubscribers color={textColor}>
                  {videoDetails.subscriberCount}Subscribers
                </ChannelSubscribers>
                <ChannelDescripition color={textColor}>
                  {videoDetails.descripition}
                </ChannelDescripition>
              </ChannelInfo>
            </ChannelContainer>
          </VideoPlayer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )
}
export default PlayVideoView
