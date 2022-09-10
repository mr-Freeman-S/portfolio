import React from 'react';
import AnimationBar from "../AnimationBar/AnimationBar";
import style from './BlockTitle.module.scss'

const BlockTitle = (props) => {
    return (
        <div className={style.titleWrapper}>
            <p className={style.preTitle}>{props.preTitle}</p>
            <h2 className={style.title}>{props.title}</h2>
            <AnimationBar/>
        </div>
    );
};

export default BlockTitle;