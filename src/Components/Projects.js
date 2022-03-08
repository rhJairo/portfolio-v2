import React from 'react'
import Data from '../data.json'

import Video1 from '../Media/video1.mp4'
import closeIcon from '../Media/close.png'

function Projects(){
    const imagesFolder = require.context('../Media/',true)
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

    const projectsCovers = Data.projects.map((project) => {
        const style = {
            color: project.id%2 === 0 ? 'white' : 'black'
        }
        return(
        <div key={project.id} className='image--container'>
            <img src={require(`../Media/${project.cover}`)}  />
            <h4 style={style} >{project.name}</h4>
            <div onClick={showModal} className='hover--content'>Learn More</div>
        </div>)
    })
    return(
        <>
        <h2 className='section--title' id='projects'>Here you can check <span>some</span> of <span>my projects</span></h2>
        <div className='projects--container'>
        
        <div className='p-wrap'>
            {isModalActive && modal}
            {projectsCovers}
        </div>
      </div>
        </>
    )
}

export default Projects