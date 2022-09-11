import React from 'react';
import style from './Project.module.scss'
import {Link} from "react-router-dom";


const Project = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.imgContainer}>
                <Link style={{
                    backgroundImage: `url(${props.img})`,
                    backgroundSize: 'cover',
                    height: '100%',
                    width: '100%'
                }} className={style.link} to={{pathname: props.path}} target="_blank"></Link>
            </div>
            <h2 className={style.title}>{props.title}</h2>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Project;