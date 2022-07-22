import './App.css';
import Header from "./components/Header/Header";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
        </div>
    );
}

export default App;
