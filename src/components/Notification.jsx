import React from "react";
import "../styles/notification.css"
import { FaTriangleExclamation } from "react-icons/fa6";

export default function Notification({text, addClass}){
    return(
        <div 
        className={`notification ${addClass}`}>
        <FaTriangleExclamation 
        className = "notification-exclamation"/>
        {text}
        </div>    
    )
}