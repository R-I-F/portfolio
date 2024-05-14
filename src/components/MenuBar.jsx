import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/styles/menuBar.css'

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
                <Link className= {linkClass}>My Resume</Link>
            </div>

            <p className={`${clicked ? "open" : ''}`}>SAY HELLO</p>

            <div className = {`info-2 ${clicked ? "open" : ''}`}>
                <Link className= {linkClass}>Mail-Link</Link>
                <Link className= {linkClass}>Telegram</Link>
            </div>

            <div className= {`social-media-links ${clicked ? "open" : ''}`}>
                <Link className= {linkClass}>FB</Link>
                <Link className= {linkClass}>GH</Link>
                <Link className={linkClass}>LN</Link>
                <Link className={linkClass}>YT</Link>
            </div>

          </div>
        );
      };
    return (
        renderMenuBar() 
    )
}