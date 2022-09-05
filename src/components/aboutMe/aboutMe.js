import React from 'react';
import style from './aboutMe.module.scss'
import styleContainer from "../../common/styles/Container.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const AboutMe = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
                <div className={style.titleWrapper}>
                    <p>get to know me</p>
                    <h2>About me</h2>

                </div>
                <div className={style.infoWrapper}>
                    <div className={style.imgContainer}>
                    </div>
                    <div className={style.infoContent}>
                        <h2>Who am i?</h2>
                        <h6>I'm Slava Baranok, a Web Developer</h6>
                        <div className={style.descriptionContainer}><p>I am a freelancer based in the United Kingdom and
                            i have been building noteworthy UX/UI
                            designs and websites for years, which comply with the latest design trends. I help convert a
                            vision and an idea into meaningful and useful products. Having a sharp eye for product
                            evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                        </div>
                        <address>
                            <div className={style.row}>
                                <div className={style.boxContent}>
                                    <span>Name:</span>
                                    <p>Slava Baranok</p>
                                </div>
                                <div className={style.boxContent}>
                                    <span>Email:</span>
                                    <p><a href="#">mr.baramok.slava@gmail.com</a></p>
                                </div>
                                <div></div>
                            </div>
                            <div className={style.row}>
                                <div className={style.boxContent}>
                                    <span>Age:</span>
                                    <p>30</p>
                                </div>
                                <div className={style.boxContent}>
                                    <span>From:</span>
                                    <p>Minsk, Belarus</p>
                                </div>
                                <div></div>
                            </div>
                        </address>
                        <div className={style.CVContent}>
                            <a href="#">Download CV</a>
                            <ul>
                                <li><a className={style.icon} href="#"><FontAwesomeIcon icon="fa-brands fa-github" /></a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">1</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;