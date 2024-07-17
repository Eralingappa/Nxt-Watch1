import {
    NoVideosView,
    NoVideosImage,
    NoVideosHeading,
    NoVideosNote,
    RetryButton,
    VideoCardList,

}from '/.styledComponents'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'
import HomeVideoCard from './HomeVideoCard'

const HomeVideos =props =>{
    const {homeVideos, onRetry}=props
    const videoCount=homeVideos.length
    
    const onClickRetry =() =>{
        onRetry()
    }
    return(
        <ThemeAndVideoContext.Consumer>
        {value =>{
            const {isDarkTheme}=value
            const headingColor=isDarkTheme ?'#f1f5f9':'#1e293b'
            const noteColor=isDarkTheme ?'#e2e8f0': '#475569'

            return videoCount >0?(
                <VideoCardList>
                {homeVideos.map(eachVideo =>(
                    <HomeVideoCard video={eachVideo} key={eachVideo.id} />
                ))}
                </VideoCardList>
            ):(
                <NoVideosView>
                <NoVideosImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"/>
                <NoVideosHeading headingColor={headingColor}>
                NO Search results found
                </NoVideosHeading>
                <NoVideosNote noteColor={noteColor}>
                Try different keyWords or remove search filters
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