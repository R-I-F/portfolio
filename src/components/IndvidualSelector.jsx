import React from 'react'
import {Link} from 'react-scroll'

export default function IndividualSelector({selected, onClick, selectedPage}){

    return(
        <Link 
        className={`shape-container ${selected ? 'square' : 'rhombus'}`} 
        onClick = {onClick}
        to = {`section${selectedPage + 1}`}
        spy={true}
        smooth={true}
        duration={1000}
        />    
    )
}