import React from 'react';
import style from './MyProjects.module.css'
import styleContainer from "../../common/styles/Container.module.css";
import styleTitle from "../../common/styles/Title.module.css";
import Project from "./project/Project";

const MyProjects = () => {
    return (
        <div className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
                <h2 className={styleTitle.title}>Projects</h2>
                <div className={style.projectWrapper}>
                    <Project img={'img1'} projectName={'social network'} shortDescription={'bla bal asdasdas fdasfas afasf aaaaaaa'}/>
                    <Project img={'img1'} projectName={'cards'} shortDescription={'blaasf aaaaaaa'}/>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;