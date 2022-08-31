import React from 'react';
import style from './Skills.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import styleTitle from '../../common/styles/Title.module.scss'

const Skills = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
                <h2 className={styleTitle.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"js"} description={'asdas dasdasdasd'}/>
                    <Skill title={"css/html"}
                           description={'asdas dasdddddddddd dddddddddd ddddddddd dddddddddddd dddddddddddddddddasd asddddddddddddddddsad asdasd'}/>
                    <Skill title={"react"} description={'asdas dasdas asdasd asdas das das dsadasd asdasdasd'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;