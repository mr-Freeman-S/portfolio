import React, {useState} from 'react';
import style from './Project.module.scss'
import {Link} from "react-router-dom";
import {hover} from "@testing-library/user-event/dist/hover";


const Project = (props) => {
    const [isHovered, setHovered] = (useState(false))

    const linkStyle = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        height: '300px',
        width: '100%',
        backgroundPosition: 'center',
    }

    const linkMouseEnterHandler = () => {
        !isHovered && setHovered(true)
    }
    const linkMouseLeaveHandler = () => {
        isHovered && setHovered(false)
    }
    return (
        <div className={style.wrapper}>
            <div className={style.container}
                 onMouseLeave={linkMouseLeaveHandler}
                 onMouseEnter={linkMouseEnterHandler}>
                <h2 className={style.title}>{props.title}</h2>
                <p className={style.description}>{props.description}
                </p>
                <a
                    style={linkStyle} href={props.path.site}
                    target="_blank"></a>
                <div className={style.buttonWrapper}>
                    <a
                        href={props.path.github}
                        target="_blank" className={style.buttonRedirect}>CODE
                    </a>
                    <a
                        href={props.path.site}
                        target="_blank" className={style.buttonRedirect}>VIEW
                    </a>
                </div>
                <p className={style.stack}>Technologies: <ul>
                    {props.stack.map((el, elNum) => (
                        (++elNum !== props.stack.length)
                            ? <li><b>{el},</b></li>
                            : <li><b>{el}.</b></li>))}
                </ul>
                </p>
            </div>


        </div>
    );
};

export default Project;