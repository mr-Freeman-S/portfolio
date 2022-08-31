import React from 'react';
import style from "./Nav.module.scss"

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href=''>About me</a>
            <a href=''>Skills</a>
            <a href=''>Project</a>
            <a href=''>Contact me</a>
        </div>
    );
};

export default Nav;