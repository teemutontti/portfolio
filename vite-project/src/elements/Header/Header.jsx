import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import "./Header.css";
import { useState } from "react";

function countStudentYears(language) {
    const STARTING_YEAR = 2022;
    const GRADUATION = new Date("2025-12-31");
    const date = new Date();

    if (date >= GRADUATION) {
        return "GRADUATED";
    }

    const yearStudied = date.getFullYear() - STARTING_YEAR;
    const currentStudyYear = date.getMonth() >= 7 ? yearStudied + 1 : yearStudied;

    if (language === "en") {
        switch (currentStudyYear) {
            case 1:
                return "1st";
            case 2:
                return "2nd";
            case 3:
                return "3rd";
            default:
                return `${currentStudyYear}th`;
        }
    }
    return `${currentStudyYear}.`;
}

export default function Header({ theme, toggleTheme }) {
    const { t, i18n } = useTranslation();
    const toggleLanguage = () => {
        if (i18n.language === "fi") {
            i18n.changeLanguage("en");
        } else {
            i18n.changeLanguage("fi");
        }
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="left flex">
                <div className="title">
                    <h1>Teemu Tontti</h1>
                    <h2>
                        {countStudentYears(i18n.language) == "GRADUATED"
                            ? `${t("jobTitle")}`
                            : `${t("informationSystems")} ${countStudentYears(i18n.language)} ${t("year")} ${t("student")}`}
                    </h2>
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="line x"></span>
                    <span className="line o"></span>
                    <span className="line x"></span>
                </button>
            </div>
            <div className={`right flex column ${menuOpen ? "" : "hidden"}`}>
                <nav>
                    <ul>
                        <li>
                            <a href="#home">{t("home")}</a>
                        </li>
                        <li>
                            <a href="#projects">{t("projects")}</a>
                        </li>
                        <li>
                            <a href="#workExperience">{t("workExperience")}</a>
                        </li>
                        <li>
                            <a href="#contactMe">{t("contactMe")}</a>
                        </li>
                    </ul>
                </nav>
                <section className="toggles">
                    <div className="flex center">
                        <p>{t("toggleLanguage")}</p>
                        <button className="language-toggle toggle" onClick={toggleLanguage}>
                            <h4>FI</h4>
                            <span className={i18n.language === "fi" ? "lever off" : "lever on"}></span>
                            <h4>EN</h4>
                        </button>
                    </div>
                    <div className="flex center">
                        <p>{t("toggleTheme")}</p>
                        <button className="theme-toggle toggle" onClick={toggleTheme}>
                            <h4>☀️</h4>
                            <span className={theme === "light" ? "lever off" : "lever on"}></span>
                            <h4>🌙</h4>
                        </button>
                    </div>
                </section>
            </div>
        </header>
    );
}

Header.propTypes = {
    theme: PropTypes.string,
    toggleTheme: PropTypes.func,
};
