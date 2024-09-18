import { lazy, Suspense, useEffect } from "react";
import LoadingEffect from "../components/LoadingEffect";
import i18next from "i18next";

export default function Home({ language="fi-FI" }: { language?: string }) {
    const TopBar = lazy(() => import("../features/TopBar"));
    const Footer = lazy(() => import("../features/Footer"));
    const About = lazy(() => import("../sections/About"));
    const Introduction = lazy(() => import("../sections/Introduction"));
    const Projects = lazy(() => import("../sections/Projects"));
    const Skills = lazy(() => import("../sections/Skills"));
    const WorkExperience = lazy(() => import("../sections/WorkExperience"));

    useEffect(() => {
        i18next.changeLanguage(language);
    }, [language])

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