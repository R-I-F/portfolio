import React from 'react'
import '../../public/styles/sectionBodyB.css'
import projects from '/projects.svg'

export default function SectionBodyB({name}){
    
    return(
        <section 
        className='section-body-b'
        name = {name}>
            <img src={projects}/>
        </section>
    )
}