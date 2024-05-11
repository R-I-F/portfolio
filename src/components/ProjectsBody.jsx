import React from "react";
import { fireBaseContext } from "../context/fireBaseProvider";

export default function ProjectsBody(){
    const getAllDocsInDb = React.useContext(fireBaseContext).getAllDocsInDb
    const [projectsArr, setProjectsArr] = React.useState();

    React.useEffect(()=>{
        getAllDocsInDb()
        .then((data)=>{
                const sortedArr = data.sort((a, b)=>{
                    const levelA = a.level;
                    const levelB = b.level;
                    return levelB - levelA;
                })
                setProjectsArr(sortedArr)
            }
        )
    },[])

    function projectsArrEl(){
        if(projectsArr){
            console.log('running')
            return(
                projectsArr.map((project, index)=>{
                    return(
                    <div key={`project${index}`}>
                        <h4>{project.name}</h4>
                    </div>
                    )
                })
            )
        }
    }


    return(
        <section
        className="projects-body">
            {projectsArrEl()}
        </section>
    )
}