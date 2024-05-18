import React from "react";
import ProjectsHeader from "../components/ProjectsHeader";
import ProjectsBody from "../components/ProjectsBody";
import '../../public/styles/projectsPage.css'
import SectionFooter from "../components/SectionFooter"

export default function ProjectsPage(){

    return (
        <div className="projects-page">
            <ProjectsHeader 
            title = "projects"
            info = "work"/>
            <ProjectsBody />
            <SectionFooter />
        </div>
    )
}