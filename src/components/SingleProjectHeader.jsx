import React from "react";
export default function ProjectsHeader({title}){
    return (
        <section
        className="projects-header">
            <h2 className="block-a-name blue-color">Ibrahim</h2>
            <div className="single-project-header-lane">    
                <h3 className="single-project-header-title"><span>/</span>{title}<span>.</span></h3>
            </div>
        </section>
    )
}