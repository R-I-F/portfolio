import React from "react";
import SectionHeader from "../components/SectionHeader";
import PageSelector from "../components/PageSelector";
import SectionBodyA from "../components/SectionBodyA";
import SmoothScroll from "../components/SmoothScroll";
import SectionBodyB from "../components/SectionBodyB";
import SectionBodyC from "../components/SectionBodyC";
import SectionBodyD from "../components/SectionBodyD";
import SectionFooter from "../components/SectionFooter";

export default function PortfolioPage({homepageSection, setHomepageSection}){
    
    const [isBigScreen, setIsBigScreen] = React.useState(false);

    React.useEffect(()=>{
        const handleResize = () => {
            setIsBigScreen(window.innerWidth >= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    },[])
    // console.log(projectsArr); 

    return(
        <div>
            {
                isBigScreen &&
                <SmoothScroll 
                homepageSection = {homepageSection}
                setHomepageSection = {setHomepageSection}/>
            }
            <SectionHeader 
            name = 'section1'/>
            <SectionBodyA 
            name = 'section2'/>
            <SectionBodyB
            name = 'section3'/>
            <SectionBodyC 
            name = 'section4'/>
            <SectionBodyD 
            name = 'section5'/>
            <SectionFooter
            name = 'section6'/>
            <div className="pageSelector-container">
                <PageSelector 
                homepageSection = {homepageSection}
                setHomepageSection = {setHomepageSection}/>
            </div>
        </div>

    )
}