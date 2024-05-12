import React from "react"
import { useLocation } from "react-router-dom"
import YouTube from "react-youtube"
import '../../public/styles/singleProjectPage.css'
import SingleProjectHeader from "../components/SingleProjectHeader"

export default function SingleProjectPage(){
    const projectData = useLocation().state;
    const [viewportWidth, setViewPortWidth] = React.useState(0);

    React.useEffect(()=>{
        function handleOrientationChange() {
            setViewPortWidth(window.innerWidth);
        }
    
        function handleResize() {
            handleOrientationChange();
        }
    
        // Initial check
        handleOrientationChange();
    
        window.addEventListener('orientationchange', handleOrientationChange);
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('orientationchange', handleOrientationChange);
            window.removeEventListener('resize', handleResize);
        };
    },[])

    function calculateVideoHeight(){
        let vWidth;
        if(viewportWidth < 787){
            vWidth = viewportWidth - (0.178*viewportWidth)
        }
        else{
            vWidth = viewportWidth - 140
        }
        const vHeight = (vWidth*9)/16;
        return vHeight;
    }

    const customStyle = {
        width: '100%',
        height: calculateVideoHeight()
    };

    function renderMedia(){
        let elArr = [];
        if(projectData.info){
            for(let i = 0; i<projectData.info.length; i++){
                elArr.push(
                    <div
                    key={`info-part${i}`}>
                        <h3>{projectData.infoTitles[i]}</h3>
                        <YouTube 
                        videoId = {`${projectData.media[i]}`}
                        opts={{ height: calculateVideoHeight(), width: "100%" }}
                        style={customStyle}
                        className="youtube-video"/>
        
                        <p className="single-project-info"
                        >{projectData.info[i]}</p>
                    </div>
                )
            }
        }
        return elArr;
    }
    function render(){
        if(projectData){
            return(
                <div>
                    <SingleProjectHeader 
                    title={projectData.name} />
        
                    <div className="single-product-body">
        
                        <p className="single-project-info"
                        >{projectData.intro}</p>

                        {renderMedia()}
                        
                    </div>
                </div>
            )
            }
    }

    // console.log(viewportWidth) 
    // console.log(projectData.media[0]);

    return(
            render()
    )
}