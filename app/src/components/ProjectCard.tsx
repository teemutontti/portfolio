import placeholderImage from "../assets/placeholder.webp";
import "../styles/project-card.css";
import { ProjectCardType } from "../util/types";
import Logo from "./Logo";

export default function ProjectCard({ project, onClick }: ProjectCardType) {
    return (
        <button className="project-card" onClick={onClick}>
            <img src={project.image || placeholderImage} className="project-image" alt="Project image" />
            <div className="project-info">
                <div className="left">
                    <h4>{project.name}</h4>
                    <p>{project.date}</p>
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