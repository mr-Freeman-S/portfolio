import React from 'react';
import style from './Skill.module.scss'
import logo from './../../../logo.svg'

const Skill = (props) => {
    return (
        <div className={style.wrapper}>
            <img className={style.icon} src={logo} alt=""/>
            <h6 className={style.title}>{props.title}</h6>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};

export default Skill;