import React from "react";

export default function ProjectsHeader({title, info}){
    return (
        <section
        className="projects-header">
            <h2 className="block-a-name blue-color">Ibrahim</h2>
            <div className="projects-header-lane">    
                <h3 className="projects-header-title"><span>/</span>{title}<span>.</span></h3>
                <p className="projects-header-info">Selected {info} I've taken on in the past.</p>
            </div>
        </section>
    )
}