import React from 'react';
import style from './MyProjects.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import styleTitle from "../../common/styles/Title.module.scss";
import Project from "./project/Project";

const MyProjects = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
                <h2 className={styleTitle.title}>Projects</h2>
                <div className={style.projectWrapper}>
                    <Project img={'img1'} projectName={'social network'} shortDescription={'bla bal asdasdas fdasfas afasf aaaaaaa'}/>
                    <Project img={'img1'} projectName={'social network'} shortDescription={'bla bal asdasdas fdasfas afasf aaaaaaa'}/>
                    <Project img={'img1'} projectName={'cards'} shortDescription={'blaasf aadsad sadas dsa das dsa dsa dsad as das dsa das dsa dsa das dsad as dsa dasdas das d asd sadasdas dsadasdasaaaaa'}/>
                    <Project img={'img1'} projectName={'cards'} shortDescription={'blaasf aaaaaaa'}/>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;