import React, {useState} from 'react';
import style from './Project.module.scss'
import {Link} from "react-router-dom";


const Project = (props) => {
    const [isHovered, setHovered] = (useState(false))

    const linkStyle = {
        backgroundImage: `url(${props.img})`,
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
        backgroundPosition: 'center'

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
                <Link
                    style={linkStyle} to={props.path}
                    target="_blank"></Link>
                 <div className={`${style.infoContainer} ${isHovered ? style.active : style.noActive}`}>
                    <h2 className={style.title}>{props.title}</h2>
                    <p className={style.description}>{props.description}
                    </p>
                    <p className={style.stack}>Technologies: <ul>
                        {props.stack.map((el, elNum) => (
                            (++elNum !== props.stack.length)
                                ? <li><b>{el},</b></li>
                                : <li><b>{el}.</b></li>))}
                    </ul>
                    </p>

                </div>
            </div>


        </div>
    );
};

export default Project;