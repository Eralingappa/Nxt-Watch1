import {CgPlayListAdd}from 'react-icons/cg'
import Header from './Header'
import NavigationBar  from './contentx /NavigationBar'
import ThemeAndVideoContext  from './context/ThemeAndVideoContext'
import {
    SavedContainer,
    SavedTitleIconContainer,
    SavedVideoTilte,
    SavedVideoList,
    SavedVideoText,
    NoSavedVideosView,
    NoSavedVideosImage,
    NoSavedVideosHeading,
    NoSavedVideosNote,
}from './styledComponents'

const SavedVideos=() =>(
    <ThemeAndVideoContext.Consumer>
    {value =>{
        const {isDarkTheme, savedVideos} =value
        const bgColor= isDarkTheme? '#0f0f0f': '#f9f9f9'
        const textColor= isDarkTheme ? '#f9f9f9': '#231f20'
        const headingColor= isDarkTheme ? '#f1f5f9': '#1e293b'
        const noteColor =isDarkTheme ? 'e2e8f0' :'475569'

        return(
            <>
            <Header/>
            <NavigationBar />
            <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideoTilte>
            <SavedTitleIconContainer>
            <CgPlayListAdd size={35} color="#ff0000"/>
            </SavedTitleIconContainer>
            <SavedVideoText color={textColor}>Saved Videos</SavedVideoText>
            </SavedVideoTilte>
            {savedVideos .lenght >0 ?(
                <SavedVideoList>
                {savedVideos.map(eachVideo =>(
                    <VideoCard key={eachVideo.id} videoDetails={eachVideo}/>
                ))}
                </SavedVideoList>
            ):(
                <NoSavedVideosView>
                <NoSavedVideosImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" alt="no saved videos"/>
                <NoSavedVideosHeading headingColor={headingColor}>
                No saved videos found
                </NoSavedVideosHeading>
                <NoSavedVideosNote noteColor={noteColor}>
                You can save your videos while watching them 
                
                </NoSavedVideosNote>
                </NoSavedVideosView>
            )}
            </SavedContainer>
            </>
        )

    }}
    
    </ThemeAndVideoContext.Consumer>

)

export  default SavedVideos