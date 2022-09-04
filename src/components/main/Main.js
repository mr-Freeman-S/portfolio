import React from 'react';
import style from "./Main.module.scss"
import styleContainer from "../../common/styles/Container.module.scss"
import Header from "../Header/Header";
import videoBG from "./../../assets/video/videoBG.mp4"


const Main = () => {
    return (
        <div className={style.about}>
            <Header/>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
                <div className={style.text}>
                    <h1>Slava Baranok</h1>
                    <h4>I’m Frontend Dev</h4>
                </div>
            </div>
            <video src={videoBG} className={style.videoBg} autoPlay loop muted>
            </video>
        </div>
    );
};

export default Main;