import React from 'react';
import style from './Footer.module.css'
import styleContainer from './../../common/styles/Container.module.css'
import FooterItem from "./FooterItem/FooterItem";

const Footer = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
                <h3>Vuachalsau Baranok</h3>
                <div className={style.itemsWrapper}>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                    <FooterItem/>
                </div>
                <span>©2022 All right reserved </span>
            </div>
        </div>
    );
};

export default Footer;