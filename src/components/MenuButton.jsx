import React from 'react'
import '../../public/styles/menuButton.css'
import { useLocation } from 'react-router-dom';

export default function MenuButton({clicked, setIsClicked, homepageSection, isMobileScreen}){
    const location = useLocation();

    function stripeColorClass(){
        if(location.pathname === '/'){
            if(homepageSection === 3 || homepageSection === 6 || isMobileScreen){
                if(clicked){
                    return ('blue');
                }
                else{
                    return 'green'
                }
            }
            else return ('blue')
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