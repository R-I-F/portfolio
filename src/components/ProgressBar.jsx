import React from "react"
import '../styles/progressBar.css'

export default function ProgressBar({progress}){
    const green = "#12921e"
    const yellow = "#feb902"
    const blue = "#0080FF"

    const progressColor = (progress)=>{
        if(progress <= 45){
            return yellow;
        }
        else if(progress <= 80){
            return green;
        }
        else return blue;
    }


    return(
        <div className="progress-bar-row">
            <div className="progress-bar-container">
                <div className="progress-bar">

                </div>
                <div 
                className="progress-bar-overlay"
                style={{
                    width: `${progress}%`,
                    backgroundColor: progressColor(progress)
                    }}>

                </div>
            </div>
                <div className="progress-percent">
                    {`${progress}%`}
                </div>
        </div>
    )
}