import React from 'react';

import coverImage from "../../assets/beach.jpeg";

function About(){
    return(
        <section>
            <h1 id="about"> lorem ipsom</h1>
            <img src={coverImage} style= {{ width: "100%"}} alt="cover" />
        </section>
    );

}




export default About;