import React from 'react';
import style from './Skills.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import BlockTitle from "../../common/components/BlockTitle/BlockTitle";

const Skills = () => {
    const mySkills = [
        {title: 'HTML5', description: 'It\'s a programming language.'},
        {title: 'CSS3', description: 'For style.'},
        {title: 'JavaScript', description: 'My old best friend.ES6 is awesome.'},
        {title: 'TypeScript', description: 'My new best friend. I love strictly typed programming languages.'},
        {title: 'ReactJS', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.'},
        {title: 'Redux', description: 'Redux is not relevant, but gave basic knowledge to study Redux-react, Redux Toolkit, Redux Thunk and etc.'},
        {title: 'Sass', description: 'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.'},
        {title: 'MaterialUI', description: 'MUI offers a comprehensive suite of UI tools to help you ship new features faster. I also know a few other frameworks: Tailwind, Bootstrap and etc.'},
    ]
    return (
        <div id='skills' className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
                <BlockTitle preTitle='What I know and use in my project' title='Hard skills'/>
                <div className={style.skills}>
                    {mySkills.map((el, key) => <Skill key={key} title={el.title} description={el.description}/>)}
                </div>
            </div>
        </div>
    );
};

export default Skills;