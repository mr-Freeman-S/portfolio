import React from 'react';
import style from './MyProjects.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Project from "./project/Project";
import BlockTitle from "../../common/components/BlockTitle/BlockTitle";
import socialNetwork from './../../assets/images/socialNetwork.jpeg'
import todoList from './../../assets/images/todoList.jpg'
import learningCards from './../../assets/images/learningCards.jpeg'

const MyProjects = () => {

    const myProjects = [
        {
            title: 'Social network',
            img: socialNetwork,
            path: '#',
            description: 'Simple application that was created to learn the basics. In the application, we originally invented our redux further, we still added it.',
            stack: ['TypeScript', 'React', 'Redux', 'React-redux', 'Redux-Thunk', 'MaterialUI', 'Axios', 'React-router-dom 6',
                'Reselect']
        },
        {
            title: 'Todo list',
            img: todoList,
            path: '#',
            description: 'Todo for your productivity. Create, Read, Update, Delete your lists. The best app for start a new habit.',
            stack: ['TypeScript', 'StoryBook', 'React', 'React-redux', 'Redux-Thunk', 'MaterialUI', 'Formik']
        },
        {
            title: 'Learning cards',
            img: learningCards, path: '#',
            description: 'Application for learning anything. You create decks and cards in which you write a question and an answer, then you press teach and you are given a question. After you have spoken the answer, look and rate how you like the question. questions will come across more often than you do not know.',
            stack: ['TypeScript', 'Redux', 'React-redux', 'Redux-Thunk', 'MaterialUI', 'Formik']
        },


    ]

    return (
        <div id='projects' className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
                <BlockTitle preTitle='Showcasing some of my work' title='Projects'/>
                <div className={style.projectWrapper}>
                    {myProjects.map((el, key) => (
                        <Project key={key}
                                 stack={el.stack}
                                 img={el.img}
                                 title={el.title}
                                 description={el.description}
                                 path={el.path}
                        />))}
                </div>
            </div>
        </div>
    );
};

export default MyProjects;