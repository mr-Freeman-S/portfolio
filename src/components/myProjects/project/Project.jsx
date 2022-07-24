import React from 'react';
import style from './Project.module.css'

const Project = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.imgProject}>
                <button>View</button>
            </div>
            <h2 className={style.title}>{props.projectName}</h2>
            <div>{props.shortDescription}</div>
        </div>
    );
};

export default Project;