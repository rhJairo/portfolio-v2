import React from "react";

import closeIcon from '../Media/close.svg'

function InfoModal(props){
    const technologies = props.technologies.map(elem => <li>{elem}</li>)
    const features = props.features.map(elem => <li>{elem}</li>)
    
    return(
        <div className='modal--container'> 
            <div className='content--container'>
                <div onClick={props.close} className='btn--close'>
                    <img alt="close section icon" src={closeIcon}/>
                </div>
                <h2 className='content--title'>{props.name}</h2>
                <img alt={`functionality gif of project ${props.name}`} className="content--image" src={require(`../Media/${props.cover}`)}/>
                <div>
                <h5 className="content--subtitle">Description</h5>
                <div className='content--description'>{props.description}</div>
                </div>
                <div>
                <h5 className="content--subtitle">Features</h5>
                <ol className='content--details'>{features}</ol>
                </div>
                <div>
                <h5 className="content--subtitle">Technologies/Tools</h5>
                <ul className='content--details'>{technologies}</ul>
                </div>
                <div>
                <h5 className="content--subtitle">Afterthoughts</h5>
                <div className='content--description'>{props.analysis}</div>
                </div>
                <a rel="noreferrer" target="_blank" href={props.repo}><div>Source</div></a>
            </div>
        </div>
    )
}

export default InfoModal