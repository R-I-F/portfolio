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

                            <a 
                            href='mailto:ibrahimrefaeei@gmail.com'
                            className= {linkClass}
                            >E-mail</a>

                            <a 
                            href='https://t.me/RifDev'
                            target="_blank"
                            className= {linkClass}
                            >Telegram</a>

                        </div>
                        <div className='footer-info-container-2'>
                            <Link 
                            to = "/"
                            className= {linkClass}
                            >Home</Link>
                            
                            <Link 
                            to = "/projects"
                            className= {linkClass}
                            >My Work</Link>

                            <a 
                                href='https://docs.google.com/document/d/1Xn6qbKJMXFnJBE9MRSJfYXBqyrzczCyl_-_rqB4uGFY/edit?usp=sharing'
                                target="_blank"
                                className= {linkClass}>My Resume
                            </a>
                        </div>
                        <div className='footer-info-container-3'></div>
                    </div>
                    <div className='footer-bottom'>
                        <p>&copy; Ibrahim El-Refaee 2024</p>
                        <div className='footer-social-media-links'>
                        
                        <a 
                        href='https://www.facebook.com/ibrahim.e.refaee'
                        target="_blank"
                        className= 'footer-bottom-link'>FB</a>
                        
                        <a 
                        href='https://github.com/R-I-F'
                        target="_blank"
                        className= 'footer-bottom-link'>GH</a>
                       
                        <a
                        href='https://www.linkedin.com/in/ibrahim-el-refaee-570096126/'
                        target="_blank"
                        className='footer-bottom-link'>LN</a>
                       
                        <a
                        href='https://www.youtube.com/channel/UC8Z4q6HnxuxRNGbP8yHl6FQ'
                        target="_blank"
                        className='footer-bottom-link'>YT</a>

                        </div>
                    </div>
                </div>
            </section>

        </Element>
    )
}