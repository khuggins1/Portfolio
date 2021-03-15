import React from 'react';

import '../../assets/about.css'

import coverImage from "../../assets/beach.jpeg";

function About(){
    return(
        <section>
            <h1 id="about"> My Portfolio
            <img src={coverImage} style= {{ width: "100%"}} alt="cover" className="my-2" /></h1>
        </section>
    );

}




export default About;