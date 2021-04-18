import React from 'react'
import './Header.css'
import Skills from '../Skills/Skills'

function Header() {
    return (
        <div className='header-container'>
            <a className='home-btn' href="#home">Home</a>
            <a className='skill-btn' href='#skills'>Skills</a>
            <a className='project-btn' href='#projects'>Projects</a>
            <a className='contact-btn' href='#contact'>contact</a>
            
        </div>
    )
}

export default Header
