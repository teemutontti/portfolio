import { ProjectViewType } from "../util/types";
import placeholderImage from "../assets/project-images/placeholder.webp";
import "../styles/project-view.css";
import Logo from "../components/Logo";
import { useEffect, useState } from "react";
import LoadingEffect from "../components/LoadingEffect";
import convertDate from "../util/convertDate";
import renderCustomText from "../util/renderCustomText";
import Icon from "../components/Icon";
import { useTranslation } from "react-i18next";
import DevelopmentTag from "../components/DevelopmentTag";

export default function ProjectView({ project, onClose }: ProjectViewType) {
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedImage, setSelectedImage] = useState<number>(0);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const img = new Image();

        if (!project.thumbnail) return;

        img.src = project.thumbnail;
        img.onload = () => setLoading(false);

    }, [project.thumbnail]);

    return (
        <div className="project-view">
            <div className="panel">
                <button className="close" onClick={onClose}>
                    <Icon name="close" width="2rem" />
                </button>
                <div className="heading">
                    <div className="title">
                        <h3>{project.name}</h3>
                        {project.inDevelopment && <DevelopmentTag />}
                    </div>
                    <p className="subtitle">{convertDate(project.date, i18n.language)}</p>
                </div>
                <div className="content-container">
                    <div className="top-section">
                        {loading ? (
                            <LoadingEffect />
                        ) : (
                            <div className="image-container">
                                <img
                                    src={project.images[selectedImage] || placeholderImage}
                                    alt="Project image"
                                    className="project-image"
                                    loading="lazy"
                                />
                                <div className="outer-links">
                                    {project.mainLink && (
                                        <a href={project.mainLink} target="_blank" rel="noreferrer" className="main-link">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                                                <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                            </svg>
                                            {t("projects.livePreview")}
                                        </a>
                                    )}
                                    {project.secondaryLink && (
                                        <a href={project.secondaryLink} target="_blank" rel="noreferrer" className="secondary-link">
                                            <Logo name="github" clickable={false} />
                                        </a>
                                    )}
                                </div>
                                {/*
                                <div className="image-change-buttons">
                                    <button onClick={() => handleImageChange(-1)}>
                                        <Icon name="chevron-left" />
                                    </button>
                                    <span className="image-number">
                                        {selectedImage + 1} / {project.images.length}
                                    </span>
                                    <button onClick={() => handleImageChange(1)}>
                                        <Icon name="chevron-right" />
                                    </button>
                                </div>
                                */}
                                <div className="image-gallery">
                                    {project.images.map((image, index) => (
                                        <button
                                            key={index}
                                            className={selectedImage === index ? "img-button selected" : "img-button"}
                                        >
                                            <img
                                                src={image}
                                                alt="Project image"
                                                key={index}
                                                onClick={() => setSelectedImage(index)}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        {project.responsibilities && (
                            <div className="responsibilities">
                                <h4>{t("projects.responsibilities")}</h4>
                                <ul className="responsibilities">
                                    {i18n.language === "fi-FI"
                                        ? project.responsibilities.fi.map((responsibility, index) => (
                                                <li key={index}>{responsibility}</li>
                                            ))
                                        : project.responsibilities.en.map((responsibility, index) => (
                                                <li key={index}>{responsibility}</li>
                                            ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="description">
                        <h4>{t("projects.description")}</h4>
                        {i18n.language === "fi-FI"
                            ? renderCustomText(project.description.fi)
                            : renderCustomText(project.description.en)}
                    </div>
                    <div>
                        <h4>{t("projects.technologies")}</h4>
                        <div className="logos">
                            {project.logos.map((logo, index) => (
                                <Logo name={logo} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}