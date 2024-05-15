import React from "react";
import "../../public/styles/notification.css"
import { FaTriangleExclamation } from "react-icons/fa6";
import { SiZebpay } from "react-icons/si";

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