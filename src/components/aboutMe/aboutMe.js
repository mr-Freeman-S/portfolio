import React from 'react';
import style from './aboutMe.module.scss'
import styleContainer from "../../common/styles/Container.module.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import BlockTitle from "../../common/components/BlockTitle/BlockTitle";
import avatar from "./../../assets/images/avatar.jpg"
import cv from "./../../assets/file/CV.pdf"
import {faTelegram} from "@fortawesome/free-brands-svg-icons/faTelegram";


const AboutMe = () => {
    return (
        <div id='aboutMe' className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
                <BlockTitle preTitle='Get to know me' title='About me'/>
                <div className={style.infoWrapper}>
                    <div style={{backgroundImage: `url(${avatar})`, backgroundSize: "cover"}}
                         className={style.imgContainer}>
                    </div>
                    <div className={style.infoContent}>
                        <h2 className={style.question}>Who am i?</h2>
                        <h6 className={style.answer}>I'm Slava Baranok, a Web Developer</h6>
                        <div className={style.descriptionContainer}><p>I'm a front-end developer. I have about a year of
                            experience developing spa apps and robust business problem solving skills. English at
                            pre-intermediate level. I spend my leisure time on study new technologies and English.</p>
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
                            <a className={style.buttonCV} href={cv} download='Baranok-CV'>Download CV</a>

                            <ul>
                                <li><a href="https://github.com/mr-Freeman-S" target={"_blank"}
                                       rel="noreferrer"><FontAwesomeIcon
                                    icon={faGithub}/></a></li>
                                <li><a href="https://www.instagram.com/mr.baranok" target={"_blank"}
                                       rel="noreferrer"><FontAwesomeIcon
                                    icon={faInstagram}/></a></li>
                                <li><a href="https://www.linkedin.com/in/slava-baranok"
                                       target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                                <li><a href="https://t.me/mrfreeman404"
                                       target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faTelegram}/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;