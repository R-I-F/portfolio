import React from "react";
import { Link } from "react-router-dom"
export default function ProjectsHeader({title}){
    return (
        <section
        className="projects-header">
            <h2 className="block-a-name blue-color">Ibrahim</h2>
            <div className="single-project-header-lane">    
                <Link
                to="/projects"
                className="single-project-page-link"
                >Projects</Link>
                <h3 className="single-project-header-title"><span>/</span>{title}<span>.</span></h3>
            </div>
        </section>
    )
}