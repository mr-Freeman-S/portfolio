import './App.css';
import Header from "./components/Header/Header";
import AboutMe from "./components/aboutMe/AboutMe";
import Skills from "./components/skills/Skills";
import MyProjects from "./components/myProjects/MyProjects";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <MyProjects/>
            <ContactForm/>
        </div>
    );
}

export default App;
