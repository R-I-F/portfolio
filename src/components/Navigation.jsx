import React from 'react'
import MenuButton from './MenuButton'
import MenuBar from './MenuBar'
import { Outlet, useLocation } from 'react-router-dom'

export default function Navigation({homepageSection}){
    const [ isMobileScreen, setIsMobileScreen ] = React.useState(false);
    const [clicked, setIsClicked] = React.useState(false);
    
    const location = useLocation();

    React.useEffect(()=>{
        setIsClicked(false)
        // secondary precaution: closes the menubar on route change 
        // if not closed when link is clicked
    },[location.pathname])

    React.useEffect(()=>{
        function stateSetter(){
            if(window.innerWidth < 576){
                setIsMobileScreen(true);
            }
            else{
                setIsMobileScreen(false);
            }
        }
        stateSetter();

        window.addEventListener('orientationchange', stateSetter);
        window.addEventListener('resize', stateSetter);

        return ()=>{
            window.removeEventListener('orientationchange', stateSetter);
            window.removeEventListener('resize', stateSetter);
        }
    },[])
    // console.log(clicked)
    function absolutePositionClass(){
        if(isMobileScreen){
            return ('absolute-position')
        }
        else return('');
    }
    return(
    <div className='page-container'>

        <div className={`menu-button-container ${absolutePositionClass()}`}>
            <MenuButton 
            clicked = { clicked }
            setIsClicked = { setIsClicked }
            homepageSection = { homepageSection }
            isMobileScreen = {isMobileScreen}/>
        </div>

        <MenuBar
        clicked = { clicked }
        setIsClicked = {setIsClicked}/>
        
        <Outlet />
    </div>
    )
}