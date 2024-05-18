import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function SectionCLane({title, info, linkTo, activeClassSetter, addClass}){
    const [ isBtnClicked, setIsBtnClicked ] = React.useState(false)
    const [ isBtnHovered, setIsBtnHovered ] = React.useState(false)
    const navigate = useNavigate();
    function handleHover(x){
        setIsBtnHovered(x);
        return;
    }

    function handleBtnClick(x){
        setIsBtnClicked(true);
        setTimeout(()=>{
            navigate(x)}, 1000)
    }

    return(
    <div
    className={`lane ${addClass}`}>
        <h1 className= 'body-c-title' >{title}</h1>
        <p className = 'lane-info'>{info}</p>
        <button 
        className = {`special-btn`}
        onClick={()=>handleBtnClick(linkTo)}
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