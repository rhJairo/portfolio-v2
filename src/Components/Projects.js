import React from 'react'
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
        const textColor = {
            color: project.id%2 === 0 ? 'white' : 'black'
        }
        return(
        <div key={project.id} className='image--container'>
            <img src={require(`../Media/${project.cover}`)}  />
            <h4 style={textColor} >{project.name}</h4>
            <div onClick={() => showModal(project.description, project.details, project.name)} className='hover--content'>Learn More</div>
        </div>
        
        )
    })
    document.body.style.overflow = modalInfo.scroll
    
    return(
    <>
        <h2 className='section--title' id='projects'>Here you can check <span>some</span> of <span>my projects</span></h2>
        <div className='projects--container'>
            <div className='p-wrap'>
                {modalInfo.isActive && <Modal name={modalInfo.title} description={modalInfo.description} details={modalInfo.details} close={() => setModalInfo(modalObj)} />}
                {projectsCovers}
            </div>
        </div>
    </>
    )
}

export default Projects