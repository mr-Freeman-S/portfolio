import React from 'react';
import style from './ContactForm.module.scss'
import {useForm} from "react-hook-form";


const ContactForm = () => {
    const {register, handleSubmit} = useForm();
    const onSubmit = async data => {
        const response = await fetch('https://gmail-node-sender.herokuapp.com/sendMessage', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({name: data.name, message: data.message,email:data.email})
        })
        console.log(response)
    }
    const onError = errors => console.log(errors)
    return (
        <>
            <form className={style.contactForm} onSubmit={handleSubmit(onSubmit,onError)}>
                <h4 className={style.contentTitle}>Message Me</h4>
                <div className={style.contentRow}>
                    <div className={style.name}><input {...register('name')} type="text" placeholder='Name' required/>
                    </div>
                    <div className={style.email}><input {...register('email')} type="email" placeholder='Email'
                                                        required/></div>
                    <div className={style.subject}><input {...register('subject')} type="text" placeholder='Subject'
                                                          required/></div>
                    <div className={style.message}><textarea {...register('message')}
                                                             rows="5" placeholder='Message'
                                                             required/>
                    </div>
                    <div className={style.button}>
                        <button type='submit' className={style.buttonSend}>Send Message</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;