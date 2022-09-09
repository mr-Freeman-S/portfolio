import React from 'react';
import style from './Skills.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import styleTitle from '../../common/styles/Title.module.scss'

const Skills = () => {
    const mySkills = ['HTML|CSS', 'JavaScript| ES6', 'ReactJS', 'Redux', 'Redux-thunk', 'MaterialUI', 'Tailwind', 'Bootstrap']
    return (
        <div className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
                <h2 className={styleTitle.title}>Skills</h2>

                <div className={style.skills}>
                    {mySkills.map((el, key) => <Skill key={key} title={el} description={'Hello world'}/>)}
                </div>
            </div>
        </div>
    );
};

export default Skills;