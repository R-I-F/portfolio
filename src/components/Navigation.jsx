import React from 'react'
import MenuButton from './MenuButton'
import MenuBar from './MenuBar'
import { Outlet } from 'react-router-dom'

export default function Navigation(){
    const [clicked, setIsClicked] = React.useState(false)
    return(
    <div className='page-container'>

        <div className="menu-button-container">
            <MenuButton 
            clicked = { clicked }
            setIsClicked = { setIsClicked }/>
        </div>

        <MenuBar
        clicked = { clicked }/>
        
        <Outlet />
    </div>
    )
}