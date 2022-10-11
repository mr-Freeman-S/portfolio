import React from 'react';
import style from "./Nav.module.scss"

const Nav = () => {
    const foo = (anchor) => {
        switch (anchor) {
            case 'aboutMe':
                return window.location.href = '#aboutMe'
            case 'skills':
                return window.location.href = '#skills'
            case 'projects':
                return window.location.href = '#projects'
            case 'contact':
                return window.location.href = '#contact'
            default:
                return false
        }
    }
    return (
        <div className={style.nav}>
            <button onClick={()=> foo('aboutMe')}>About me</button>
            <button onClick={()=> foo('skills')}>Skills</button>
            <button onClick={()=> foo('projects')}>Projects</button>
            <button onClick={()=> foo('contact')}>Contact Me</button>
        </div>
    );
};

export default Nav;