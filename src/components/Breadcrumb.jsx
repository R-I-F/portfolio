import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Breadcrumb(){
    return (
        <div>
                <div className="profile-img-container">
                    <img src="profile-img.jpg" className="profile-img"/>
                    <div className="breadcrumb">
                        <FaGithubSquare className="github"/>   
                        <FaLinkedin className="linkedin"/>          
                    </div>
                </div>
                <div className="title-container">
                    <h1>Ibrahim El-Refaee</h1>
                    <p>Full-stack developer</p>
                </div>
            </div>
    )
}