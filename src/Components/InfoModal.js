import React from "react";

import Video1 from '../Media/video1.mp4'
import closeIcon from '../Media/close.svg'

function InfoModal(props){
    
    return(
        <div className='modal--container'> 
            <div className='content--container'>
                <div onClick={props.close} className='btn--close'>
                    <img src={closeIcon}/>
                </div>
                <video muted loop autoPlay>
                    <source src={Video1} type='video/mp4'/>
                </video>
                <h2 className='content--title'>{props.name}</h2>
                <p className='content--details'>{props.details}</p>
                <p className='content--description'>{props.description}</p>
            </div>
        </div>
    )
}

export default InfoModal