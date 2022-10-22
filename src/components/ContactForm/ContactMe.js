import React from 'react';
import style from './ContactMe.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import BlockTitle from "../../common/components/BlockTitle/BlockTitle";
import signature from "./../../assets/logo/signature.svg"
import location from "./../../assets/logo/map-location.svg"
import phone from "./../../assets/logo/phone.svg"
import email from "./../../assets/logo/paper-plane.svg"
import {useForm} from "react-hook-form";
import ContactForm from "./contactForm/ContactForm";



const ContactMe = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    console.log(watch("example"));

    return (
        <div id='contact' className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.formWrapper}`}>
                <BlockTitle preTitle='Feel free to contact me anytimes' title={'Get in Touch'}/>

                <div className={style.contactWrapper}>
                    <div className={style.formContent}>
                        <ContactForm/>
                    </div>
                    <div className={style.infoContent}>
                        <div className={style.contactInfo}>
                            <h4 className={style.infoTitle}>Contact Info</h4>
                            <p className={style.infoDescription}>Always available for work if the right project comes
                                along, Feel free to contact me!</p>
                            <ul>
                                <li>
                                    <div className={style.media}><span className={style.iconInfo}><img src={signature} alt="name"/></span>
                                        <div className={style.mediaBody}><h6 className={style.infoType}>Name</h6><span className={style.infoValue}>Vuachaslau Baranok</span></div>
                                    </div>
                                </li>
                                <li>
                                    <div className={style.media}><span className={style.iconInfo}><img src={location} alt="location"/></span>
                                        <div className={style.mediaBody}><h6 className={style.infoType}>Location</h6><span className={style.infoValue}>220000 Belarus, Minsk</span></div>
                                    </div>
                                </li>
                                <li>
                                    <div className={style.media}><span className={style.iconInfo}><img src={phone} alt=""/></span>
                                        <div className={style.mediaBody}><h6 className={style.infoType}>Call Me</h6><span className={style.infoValue}>+375339018435</span></div>
                                    </div>
                                </li>
                                <li>
                                    <div className={style.media}><span className={style.iconInfo}><img src={email} alt=""/></span>
                                        <div className={style.mediaBody}><h6 className={style.infoType}>Email Me</h6><span className={style.infoValue}>mr.baranok.slava@gmail.com</span></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;