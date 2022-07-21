import React from 'react';
import style from "./AboutMe.module.css"
import styleContainer from "../../common/styles/Container.module.css"


const AboutMe = () => {
    return (
        <div className={style.about}>
            <div className={styleContainer.wrapper}>
            <div className={style.text}>
                <p>Hi there</p>
                <h1>I'm Slava Baranok</h1>
                <p>I'm frontend developer</p>
            </div>
            <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default AboutMe;