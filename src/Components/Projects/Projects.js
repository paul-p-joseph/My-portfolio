import React from 'react'
import './Projects.css'
import project1 from './project1-img.PNG'
import project2 from './project2-img.PNG'
function Projects() {
    return (
        <div className="projects-container" id="projects">
            <h1 className="skills-heading">Projects</h1>
            <div className='project-cards-container'>
            <div className='projectcard'>
                <img src={project2} alt="img" width="300" height="350"/>
                <div className="card-details">
                    <h4>Online Music Player</h4>
                    <a href="https://zen-project-online-musicplayer.herokuapp.com/" target="_blank">View Page</a>
                </div>
            </div>
            <div className='projectcard'>
                <img src={project1} alt="img" width="300" height="350"/>
                <div className="card-details">
                    <h4>Bills App</h4>
                    <a  href="https://zen-project1-frontend.herokuapp.com/" target="_blank">View Page</a>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Projects
