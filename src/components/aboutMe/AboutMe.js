import React from 'react';
import style from "./AboutMe.module.scss"
import styleContainer from "../../common/styles/Container.module.scss"
import Header from "../Header/Header";


const AboutMe = () => {
    return (
        <div className={style.about}>
            <Header/>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
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