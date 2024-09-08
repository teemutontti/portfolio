import { lazy, Suspense } from "react";
import LoadingEffect from "../components/LoadingEffect";

export default function Home() {
    const TopBar = lazy(() => import("../features/TopBar"));
    const Footer = lazy(() => import("../features/Footer"));
    const About = lazy(() => import("../sections/About"));
    const Introduction = lazy(() => import("../sections/Introduction"));
    const Projects = lazy(() => import("../sections/Projects"));
    const Skills = lazy(() => import("../sections/Skills"));
    const WorkExperience = lazy(() => import("../sections/WorkExperience"));

    return (
        <Suspense fallback={<LoadingEffect size="lg" />}>
            <TopBar />
            <Introduction />
            <Skills />
            <Projects />
            <WorkExperience />
            <About />
            <Footer />
        </Suspense>
    );
}