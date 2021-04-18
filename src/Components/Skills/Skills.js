import React from 'react'
import './Skills.css'
function Skills() {
    return (
        <div className='skills-container' id="skills">
         <h1 className="skills-heading">Skills</h1>
         <div className='skills-class'>
             <div className="title-div">
                  <h2 className='class-title'>Programming Languages</h2>
                  </div>
             <div className="item-div">
                 <h3 className='class-items'>JavaScript</h3>
                 <h3 className='class-items'>TypeScript</h3>
             </div>
            
             
         </div>
         <div className='skills-class'>
             <div className="title-div" >
                  <h2 className='class-title'>Web Front End</h2>
             </div>
              <div className="item-div">  
               <h3 className='class-items'>React/Redux</h3>
             <h3 className='class-items'>HTML5</h3>
             <h3 className='class-items'>CSS3</h3>
             <h3 className='class-items'>Bootstrap</h3>
             </div>
            
          
         </div>
         <div className='skills-class'>
         <div className="title-div" > 
          <h2 className='class-title'>Web Back End</h2>
          </div> 
         <div className="item-div">
             <h3 className='class-items'>Node.js</h3>
             <h3 className='class-items'>Express</h3>
             </div>
           
             
         </div>
         <div className='skills-class'>
         <div className="title-div" >
              <h2 className='class-title'>Databases</h2>
              </div> 
         <div className="item-div"> 
           <h3 className='class-items'>MongoDB</h3>
             <h3 className='class-items'>MySQL</h3>
             </div>
            
          
         </div>
            
        </div>
    )
}

export default Skills
