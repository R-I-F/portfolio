import React from 'react'
import { Element } from 'react-scroll'
import { Link } from 'react-router-dom'
import '../../public/styles/sectionFooter.css'

export default function SectionFooter({name}){
        const linkClass = "footer-link-class"
    return(
        <Element
        name = {name}>
            <section className='section-footer-container'>
                <div
                className='section-footer'>
                    <div className='footer'>
                        <div className='footer-info-container-1'>
                            <p className='p1'>SAY HELLO</p>
                            <Link className= {linkClass}>Mail-Link</Link>
                            <Link className= {linkClass}>Telegram</Link>
                        </div>
                        <div className='footer-info-container-2'>
                            <Link className= {linkClass}>Home</Link>
                            <Link 
                            to = "/projects"
                            className= {linkClass}
                            >My Work</Link>
                            <Link className= {linkClass}>My Resume</Link>
                        </div>
                        <div className='footer-info-container-3'></div>
                    </div>
                    <div className='footer-bottom'>
                        <p>&copy; Ibrahim El-Refaee 2024</p>
                        <div className='footer-social-media-links'>
                        <Link className= 'footer-bottom-link'>FB</Link>
                        <Link className= 'footer-bottom-link'>GH</Link>
                        <Link className='footer-bottom-link'>LN</Link>
                        <Link className='footer-bottom-link'>YT</Link>
                        </div>
                    </div>
                </div>
            </section>

        </Element>
    )
}