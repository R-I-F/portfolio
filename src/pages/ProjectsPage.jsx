import React from "react";
import ProjectsHeader from "../components/ProjectsHeader";
import ProjectsBody from "../components/ProjectsBody";
import '../../public/styles/projectsPage.css'

export default function ProjectsPage({clicked, setIsClicked}){
    React.useEffect(()=>{
        setIsClicked(false);
        /*
            useEffect triggered on first render 
        */
    },[])
    return (
        <div className="projects-page">
            <ProjectsHeader />
            <ProjectsBody />
        </div>
    )
}