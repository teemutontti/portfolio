import placeholderImage from "../assets/project-images/placeholder.webp";
import "../styles/project-card.css";
import convertDate from "../util/convertDate";
import { ProjectCardType } from "../util/types";
import Logo from "./Logo";

export default function ProjectCard({ project, onClick }: ProjectCardType) {
    return (
        <button className="project-card" onClick={onClick}>
            <img src={project.thumbnail || placeholderImage} className="project-image" alt="Project image" loading="lazy" />
            <div className="project-info">
                <div className="left">
                    <h4 className="project-title">{project.name}</h4>
                    <p className="project-date">{convertDate(project.date)}</p>
                </div>
                <div className="right">
                    {project.logos.map((logo, index) => (
                        <Logo name={logo} key={index} />
                    ))}
                </div>
            </div>
        </button>
    );
}