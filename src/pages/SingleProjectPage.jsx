import React from "react"
import { useLocation } from "react-router-dom"

export default function SingleProjectPage(){
    const location = useLocation();
    // function extractIdFromLocation(x) {
    //     const pathname = x.pathname;
    //     const parts = pathname.split('/');
    //     return parts[2]; 
    // }
    // const projectId = extractIdFromLocation(location);
    console.log(location);
    return(
        <div>
            Single projects page
        </div>
    )
}