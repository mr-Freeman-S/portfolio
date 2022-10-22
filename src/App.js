import './App.scss';
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import MyProjects from "./components/myProjects/MyProjects";
import ContactMe from "./components/ContactForm/ContactMe";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/aboutMe/aboutMe";

function App() {
    return (
        <div className="App">
            <Main/>
            <AboutMe/>
            <Skills/>
            <MyProjects/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}

export default App;
