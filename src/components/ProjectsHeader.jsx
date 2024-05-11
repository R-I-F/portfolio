import React from "react";
import '../../public/styles/projectsPage.css'

export default function ProjectsHeader(){
    return (
        <section
        className="projects-header">
            <h2 className="block-a-name blue-color">Ibrahim</h2>
            <div className="projects-header-lane">    
                <h3 className="projects-header-title"><span>/</span>projects<span>.</span></h3>
                <p className="projects-header-info">Selected work I've taken on in the past.</p>
            </div>
        </section>
    )
}