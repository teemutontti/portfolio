import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import "./Header.css";
import { useState } from "react";

// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faMoon,
    faSun,
    faGlobe,
    faUser,
    faCode,
    faBriefcase,
    faAddressCard
} from '@fortawesome/free-solid-svg-icons'

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
                </div>
                <button className="hamburger" onClick={toggleMenu}>
                    <span className="line x"></span>
                    <span className="line o"></span>
                    <span className="line x"></span>
                </button>
            </div>
            <div className={`right flex ${menuOpen ? "" : "hidden"}`}>
                <nav>
                    <ul>
                        <li>
                            <a href="#aboutMe">
                                <FontAwesomeIcon icon={faUser} className="icon"/>
                                <p>{t("aboutMe")}</p>
                            </a>
                        </li>
                        <li>
                            <a href="#projects">
                                <FontAwesomeIcon icon={faCode} className="icon"/>
                                <p>{t("projects")}</p>
                            </a>
                        </li>
                        <li>
                            <a href="#workExperience">
                                <FontAwesomeIcon icon={faBriefcase} className="icon"/>
                                <p>{t("workExperience")}</p>
                            </a>
                        </li>
                        <li>
                            <a href="#contactMe">
                                <FontAwesomeIcon icon={faAddressCard} className="icon"/>
                                <p>{t("contactMe")}</p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <section className="toggles flex column">
                    <div className="flex center">
                        <p>{t("toggleTheme")}</p>
                        <button className="theme-toggle toggle" onClick={toggleTheme}>
                            <FontAwesomeIcon icon={faMoon} />
                            <span className={theme === "light" ? "lever off" : "lever on"}></span>
                            <FontAwesomeIcon icon={faSun} />
                        </button>
                    </div>
                    <div className="flex center">
                        <button className="language-toggle" onClick={toggleLanguage}>
                            <FontAwesomeIcon icon={faGlobe} />
                            {t("toggleLanguage")}
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
