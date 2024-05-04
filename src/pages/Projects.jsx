import React from "react";
import YouTube from "react-youtube";
import { fireBaseContext } from "../context/fireBaseProvider";

export default function Projects({navLocation}){

    const [transitionState, setTransitionState] = React.useState(false)
    const getAllDocsInDb = React.useContext(fireBaseContext).getAllDocsInDb
    const [projectsArr, setProjectsArr] = React.useState();
    React.useEffect(()=>{
        getAllDocsInDb()
        .then((data)=>{
                setProjectsArr(data)
            }
        )
    },[])

    console.log(projectsArr); 
    function isLocation() {
        /* This function will sleep for 1000 ms then transition the classname from page-container to page-container-ex*/
        if (navLocation === 2) {
            setTimeout(() => setTransitionState(true), 250)
        }
        else{
            setTransitionState(false)
        }
    }
    React.useEffect(() => {
        isLocation()
    }, [navLocation])
    return (
        <>
            <div className={transitionState ? "page-container page-container-expanded" : "page-container"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida nulla vel velit feugiat, vel pulvinar justo finibus. Integer consectetur, odio eu mollis pellentesque, risus ipsum euismod elit, ut pulvinar odio velit nec justo. Curabitur scelerisque vehicula nisi, sit amet facilisis libero vehicula non. Nam vel eros enim. Ut nec ornare lorem. Nulla at sapien nec mi volutpat eleifend et a nulla. In hac habitasse platea dictumst. Ut id odio eros. Suspendisse potenti. Duis euismod quam ligula, sed iaculis magna rhoncus in. Nullam ut n
            <div id="player-el" className="player">
            </div>
            </div>
            
        </>
    )
}

/*

    firebase configuration
    import { initializeApp } from "firebase/app";
    const firebaseConfig = {
        apiKey: "AIzaSyBxOfsRf1brP4d4TLkHGjAh0PMhLN8tqN8",
        authDomain: "portfolio-1ba66.firebaseapp.com",
        projectId: "portfolio-1ba66",
        storageBucket: "portfolio-1ba66.appspot.com",
        messagingSenderId: "221229984699",
        appId: "1:221229984699:web:8c1ef075410fb1ade7729e"
    };
    const app = initializeApp(firebaseConfig);
*/ 
