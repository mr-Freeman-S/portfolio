import React from 'react';
import style from './aboutMe.module.scss'
import styleContainer from "../../common/styles/Container.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import BlockTitle from "../../common/components/BlockTitle/BlockTitle";
import avatar from "./../../assets/images/avatar.jpg"

const AboutMe = () => {
    return (
        <div id='aboutMe' className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
                <BlockTitle preTitle='Get to know me' title='About me'/>
                <div className={style.infoWrapper}>
                    <div style={{backgroundImage:`url(${avatar})`,backgroundSize:"cover"}} className={style.imgContainer}>
                    </div>
                    <div className={style.infoContent}>
                        <h2 className={style.question}>Who am i?</h2>
                        <h6 className={style.answer}>I'm Slava Baranok, a Web Developer</h6>
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
                                    <p className={style.value}>Slava Baranok</p>
                                </div>
                                <div className={style.boxContent}>
                                    <span>Email:</span>
                                    <p className={style.value}><a href="#">mr.baramok.slava@gmail.com</a></p>
                                </div>
                                <div></div>
                            </div>
                            <div className={style.row}>
                                <div className={style.boxContent}>
                                    <span>Age:</span>
                                    <p className={style.value}>30</p>
                                </div>
                                <div className={style.boxContent}>
                                    <span>From:</span>
                                    <p className={style.value}>Minsk, Belarus</p>
                                </div>
                                <div></div>
                            </div>
                        </address>
                        <div className={style.CVContent}>
                            <a className={style.buttonCV} href="#">Download CV</a>

                            <ul>
                                <li><a href="https://github.com/mr-Freeman-S" target={"_blank"} rel="noreferrer"><FontAwesomeIcon
                                    icon={faGithub}/></a></li>
                                <li><a href="https://www.instagram.com/mr.baranok" target={"_blank"} rel="noreferrer"><FontAwesomeIcon
                                    icon={faInstagram}/></a></li>
                                <li><a href="https://www.linkedin.com/in/slava-baranok"
                                       target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;