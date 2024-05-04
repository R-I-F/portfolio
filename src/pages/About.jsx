import React from "react";

export default function About({navLocation}) {

    const [transitionState, setTransitionState] = React.useState(false)
    function isLocation() {
        /* This function will sleep for 1000 ms then transition the classname from page-container to page-container-ex*/
        if (navLocation === 1) {
            setTimeout(() => setTransitionState(true), 250)
        }
        else{
            setTransitionState(false)
        }
    }
    React.useEffect(() => {
        isLocation()
    }, [navLocation])
    // console.log(navLocation)
    return (
        <>
            <div className={transitionState ? "page-container page-container-expanded" : "page-container"}>
            Transitioning from architecture to pursue a career in tech, I bring a background in technical drawings and a newfound passion for programming. With focused learning in web development through Scrimba, I've mastered HTML, CSS, JavaScript, and React, culminating in the creation of a dynamic online shop platform. Additionally, I'm actively enhancing my skills in SQL, Bash scripting, and ASP.NET. Eager to apply my knowledge in a junior position or internship, I'm committed to contributing to a dynamic team environment while exploring opportunities for specialization in web development.
            </div>
        </>
    )
}