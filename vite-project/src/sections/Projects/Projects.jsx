import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import "./Projects.css";
import importedProjects from "../../utilities/projects"
import importedTechnologies from "../../utilities/technologies"

// FontAwesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";

function FullScreenProjectElement( { project, setExpandedProject } ) {

    return (
        <div className="fullscreen-project-element">
            <ProjectElement info={project} isExpanded={true}/>
            <button className="close-fullscreen" onClick={() => setExpandedProject(null)}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
        </div>
    )
}

function ProjectElement( { info, isExpanded, toggleShowContent } ) {
    const { t, i18n } = useTranslation();
    const [title, setTitle] = useState(info.title);
    const [technologies, setTechnologies] = useState(info.technologies);
    const [image, setImage] = useState(info.image);
    const [link, setLink] = useState(info.link);
    const [github, setGithub] = useState(info.github);
    const [date, setDate] = useState(null);
    const [description, setDescription] = useState(null);

    useEffect(() => {
        setTitle(info.title);
        setTechnologies(info.technologies);
        setImage(info.image);
        setLink(info.link);
        setGithub(info.github);

        if (i18n.language === "fi") {
            setDate(info.date.fi);
            setDescription(info.description.fi);
        } else {
            setDate(info.date.em);
            setDescription(info.description.en);
        }

    }, [info])

    return (
        <>
            {date != null && description != null
                ? <div className={`project-element ${isExpanded ? "" : "hidden"}`} onClick={toggleShowContent}>
                    <div className="header">
                        <div className="titles">
                            <h3 className="title">{title}</h3>
                            <div className="subtitle">
                                <p>{date}</p>
                                {!isExpanded
                                    ? (<>
                                        <p>•</p>
                                        <div className="technologies">
                                            <ul>
                                                {technologies.map((tech, index) => (
                                                    <li key={index} style={{
                                                        color: importedTechnologies[tech].color
                                                    }}>
                                                        <FontAwesomeIcon icon={importedTechnologies[tech].icon} />
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </>)
                                    : null
                                }
                            </div>
                        </div>
                        {image ? <img src={`./src/assets/${image}`} alt={image} /> : null}
                    </div>
                    <div className={`content ${isExpanded ? "" : "hidden"}`}>
                        <div className="technologies">
                            <h5>{t("techUsed")}:</h5>
                            <ul>
                                {technologies.map((tech, index) => (
                                    <li key={index} style={{
                                        color: importedTechnologies[tech].color
                                    }}>
                                        <FontAwesomeIcon icon={importedTechnologies[tech].icon} />
                                        {importedTechnologies[tech].text}
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
                </div>
            : null}
        </>
    )
}

export default function Projects() {
    const { t } = useTranslation();
    const [expandedProject, setExpandedProject] = useState(null);

    const toggleShowContent = (project) => {
        expandedProject === project
            ? setExpandedProject(null)
            : setExpandedProject(project);
    };

    return (
        <div id="projects">
            <h2>{t("projects")}</h2>
            <ul className="projects-list">
                {expandedProject != null
                    ? <FullScreenProjectElement
                        project={expandedProject}
                        setExpandedProject={setExpandedProject}
                    />
                    : importedProjects.map((project, index) => (
                        <ProjectElement
                            key={index}
                            info={project}
                            isExpanded={expandedProject === project}
                            toggleShowContent={() => toggleShowContent(project)}
                        />
                    ))}
            </ul>
        </div>
    );
}

ProjectElement.propTypes = {
    info: PropTypes.object,
    isExpanded: PropTypes.bool,
    toggleShowContent: PropTypes.func
};