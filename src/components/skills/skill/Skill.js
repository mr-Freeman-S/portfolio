import React from 'react';
import style from './Skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact,faHtml5,faCss3,faJs} from "@fortawesome/free-brands-svg-icons";
import reduxLogo from './../../../assets/logo/reduxLogo.svg'
import materialui from './../../../assets/logo/materialui.svg'
import typescriptLogo from './../../../assets/logo/typescriptLogo.svg'
import tailwindLogo from './../../../assets/logo/tailwindLogo.svg'
import sassLogo from './../../../assets/logo/sassLogo.svg'
import bootstrapLogo from './../../../assets/logo/bootstrapLogo.svg'

const Skill = (props) => {
    const libIconFontAwesome = {
        ReactJS: faReact,
        HTML5:faHtml5,
        CSS3:faCss3,
        JavaScript:faJs,
    }
    const libIconCustom = {
        Redux:reduxLogo,
        MaterialUI:materialui,
        TypeScript:typescriptLogo,
        Tailwind:tailwindLogo,
        Sass:sassLogo,
        Bootstrap:bootstrapLogo
    }
    return (
        <div className={style.wrapper}>

            {libIconFontAwesome[props.title] ? <FontAwesomeIcon style={{marginBottom:'22px'}} size={"4x"} icon={libIconFontAwesome[props.title]} color={"#009e66"}/>
            : <img className={style.icon} src={libIconCustom[props.title]} alt=""/> }

            <h6 className={style.title}>{props.title}</h6>
            <p className={style.description}>{props.description}</p>
        </div>
    );
};

export default Skill;