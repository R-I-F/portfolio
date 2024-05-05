import React from 'react'
import MenuButton from './MenuButton'
import MenuBar from './MenuBar'
import { Outlet } from 'react-router-dom'

export default function Navigation({selectedPage}){
    const [clicked, setIsClicked] = React.useState(false)
    const [ isMobileScreen, setIsMobileScreen ] = React.useState(false);
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
            selectedPage = { selectedPage }
            isMobileScreen = {isMobileScreen}/>
        </div>

        <MenuBar
        clicked = { clicked }/>
        
        <Outlet />
    </div>
    )
}