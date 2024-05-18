import React from "react";
import ProjectsHeader from "../components/ProjectsHeader";
import StudiesBody from "../components/StudiesBody";
import SectionFooter from "../components/SectionFooter"
import '../../public/styles/studiesPage.css'

export default function StudiesPage(){
    return(
        <div className="studies-page">
            <ProjectsHeader 
            title = "studies"
            info = "studies"/>
            <StudiesBody />
            <SectionFooter />
        </div>
    )
}