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
                    <h4>Hi there</h4>
                    <h1>I'm Slava Baranok</h1>
                    <h4>I'm frontend developer</h4>
                </div>
                <div className={style.photo}></div>
            </div>
        </div>
    );
};

export default AboutMe;