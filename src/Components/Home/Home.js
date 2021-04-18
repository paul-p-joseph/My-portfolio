import React from 'react'
import './Home.css'
import paulimage from './paulimg.jpg'
function Home() {
    return (
        <div className='home-container' id="home">
              <div className='image-container'>
              <img src={paulimage} alt="img" width="300" height="350"/>
                  </div>     
                  <div className='home-details'>
                      <h1>Hi, I'm <span>Paul P Joseph</span></h1>
                      <p>I'm a Software Engineer specialized in Web application development,
                           having fluent knowledge front-end frameworks such as react and back-end 
                            development, developed many full-stack based web
                              application using Node.js, React.js and MongoDB.
                      </p>

                      </div>   
        </div>
    )
}

export default Home
