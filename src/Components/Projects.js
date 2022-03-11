import React from 'react'
import { gsap } from 'gsap'

import Modal from './InfoModal'
import Data from '../data.json'

function Projects(){
    const modalObj = {
        video: '',
        title: '',
        description: '',
        details: '',
        scroll: 'unset',
        isActive: false
    }
    const [modalInfo, setModalInfo] = React.useState(modalObj)

    React.useLayoutEffect(()=>{
        let tl = gsap.timeline()
        if(modalInfo.isActive){
            tl.to('.page-1', {scaleX:1, duration: 0.2, transformOrigin: "right center"})
            tl.to('.page-2', {scaleX:1, duration: 0.2, transformOrigin: "right center"})
            tl.to('.page-2', {scaleX:0, duration: 0.2, transformOrigin: "left center",  delay:0.2 })
            tl.to('.page-1', {scaleX:0, duration: 0.2, transformOrigin: "left center"})
            tl.from('.modal--container', { x: -500 , opacity: 0}, "text")
        }else{
            tl.to('.page-1', {scaleX:1, duration: 0.2, transformOrigin: "left center"})
            tl.to('.page-2', {scaleX:1, duration: 0.2, transformOrigin: "left center"})
            tl.to('.page-2', {scaleX:0, duration: 0.2, transformOrigin: "right center",  delay:0.2 })
            tl.to('.page-1', {scaleX:0, duration: 0.2, transformOrigin: "right center"})
        }
        // use a conditional and use the active property in the modalInfo 
        // to make the 'pasing pages effect' work in the opposite direction
        // also to leave the last 'cover' active so it can disguise the closing
        // of the modal since it cant be controlled bc its conditionaly rendered

        // TODO: implement custom cursor
        //       and sphere codepen with three.js
    },[modalInfo])

    function showModal(des, det, name) {
        setModalInfo((prev) => {
            return {
                ...prev,
                title: name,
                description: des,
                details: det,
                scroll: 'hidden',
                isActive: true
            }
        })
    }

    const projectsCovers = Data.projects.map((project) => {
        return(
        <div key={project.id} className='image--container'>
            <img className='thumbnail-image' src={require(`../Media/${project.cover}`)}  />
            <h4 className='thumbnail-text' >{project.name}</h4>
            <div onClick={() => showModal(project.description, project.details, project.name)} className='hover--content'>Learn More</div>
        </div>
        )
    })
    document.body.style.overflow = modalInfo.scroll
    
    return(
    <>
        <div className='line-project' id='projects'></div>
        <div className='title--wraper'>
            <h2 className='project--title' >Here you can check <span>some</span> of <span>my projects</span></h2>
        </div>
        <div className='projects--container'>
            <div className='p-wrap'>
                {modalInfo.isActive && <Modal name={modalInfo.title} description={modalInfo.description} details={modalInfo.details} close={() => setModalInfo(modalObj)} />}
                {projectsCovers}
            </div>
        <span className='page-1'></span>
        <span className='page-2'></span>
        </div>
    </>
    )
}

export default Projects