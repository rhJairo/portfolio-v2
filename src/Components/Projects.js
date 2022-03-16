import React from "react";
import { gsap } from "gsap";

import Modal from "./InfoModal";
import Data from "../data.json";
import More from '../Media/more.svg'


function Projects() {
  const modalObj = {
    video: "",
    title: "",
    technologies: "",
    description: "",
    analysis: "",
    cover: "",
    scroll: "unset",
    isActive: false,
  };
  const [modalInfo, setModalInfo] = React.useState(modalObj);
  const [pagesAnimation, setpagesAnimation] = React.useState({
    count: 0,
    isActive: false,
  });

  React.useLayoutEffect(() => {
    let tl = gsap.timeline();
    if (pagesAnimation.count > 0 && pagesAnimation.isActive) {
      tl.to(".page-1", {
        scaleX: 1,
        duration: 0.2,
        transformOrigin: "right center",
      })
        .to(".page-2", {
          scaleX: 1,
          duration: 0.2,
          transformOrigin: "right center",
        })
        .to(".page-3", {
          scaleX: 1,
          duration: 0.2,
          transformOrigin: "right center",
        })
        .to(".modal--container", {
          scaleX: 1,
          duration: 0.2,
          transformOrigin: "right center",
        });
    } else if (pagesAnimation.count > 0 && !pagesAnimation.isActive) {
      tl.to(".page-3", {
        scaleX: 0,
        duration: 0.2,
        transformOrigin: "right center",
        delay: 0.2,
      })
        .to(".page-2", {
          scaleX: 0,
          duration: 0.2,
          transformOrigin: "right center",
        })
        .to(".page-1", {
          scaleX: 0,
          duration: 0.2,
          transformOrigin: "right center",
        });
    } else {}
    
  }, [pagesAnimation]);
  
  function closeModal() {
    setpagesAnimation((prev) => {
      return { count: prev.count + 1, isActive: !prev.isActive };
    });
    setModalInfo(modalObj);
    document.body.style.overflow = modalInfo.scroll;
  }

  function showModal(name, tec, des, feat, ana, cov, repo) {
    setpagesAnimation((prev) => {
      return { count: prev.count + 1, isActive: !prev.isActive };
    });
    setModalInfo((prev) => {
      return {
        ...prev,
        name: name,
        technologies: tec,
        description: des,
        features: feat,
        analysis: ana,
        cover: cov,
        repo: repo,
        scroll: "hidden",
        isActive: true,
      };
    });
    
  }
  document.body.style.overflow = modalInfo.scroll;

  const projectsCovers = Data.projects.map((project) => {
    return (
      <div key={project.id} className="image--container">
        {/* <img className='thumbnail-image' src={require(`../Media/${project.cover}`)}  /> */}
        <h4 className="thumbnail-text">{project.name}</h4>
        <div
          onClick={() =>
            showModal(
              project.name,
              project.technologies,
              project.description,
              project.features,
              project.analysis,
              project.cover,
              project.repo
            )
          }
          className="hover--content"
        > 
          <img alt="arrow icon" className="hover--more" src={More}/>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="line-project" id="projects"></div>
      <div className="title--wraper">
        <h2 className="project--title">
          Here you can check <br />
          <span>some of my projects</span>
        </h2>
      </div>
      <div className="projects--container">
        <div className="p-wrap">
          {modalInfo.isActive && (
            <Modal
              name={modalInfo.name}
              description={modalInfo.description}
              technologies={modalInfo.technologies}
              features={modalInfo.features}
              analysis={modalInfo.analysis}
              cover={modalInfo.cover}
              repo={modalInfo.repo}
              close={closeModal}
            />
          )}
          {projectsCovers}
        </div>
        <span className="page-1"></span>
        <span className="page-2"></span>
        <span className="page-3"></span>
      </div>
    </>
  );
}

export default Projects;
