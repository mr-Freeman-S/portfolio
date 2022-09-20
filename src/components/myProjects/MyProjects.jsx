import React, {useState} from 'react';
import style from './MyProjects.module.scss'
import styleContainer from "../../common/styles/Container.module.scss";
import Project from "./project/Project";
import BlockTitle from "../../common/components/BlockTitle/BlockTitle";
import socialNetwork from './../../assets/images/socialNetwork.jpeg'
import todoList from './../../assets/images/todoList.jpg'
import learningCards from './../../assets/images/learningCards.jpeg'
import pizzaOrder from './../../assets/images/pizzaOrder.jpg'

const MyProjects = () => {

    const myProjects = [
        {
            title: 'Social network',
            img: socialNetwork,
            path: '#',
            description: 'Simple application that was created to learn the basics. In the application, we originally invented our redux further, we still added it. All technology stack: ',
            stack: ['TypeScript', 'React', 'Redux', 'React-redux', 'Redux-Thunk', 'MaterialUI', 'Axios', 'React-router-dom 6',
                'Reselect']
        },
        {
            title: 'Todo list',
            img: todoList,
            path: '#',
            description: 'Stack:Masdasdas asdas',
            stack: ['TypeScript', 'StoryBook', 'React', 'React-redux', 'Redux-Thunk', 'MaterialUI', 'Formik']
        },
        {
            title: 'Learning cards',
            img: learningCards, path: '#',
            description: 'Stack:   asdas dasd asd as ',
            stack: ['TypeScript', 'React', 'Redux', 'React-redux', 'Redux-Thunk', 'MaterialUI', 'Formik']
        },
        {
            title: 'Pizza order',
            img: pizzaOrder,
            path: '#',
            description: 'Stack:asdas dsa das das  dsa ds',
            stack: []
        }
    ]

    return (
        <div className={style.wrapper}>
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