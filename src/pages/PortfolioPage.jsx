import React from "react";
import { fireBaseContext } from "../context/fireBaseProvider";
import SectionHeader from "../components/SectionHeader";
import PageSelector from "../components/PageSelector";
import SectionBodyA from "../components/SectionBodyA";
import SmoothScroll from "../components/SmoothScroll";
import SectionBodyB from "../components/SectionBodyB";

export default function PortfolioPage({selectedPage, setSelectedPage}){
    
    const getAllDocsInDb = React.useContext(fireBaseContext).getAllDocsInDb
    const [isBigScreen, setIsBigScreen] = React.useState(false);
    const [projectsArr, setProjectsArr] = React.useState();

    React.useEffect(()=>{
        getAllDocsInDb()
        .then((data)=>{
                setProjectsArr(data)
            }
        )
        
    },[])

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
                selectedPage = {selectedPage}
                setSelectedPage = {setSelectedPage}/>
            }
            <SectionHeader 
            name = 'section1'/>
            <SectionBodyA 
            name = 'section2'/>
            <SectionBodyB
            name = 'section3'/>
            <div className="pageSelector-container">
                <PageSelector 
                selectedPage = {selectedPage}
                setSelectedPage = {setSelectedPage}/>
            </div>
        </div>

    )
}