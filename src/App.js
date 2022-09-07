import './App.scss';
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import MyProjects from "./components/myProjects/MyProjects";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/aboutMe/aboutMe";

function App() {
    return (
        <div className="App">
            <Main/>
            <AboutMe/>
            <Skills/>
            <MyProjects/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}

export default App;
