// Function imports
import { useEffect, useState } from "react";

// Component imports
import Header from "./elements/Header/Header";
import Home from "./sections/Home/Home";
import AboutMe from "./sections/AboutMe/AboutMe"
import Projects from "./sections/Projects/Projects";
import WorkExperience from "./sections/WorkExperience/WorkExperience";
import ContactMe from "./sections/ContactMe/ContactMe";
import Footer from "./elements/Footer/Footer";

// Style imports
import "./App.css";

function App() {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        document.body.className = `theme-${theme}`;
    }, [theme]);

    return (
        <div className={`app ${theme}`}>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main>
                <Home />
                <AboutMe />
                <Projects />
                <WorkExperience />
                <ContactMe />
            </main>
            <Footer />
        </div>
    );
}

export default App;
