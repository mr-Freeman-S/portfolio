import React from 'react';
import style from "./AboutMe.module.css"


const AboutMe = () => {
    return (
        <div className={style.about}>
            <div className={style.text}></div>
            <div className={style.photo}></div>
        </div>
    );
};

export default AboutMe;