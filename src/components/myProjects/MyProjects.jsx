import React from 'react';
import style from './MyProjects.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Project from "./project/Project";
import BlockTitle from "../../common/components/BlockTitle/BlockTitle";

const MyProjects = () => {
    const myProjects = [{title:'Social network', img:'https://medium.com/hackernoon/social-network-development-types-challenges-technologies-costs-1e185da3b2a9'}]

    return (
        <div className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
                <BlockTitle preTitle='Showcasing some of my work' title='Projects'/>
                <div className={style.projectWrapper}>
                    <Project img={myProjects[0].img} projectName={'social network'} shortDescription={'bla bal asdasdas fdasfas afasf aaaaaaa'}/>
                    <Project img={'img1'} projectName={'social network'} shortDescription={'bla bal asdasdas fdasfas afasf aaaaaaa'}/>
                    <Project img={'img1'} projectName={'cards'} shortDescription={'blaasf aadsad sadas dsa das dsa dsa dsad as das dsa das dsa dsa das dsad as dsa dasdas das d asd sadasdas dsadasdasaaaaa'}/>
                    <Project img={'img1'} projectName={'cards'} shortDescription={'blaasf aaaaaaa'}/>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;