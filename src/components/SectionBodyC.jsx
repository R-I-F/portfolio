import React from 'react'
import { Element } from 'react-scroll'
import '../../public/styles/sectionBodyC.css'
import SectionCLane from './SectionCLane';

export default function SectionBodyC({name}){

    function activeClassSetter(x, y){
        if(x || y){
            return ('special-btn-clicked');
        }
        else return('special-btn-not-clicked');
    }
    return(
        <Element
        name = {name}>
            <section
            className='section-body-c-container'>
                <div className='lanes'>
                    <SectionCLane 
                    title = 'I build & design Stuff'
                    info = 'Websites & WebApps'
                    linkTo = "/projects"
                    activeClassSetter = {activeClassSetter}
                    />
                    <SectionCLane 
                    title = 'I Learn courses & books'
                    info = 'Courses, Certifications & books'
                    linkTo = "/studies"
                    activeClassSetter = {activeClassSetter}
                    addClass = 'top-border'
                    />
                </div>
            </section>
        </Element>
    )
}