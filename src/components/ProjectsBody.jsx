import React from "react";
import { fireBaseContext } from "../context/fireBaseProvider";
import { IoIosStar, IoIosStarOutline  } from "react-icons/io";
import { Link } from 'react-router-dom'


export default function ProjectsBody(){
    const getAllDocsInDb = React.useContext(fireBaseContext).getAllDocsInDb
    const [projectsArr, setProjectsArr] = React.useState();

    function levelEl(level){
        let j = level
        let stars = []
        for(let i = 5; i>0; i--){
            if (i === j){
                j--
                 stars.push(<IoIosStar key={`star${i}`}/>);
            }
            else stars.push(<IoIosStarOutline key={`star${i}`} />);
        }
        return stars.reverse();
    }
    function formatDate(timestamp) {
        // Convert timestamp to milliseconds
        const milliseconds = timestamp.seconds * 1000 + Math.round(timestamp.nanoseconds / 1e6);
        
        // Convert milliseconds to Date object
        const date = new Date(milliseconds);

        // Get month and year components
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
        const year = date.getFullYear();

        // Format the date as "00/0000" (month/year)
        const formattedDate = `${month}/${year}`;

        return formattedDate;
    }

    function formatTech(tech){
        let techArr = Object.values(tech);
        return techArr.map((item, index)=>{
            const color = (item)=>{
                if(item === "React"){ return "#4831d4" }
                else if(item === "Firebase"){ return "#ff0000" }
                else if(item === "Javascript"){ return "#ffa500"}
                else if(item === "CSS"){ return "#8fce00"}
                else if(item === "Bootstrap"){ return "#6fa8dc"}
                else if(item === "OpenAi Api"){ return "#ff00ff"}
                else if(item === "HTML"){ return "#000000"}
            }
            return (
                <div 
                key = {`tech-item${index}`}
                className="tech-item">
                    <div
                    className="tech-circle"
                    style={{backgroundColor: `${color(item)}`}}
                    ></div>
                    <p>{item}</p>
                </div>
            )
        })
    }

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
                    <a
                    key={`project${index}`}
                    className="project-container"
                    href={project.url}>
                        <div className="date-level">
                            <p className="project-date">{formatDate(project.date)}</p>
                            <div className="project-level">{levelEl(parseInt(project.level))}</div>
                        </div>
                        <h4 className="project-title">{project.name}</h4>
                        <div
                        className="tech-container">{formatTech(project.tech)}</div>
                        <div className="url-gh">
                            <a 
                            className="gh"
                            href={`${project.git}`}>GH</a>
                        </div>
                    </a>
                    )
                })
            )
        }
    }

console.log(projectsArr);
    return(
        <section
        className="projects-body">
            {projectsArrEl()}
        </section>
    )
}