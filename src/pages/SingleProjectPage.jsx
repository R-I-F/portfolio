import React from "react"
import { useLocation, Link } from "react-router-dom"
import YouTube from "react-youtube"
import '../../public/styles/singleProjectPage.css'
import SingleProjectHeader from "../components/SingleProjectHeader"
import SectionFooter from "../components/SectionFooter"

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
        else if(viewportWidth >= 1200 && viewportWidth < 1300){
            vWidth = viewportWidth - 260;
        }
        else if(viewportWidth >= 1300 && viewportWidth < 1400){
            vWidth = viewportWidth - 360;
        }
        else if(viewportWidth >= 1400){
            vWidth = viewportWidth - 460;
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
                        <h3 className="single-project-title">{projectData.infoTitles[i]}</h3>
                        <p className="single-project-info"
                        >{projectData.info[i]}</p>
                        <YouTube 
                        videoId = {`${projectData.media[i]}`}
                        opts={{ height: calculateVideoHeight(), width: "100%" }}
                        style={customStyle}
                        className="youtube-video"/>
                    </div>
                )
            }
        }
        return elArr;
    }

    function renderProjectBody(){
        if(projectData.presentation.isReady){
            if(projectData.presentation.isVideo){
                return(
                    <>
                        <p className="single-project-info"
                        >{projectData.intro}</p>
                        {renderMedia()}
                    </>
                )
            }
        }
        else return(
            <>
                <p className="single-project-info-not-ready"
                    >Apologies for any inconvenience. The project presentation is not currently ready. You're welcome to visit the website or GitHub repository to review progress.</p>
            </>
        )
        /* this function checks the presentation if its ready , if it is ready then it returns the presentation code elements */
    }

    function render(){
        if(projectData){
            return(
                <div className="header-body">
                    <SingleProjectHeader 
                    title={projectData.name} />
        
                    <div className="single-product-body">
                        
                        <div className="single-project-page-links">
                            <a
                            href={projectData.url}
                            target="_blank"
                            className="single-project-page-link"
                            >Visit Website</a>
                            <a
                            href={projectData.git}
                            target="_blank"
                            className="single-project-page-link"
                            >GitHub</a>
                        </div>
                        
                        {renderProjectBody()}
                        
                    </div>
                </div>
            )
            }
    }

    // console.log(viewportWidth) 
    // console.log(projectData.media[0]);

    return(
        <>
            {render()}
            <SectionFooter />
        </>
    )
}