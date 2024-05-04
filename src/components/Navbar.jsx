import React from "react";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Education from "../pages/Education";

export default function Navbar(){
    const [navLocation, setNavLocation] = React.useState(null);
    /*navLocation state will be set numerically 
    currently 1 = about , 2 = projects , 3 = education */

    function navLocationSetter(event, navNum, prev) {
        /*This function will either return a number or null based on the current navLocation state*/ 
        if (prev && event.target.id === `btn${prev}`) {
            return null;
        } else {
            return navNum;
        }
    }
    

    function NavEl(navNum, title){
        return(
            <>
                <button 
                onClick = { (event)=> setNavLocation((prev) => navLocationSetter(event, navNum, prev)) }
                className = { navLocation === navNum ? "nav-btn nav-btn-active": "nav-btn" }
                id = { "btn" + navNum }
                >{title}
                </button>
            </>
        )
    }
    console.log(navLocation)
    return(
        <nav className="nav-bar">
            {NavEl(1, "About")}
            <About
            navLocation = {navLocation}/>
            {NavEl(2, "Projects")}
            <Projects 
            navLocation = {navLocation}/>
            {NavEl(3, "Education")}
            <Education 
            navLocation = {navLocation}/>
        </nav>
    )
}