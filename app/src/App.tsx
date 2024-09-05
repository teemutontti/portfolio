import { lazy, Suspense } from 'react';
import './App.css'
import LoadingEffect from './components/LoadingEffect';

const TopBar = lazy(() => import("./features/TopBar"));
const About = lazy(() => import("./sections/About"));
const Footer = lazy(() => import("./sections/Footer"));
const Introduction = lazy(() => import("./sections/Introduction"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const WorkExperience = lazy(() => import("./sections/WorkExperience"));

function App() {
    return (
        <Suspense fallback={<LoadingEffect />}>
            <TopBar />
            <Introduction />
            <Skills />
            <Projects />
            <WorkExperience />
            <About/>
            <Footer />
        </Suspense>
    );
}

export default App
