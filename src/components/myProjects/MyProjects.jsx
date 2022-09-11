import React from 'react';
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
        {title: 'Social network', img: socialNetwork, path: '#', description: 'Stack:Hello world'},
        {title: 'Todo list', img: todoList, path: '#', description: 'Stack:Masdasdas asdas'},
        {title: 'Learning cards', img: learningCards, path: '#', description: 'Stack:   asdas dasd asd as '},
        {
            title: 'Pizza order', img: pizzaOrder, path: '#', description: 'Stack:asdas dsa das das  dsa ds'
        }
    ]

    return (
        <div className={style.wrapper}>
            <div className={`${styleContainer.wrapper} ${style.container}`}>
                <BlockTitle preTitle='Showcasing some of my work' title='Projects'/>
                <div className={style.projectWrapper}>
                    {myProjects.map((el,key) => (
                        <Project img={el.img} title={el.title}
                                 description={el.description} path={el.path}/>))}


                </div>
            </div>
        </div>
    );
};

export default MyProjects;