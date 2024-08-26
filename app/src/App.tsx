
import './App.css'
import TopBar from './features/TopBar'
import About from './sections/About';
import Contact from './sections/Contact';
import Introduction from './sections/Introduction';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import WorkExperience from './sections/WorkExperience';

function App() {
    return (
        <>
            <TopBar />
            <Introduction />
            <Skills />
            <Projects />
            <WorkExperience />
            <About />
            <Contact />
        </>
    );
}

export default App
