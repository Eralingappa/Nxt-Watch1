import {
    FailedView,
    FailedImage,
    FailedHeaing,
    FailedNote,
    RetryButton
}from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemerAndVideoContext'

const FailureView =props =>{
    const  {onRetry}=props
    
    const onClickRetry=()=>{
        onRetry()
    }
    return(

        <ThemeAndVideoContext.Consumer>
        {value =>{
            const {isDarkTheme}=value
            const headingColor=isDarkTheme ? '#f1f5f9':'#1e293b'
            const notColor=isDarkTheme ?'#ee2e8f0' :'#475569'

            const failureImageUrl=isDarkTheme
            ?'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            :'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

            return(
                <FailedView>
                <failureImageUrl src={failureImageUrl} alt="failure view"/>
                <FailedHeaing headingColor={headingColor}>
                Opis! Something went Wrong 
                </FailedHeaing>
                <FailedNote notColor={notColor}>
                We are having some trouble to compolete your request.<br/> Plase try again leter
                </FailedNote>
                <RetryButton type="button" onClick ={onClickRetry}>Retry</RetryButton>               
                </FailedView>
            )
        }}

        
        </ThemeAndVideoContext.Consumer>
    )
}
export default FailureView