import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import "./Projects.css";

// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare, faDatabase, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faNodeJs, faReact, faJava, faJs, faUnity } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

const tech = {
    react: [faReact, "React", "#61DAFB"],
    nodeJs: [faNodeJs, "NodeJS", "#8CC84B"],
    mySql: [faDatabase, "MySql", "#4479A1"],
    java: [faJava, "Java", "#007396"],
    js: [faJs, "JavaScript", "#F7DF1E"],
    unity: [faUnity, "Unity", "#005571"],
}

function ProjectElement({
    title,
    date,
    technologies,
    image,
    description,
    link,
    github
}) {
    const { t } = useTranslation();
    const [showContent, setShowContent] = useState(false);

    return (
        <div className="project-element">
            <div className="header">
                <h3>{title}</h3>
                <div className="subtitle">
                    <p>{date}</p>

                    {!showContent
                        ? (<>
                            <p>•</p>
                            <div className="technologies">
                                <ul>
                                    {technologies.map((x, index) => (
                                        <li key={index} style={{
                                            color: x[2]
                                        }}>
                                            <FontAwesomeIcon icon={x[0]} />
                                        </li>
                                        ))}
                                </ul>
                            </div>
                        </>)
                        : null
                    }
                </div>
                <button className="dropdown" onClick={() => setShowContent(!showContent)}>
                    <FontAwesomeIcon icon={showContent ? faChevronUp : faChevronDown} className="icon"/>
                </button>
            </div>
            {showContent
                ? <div className="content">
                    {image ? <img src={image} alt="" /> : null}
                    <div className="technologies">
                        <h5>{t("techUsed")}:</h5>
                        <ul>
                            {technologies.map((x, index) => (
                                <li key={index} style={{
                                    color: x[2]
                                }}>
                                    <FontAwesomeIcon icon={x[0]} />
                                    {x[1]}
                                </li>
                                ))}
                        </ul>
                    </div>
                    <div className="description">
                        <h5>{t("description")}:</h5>
                        {description.map((x, index) => (
                            <p key={index}>{x}</p>
                            ))}
                    </div>
                    <div className="links">
                        {link
                            ? <a href={link} className="primary">
                                <FontAwesomeIcon icon={faUpRightFromSquare} />
                                {t("link")}
                            </a>
                            : null
                        }
                        {github
                            ? <a href={github} className="secondary">
                                <FontAwesomeIcon icon={faGithub} />
                                GitHub
                            </a>
                            : null
                        }
                    </div>
                </div>
                : null}
        </div>
    )
}

ProjectElement.propTypes = {
    title: PropTypes.string,
    date: PropTypes.string,
    technologies: PropTypes.array,
    image: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    github: PropTypes.string,
};

export default function Projects() {
    const { t } = useTranslation();

    return (
        <div id="projects">
            <h2>{t("projects")}</h2>
            <ul className="projects-list">
                <ProjectElement
                    title="Protein Efficiency Calculator"
                    date={`${t("january")} 2024`}
                    technologies={[tech.react, tech.nodeJs, tech.js, tech.mySql]}
                    image={null}
                    description={[
                        "Tein intohimoprojektina sovelluksen, joka laskee ruokien proteiinipitoisuutta sen "
                            + "kalorimääriin nähden.",
                        "Sovelluksessa voi lisätä, muokata tai poistaa ruokia.",
                        "Tällä hetkellä sovelluksen ominaisuuksiin kuuluu vain proteiinipitoisuuden laskenta, mutta "
                            + "tulevaisuudessa on tavoitteena lisätä sovellukseen erilaisia hyödyllisiä ominaisuuksia."
                    ]}
                    link="https://protein-efficiency-calculator-6baf548f6b81.herokuapp.com/"
                    github="https://github.com/teemutontti/verbose-guacamole"
                />
                <ProjectElement
                    title="Java Contacts CRUD App"
                    date={`${t("december")} 2022`}
                    technologies={[tech.java]}
                    image={`./src/assets/projects_java.webp`}
                    description={[
                        "Tein Java ohjelmointikielellä konsolin sisäisen sovelluksen, jossa voi tallentaa, "
                            + "tarkastella, muokata ja poistaa yhteystietoja.",
                        "Tämä oli ensimmäinen ohjelmointiprojekti jonka olen tuottanut."
                    ]}
                    link={null}
                    github={null}
                />
                <ProjectElement
                    title="Pint Rush Mobilegame"
                    date={`${t("may")} 2023`}
                    technologies={[tech.unity]}
                    image={`./src/assets/projects_pintrush.webp`}
                    description={[
                        "Tein Java ohjelmointikielellä konsolin sisäisen sovelluksen, jossa voi tallentaa, "
                            + "tarkastella, muokata ja poistaa yhteystietoja.",
                        "Tämä oli ensimmäinen ohjelmointiprojekti jonka olen tuottanut."
                    ]}
                    link={null}
                    github={null}
                />
            </ul>
        </div>
    );
}
