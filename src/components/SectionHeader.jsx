import React from "react";
import '../../public/styles/sectionHeader.css'
import dotSvg1 from '/dots-1.svg'
import dotSvg2 from '/dots-2.svg'
import zigzag1 from '/zigzag-1.svg'
import zigzag2 from '/zigzag-2.svg'

import { Element } from "react-scroll";

export default function SectionHeader({name}){
    return (
    <Element name = {name}>
            <section
                className="section-header">
                    <div className="block-a">
                        <h2 className="block-a-name">Ibrahim</h2>
                        <h1 className="block-a-title">Fullstack Developer<span>.</span></h1>
                        <p
                        className="block-a-intro-1">
                        I create solid, scalable full-stack products with a focus on outstanding user experience.</p>
                        <div className="block-a-intro-block">
                            <p
                            className="block-a-intro-2">Demonstrated success in developing impactful products for clients.</p>
                            <p
                            className="block-a-intro-3">I am consistently motivated to take on new challenges and discover solutions.</p>
                        </div>
                    </div>
                    <div className="block-b">
                        <div className="profile-img-block">
                            <div className="img-block">
                                <img
                                src = {dotSvg1}
                                className="dots-svg-1"
                                />
                                <div 
                                className="profile-img-container">
                                    <img
                                    src = '/profile-img.jpg'
                                    className="profile-img"
                                    />
                                </div>
                                <img
                                src = {dotSvg2}
                                className="dots-svg-2"
                                />
                                <img
                                src = {dotSvg2}
                                className="dots-svg-3"
                                />
                                <img
                                src = {zigzag1}
                                className="zigzag-svg-1"
                                />
                                <img
                                src = {zigzag2}
                                className="zigzag-svg-2"
                                />
                                <img
                                src = {zigzag1}
                                className="zigzag-svg-3"
                                />
                                <div className="shadow-profile-img-border"/>
                            </div>
                        </div>
                    </div>
                    
                </section>
    </Element>
        )
}