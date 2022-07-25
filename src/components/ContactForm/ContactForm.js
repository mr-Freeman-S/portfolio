import React from 'react';
import style from './ContactForm.module.css'
import styleContainer from './../../common/styles/Container.module.css'

const ContactForm = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.formWrapper}`}>
                <h3>WriteMe</h3>
                <form className={style.form}>
                    <input className={style.name} type="text" placeholder="name"/>
                    <input className={style.email} type="text" placeholder="theme"/>
                    <textarea className={style.message} name="write here"/>
                </form>
                <button>send</button>
            </div>
        </div>
    );
};

export default ContactForm;