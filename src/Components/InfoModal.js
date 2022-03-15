import React from "react";

import closeIcon from '../Media/close.svg'

function InfoModal(props){
    console.log(props.technologies)
    const technologies = props.technologies.map(elem => <li>{elem}</li>)
    const features = props.features.map(elem => <li>{elem}</li>)
    
    return(
        <div className='modal--container'> 
            <div className='content--container'>
                <div onClick={props.close} className='btn--close'>
                    <img  src={closeIcon}/>
                </div>
                <h2 className='content--title'>{props.name}</h2>
                <img className="content--image" src={require(`../Media/${props.cover}`)}/>
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
                <a target="_blank" href={props.repo}><div>Source</div></a>
            </div>
        </div>
    )
}

export default InfoModal