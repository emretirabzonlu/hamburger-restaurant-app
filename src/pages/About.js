import React from "react";

import BannerImage from "../assets/1beef.jpg"

const About = () => {

    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage:`url(${BannerImage})`}} > </div>
            <div className="aboutBottom">
                <h1>About Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
            </div>
        </div>

    )
}

export default About