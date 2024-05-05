import React from 'react'
import '../../public/styles/menuButton.css'

export default function MenuButton({clicked, setIsClicked, selectedPage, isMobileScreen}){

    function stripeColorClass(){
        if(selectedPage === 3 || isMobileScreen){
            if(clicked){
                return ('blue');
            }
            else{
                return 'green'
            }
        }
        else return ('blue')
    }
    return(
        <button
        className = { `menu-button ${clicked?'cross':'sandwich'}` }
        onClick={ () => setIsClicked(prev => !prev)}>
            <div className={`stripe1 ${stripeColorClass()}`}></div>
            <div className={`stripe2 ${stripeColorClass()}`}></div>
        </button>
    )
}