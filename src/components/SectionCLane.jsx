import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function SectionCLane({title, info, activeClassSetter, addClass}){
    const [ isBtnClicked, setIsBtnClicked ] = React.useState(false)
    const [ isBtnHovered, setIsBtnHovered ] = React.useState(false)
    function handleHover(x){
        console.log('hovered');
        setIsBtnHovered(x);
        return;
    }
    console.log(isBtnHovered)
    return(
    <div
    className={`lane ${addClass}`}>
        <h1 className= 'body-c-title' >{title}</h1>
        <p className = 'lane-info'>{info}</p>
        <button 
        className = {`special-btn`}
        onClick={()=>setIsBtnClicked(prev=>!prev)}
        onMouseEnter={()=>handleHover(true)}
        onMouseLeave={()=>handleHover(false)}>
            <div className = {`${activeClassSetter(isBtnClicked, isBtnHovered)}`}/>
            <p className={`btn-p ${isBtnClicked || isBtnHovered? 'btn-clicked':''}`}>
                SEE MY WORK
                <FaLongArrowAltRight
                className='long-arrow'/>
            </p>
        </button>
    </div>
    )
}