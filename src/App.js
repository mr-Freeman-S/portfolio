import './App.css';
import Header from "./components/Header/Header";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";
import MyProjects from "./components/myProjects/MyProjects";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <MyProjects/>
        </div>
    );
}

export default App;
