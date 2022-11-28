import React from 'react';
import style from './Footer.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import FooterItem from "./FooterItem/FooterItem";

const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
                <h3 className={style.title}>Vuachalsau Baranok</h3>
                <div className={style.itemsWrapper}>
                    <FooterItem item='linkedIn'/>
                    <FooterItem item='instagram'/>
                    <FooterItem item='gitHub'/>
                    <FooterItem item='telegram'/>
                </div>
                <span>©2022 All right reserved </span>
            </div>
        </div>
    );
};

export default Footer;