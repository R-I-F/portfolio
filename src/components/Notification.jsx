import React from "react";
import "../styles/notification.css"
import { FaTriangleExclamation } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

export default function Notification({text, addClass, type}){
    const sign = (type)=>{
        if(type === "error"){
            return (
                <FaTriangleExclamation 
                className = "notification-exclamation"/>
            )
        }
        else if(type === "success"){
            return(
                <TiTick
                className="notification-success" />
            )
        }
    }
    return(
        <div 
        className={`notification ${addClass}`}>
        { sign(type) }
        { text }
        </div>    
    )
}