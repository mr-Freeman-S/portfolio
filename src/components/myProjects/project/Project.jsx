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
                {isHovered && <div className={style.infoContainer}>
                    <h2 className={style.title}>{props.title}</h2>
                    <p className={style.description}>{props.description}{props.stack.map((el, elNum) => (
                        (++elNum !== props.stack.length)
                            ? <span><b>{el},</b></span>
                            : <span><b>{el}.</b></span>))}
                    </p>

                </div>}
            </div>


        </div>
    );
};

export default Project;