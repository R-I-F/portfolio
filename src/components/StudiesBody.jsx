import React from "react";
import { useNavigate } from "react-router-dom";
import { fireBaseContext } from "../context/fireBaseProvider";
import ProgressBar from "./ProgressBar";

export default function StudiesBody(){
    const getAllDocsInStudiesDb = React.useContext(fireBaseContext).getAllDocsInStudiesDb
    const [studiesArr, setStudiesArr] = React.useState();
    const navigate = useNavigate();
    // console.log(studiesArr);
    React.useEffect(()=>{
        getAllDocsInStudiesDb()
        .then((data)=>{
                const sortedArr = data.sort((a, b)=>{
                    const levelA = a.progress;
                    const levelB = b.progress;
                    return levelB - levelA;
                })
                setStudiesArr(data)
            }
        )
    },[])

    function handleNavigation(id, options){
        navigate(`/studies/${id}`, options)
    }

    function returnCertification(x){
        if(x.certification){
           return (
                <a 
                    className="study-cert"
                    href={`${x.certification}`}
                    onClick={(e) => e.stopPropagation()}>Certification
                </a>
            )
        }
    }

    function studiesArrEl(){
        if(studiesArr){
            return(
                studiesArr.map((study, index)=>{
                    return(
                        <div
                            key = { `study${index}` }
                            className = "study-container"
                            >
                            <div className="title-type">
                                <h4 className="study-title">{study.name}</h4>
                                <p>{study.study}</p>
                            </div>
                            <ProgressBar 
                            progress={study.progress}/>

                            <div className="study-type-provider">
                                <p><span>{study.provider}</span></p>
                            </div>
                            { returnCertification(study) }
                        </div>
                    )
                })
            )
        }
    }
    return(
        <section
        className="studies-body">
            {studiesArrEl()}
        </section>
    )
}