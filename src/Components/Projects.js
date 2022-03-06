import React from 'react'
import HoverVideoPlayer from "react-hover-video-player";
import PausedOverlay from "./PausedOverlay";
import LoadingOverlay from "./LoadingOverlay";

import Video1 from '../Media/video1.mp4'
import Cover1 from '../Media/emoji.png'
import Cover2 from '../Media/message.png'
import Cover3 from '../Media/ml.png'
import Cover4 from '../Media/portfolio.png'
import closeIcon from '../Media/close.png'

function Projects(){
    const [isModalActive, setIsModalActive] = React.useState(false)
    const styleChange = {
        opacity: '1',
        transition: 'opacity 0.9s ease-in'
    }
     const showModal = () =>{
        setIsModalActive(!isModalActive)
        console.log(isModalActive)
        document.body.style.overflow = isModalActive ? 'unset' : 'hidden'
    }
    const modal = 
    (<div className='modal--container'> 
        <div style={styleChange} className='content--container'>
            <div onClick={showModal} className='btn--close'>
                <img src={closeIcon}/>
            </div>
            <video muted loop autoPlay>
                <source src={Video1} type='video/mp4'/>
            </video>
            <h2 className='content--title'>App Name</h2>
            <p className='content--details'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <p className='content--description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, wh</p>
        </div>
    </div>)
    
    
    console.log(isModalActive)
    return(
        <>
        <h2 className='section--title' id='projects'>Here you can check <span>some</span> of <span>my projects</span></h2>
        <div className='projects--container'>
        
        <div className='p-wrap'>
            {/* <HoverVideoPlayer
                className='image--container'
                videoSrc={Video1}
                pausedOverlay={<PausedOverlay imageURL={Cover1}/>}
                loadingOverlay={<LoadingOverlay />}
            />
            <HoverVideoPlayer
                className='image--container'
                videoSrc={Video1}
                pausedOverlay={<PausedOverlay imageURL={Cover2}/>}
                loadingOverlay={<LoadingOverlay />}
            />
            <HoverVideoPlayer
                className='image--container'
                videoSrc={Video1}
                pausedOverlay={<PausedOverlay imageURL={Cover3}/>}
                loadingOverlay={<LoadingOverlay />}
            />
            <HoverVideoPlayer
                className='image--container'
                videoSrc={Video1}
                pausedOverlay={<PausedOverlay imageURL={Cover4}/>}
                loadingOverlay={<LoadingOverlay />}
            /> */}
            {isModalActive && modal}
            <div className='image--container'>
                <img src={Cover1} alt={`thumbnail_${Cover1}`} />
                <div onClick={showModal} className='hover--content'>Learn More</div>
            </div>
            <div className='image--container'>
                <img src={Cover2} alt={`thumbnail_${Cover2}`} />
                <div onClick={showModal} className='hover--content'>Learn More</div>
            </div>
            <div className='image--container'>
                <img src={Cover3} alt={`thumbnail_${Cover3}`} />
                <div onClick={showModal} className='hover--content'>Learn More</div>
            </div>
            <div className='image--container'>
                <img src={Cover4} alt={`thumbnail_${Cover4}`} />
                <div onClick={showModal} className='hover--content'>Learn More</div>
            </div>
            {/* <img className='image--container' src={Cover2} alt={`thumbnail_${Cover2}`} />
            <img className='image--container' src={Cover3} alt={`thumbnail_${Cover3}`} />
            <img className='image--container' src={Cover4} alt={`thumbnail_${Cover4}`} /> */}
        </div>
      </div>
        </>
    )
}

export default Projects