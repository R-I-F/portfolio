import React from 'react'
import '../../public/styles/menuButton.css'

export default function MenuButton({clicked, setIsClicked}){


    return(
        <button
        className = { `menu-button ${clicked?'cross':'sandwich'}` }
        onClick={ () => setIsClicked(prev => !prev)}>
            <div className='stripe1'></div>
            <div className='stripe2'></div>
        </button>
    )
}