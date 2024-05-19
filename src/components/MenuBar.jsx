import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/menuBar.css'

export default function MenuBar({clicked, setIsClicked}){
    const linkClass = `link ${clicked ? 'open' : ''}`
    const renderMenuBar = () => {
        return (
          <div className={`menu-bar ${clicked ? 'open' : 'closed'}`}>

            <h2 className='menu-bar-name'>Ibrahim</h2>

            <div className={`info-1 ${clicked ? "open" : ''}`}>

                <Link 
                to = "/"
                className = {linkClass}
                onClick = {()=>{setIsClicked(false);}}
                >Home</Link>

                <Link 
                to='/projects'
                className= {linkClass}
                >My Work</Link>

                <a 
                href='https://docs.google.com/document/d/1Xn6qbKJMXFnJBE9MRSJfYXBqyrzczCyl_-_rqB4uGFY/edit?usp=sharing'
                target="_blank"
                className= {linkClass}>My Resume</a>

            </div>

            <p className={`${clicked ? "open" : ''}`}>SAY HELLO</p>

            <div className = {`info-2 ${clicked ? "open" : ''}`}>

                <a 
                href='mailto:ibrahimrefaeei@gmail.com'
                className= {linkClass}
                >ibrahimrefaeei@gmail.com</a>

                <a 
                href='https://t.me/RifDev'
                target="_blank"
                className= {linkClass}
                >Telegram</a>

            </div>

            <div className= {`social-media-links ${clicked ? "open" : ''}`}>
              
                <a 
                href='https://www.facebook.com/ibrahim.e.refaee'
                target="_blank"
                className= {linkClass}
                >FB</a>
              
                <a 
                href='https://github.com/R-I-F'
                target="_blank"
                className= {linkClass}
                >GH</a>
                
                <a
                href='https://www.linkedin.com/in/ibrahim-el-refaee-570096126/'
                target="_blank"
                className={linkClass}>
                  LN</a>
                
                <a
                href='https://www.youtube.com/channel/UC8Z4q6HnxuxRNGbP8yHl6FQ'
                target="_blank"
                className={linkClass}>
                  YT</a>

            </div>

          </div>
        );
      };
    return (
        renderMenuBar() 
    )
}