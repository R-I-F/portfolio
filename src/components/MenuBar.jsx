import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../public/styles/menuBar.css'

export default function MenuBar({clicked}){
    const linkClass = `link ${clicked ? 'open' : ''}`
    const renderMenuBar = () => {
        return (
          <div className={`menu-bar ${clicked ? 'open' : ''}`}>

            <h2 className='menu-bar-name'>Ibrahim</h2>

            <div className={`info-1 ${clicked ? "open" : ''}`}>
                <NavLink className= {linkClass}>Home</NavLink>
                <NavLink className= {linkClass}>My Work</NavLink>
                <NavLink className= {linkClass}>My Resume</NavLink>
            </div>

            <p className={`${clicked ? "open" : ''}`}>SAY HELLO</p>

            <div className = {`info-2 ${clicked ? "open" : ''}`}>
                <NavLink className= {linkClass}>Mail-Link</NavLink>
                <NavLink className= {linkClass}>Telegram</NavLink>
            </div>

            <div className= {`social-media-links ${clicked ? "open" : ''}`}>
                <NavLink className= {linkClass}>FB</NavLink>
                <NavLink className= {linkClass}>GH</NavLink>
                <NavLink className={linkClass}>LN</NavLink>
                <NavLink className={linkClass}>YT</NavLink>
            </div>

          </div>
        );
      };
    return (
        renderMenuBar() 
    )
}