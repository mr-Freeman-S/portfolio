import React from 'react';
import style from './FooterItem.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faInstagram, faLinkedin,} from "@fortawesome/free-brands-svg-icons";

const FooterItem = (props) => {
    const items = {
        linkedIn: {icon: faLinkedin, link: 'https://www.linkedin.com/in/slava-baranok'},
        instagram: {icon: faInstagram, link: 'https://www.instagram.com/mr.baranok/'},
        gitHub: {icon: faGithub, link: 'https://github.com/mr-Freeman-S'},
    }
    return (
        <a href={items[`${props.item}`].link} className={style.item}>
            <FontAwesomeIcon size='2xl' icon={items[`${props.item}`].icon}/>
        </a>
    );
};

export default FooterItem;