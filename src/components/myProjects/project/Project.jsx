import React from 'react';
import style from './Project.module.scss'
import {Link} from "react-router-dom";

const Project = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.imgContainer}>
                <Link className={style.link} to={{ pathname: "#" }} target="_blank" >View</Link>
            </div>
            <h2 className={style.title}>{props.projectName}</h2>
            <span className={style.description}>{props.shortDescription}</span>
        </div>
    );
};

export default Project;