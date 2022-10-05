import React from 'react';
import style from './ContactForm.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import BlockTitle from "../../common/components/BlockTitle/BlockTitle";

const ContactForm = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.formWrapper}`}>
                <BlockTitle preTitle='Feel free to contact me anytimes' title={'Get in Touch'}/>

                <div className={style.contactWrapper}>
                    <div className={style.formContent}>
                        <form className={style.contactForm} action="">
                            <h4 className={style.contentTitle}></h4>
                            <div className={style.contentRow}>
                                <div className={style.name}><input type="text" placeholder='Name' required/></div>
                                <div className={style.email}><input type="email" placeholder='Email' required/></div>
                                <div className={style.subject}><input type="text" placeholder='Subject' required/></div>
                                <div className={style.message}><textarea name="message" id=""
                                                                         rows="5" placeholder='Message'
                                                                         required/>
                                </div>
                                <div className={style.button}>
                                    <button className={style.buttonSend}>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className={style.infoContent}></div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;