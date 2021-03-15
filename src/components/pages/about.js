import React from 'react';

import '../../assets/about.css'

import coverImage from "../../assets/beach.jpeg";

function About(){
    return(
        <section>
            <h1 id="about"> My Portfolio
            <img src={coverImage} style= {{ width: "100%"}} alt="cover" className="my-2" /></h1>
        <h2>About me</h2>
        <p> Lorum Ipsum. alkhfaiuhfea fhiuefh aiuhf aefiuh aiuhfeiuah afieha foaiuh efiuhefah eiauh aiuhef ifwuh . aijhtwiau nfa ie ifa iewuhrwiurehwieou fn ewaiuh aiuhef. iuqheoif an feoiuhf . aefh iefaiu faiunfeaieuh aiuhf ief . iauthiea ciafneiefhifhaaiuefa iuefiuhafeiuhfeiafe iuciuaheiuheiuha vaihei uf. tiuahfeihaiouhfeaeaoiuh aijf aiuhf aieuhio aaiuh aekjncincwiuh af afiuha ie. tiuahe faiuhe ciahcpiuh </p>
        </section>
        
    );

}




export default About;