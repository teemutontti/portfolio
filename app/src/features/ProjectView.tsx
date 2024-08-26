import { ProjectViewType } from "../util/types";
import placeholderImage from "../assets/placeholder.webp";
import "../styles/project-view.css";
import Logo from "../components/Logo";
import { useEffect, useState } from "react";
import LoadingEffect from "../components/LoadingEffect";

export default function ProjectView({ project, onClose }: ProjectViewType) {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const img = new Image();

        if (!project.image) {
            return;
        }

        img.src = project.image;
        img.onload = () => {
            setLoading(false);
        };

    }, [project.image]);

    return (
        <div className="project-view">
            <div className="panel">
                <button className="close" onClick={onClose}>
                    <span className="material-symbols-outlined">close</span>
                </button>
                <div>
                    <h3>{project.name}</h3>
                    <p className="subtitle">{project.date}</p>
                </div>
                <div>
                    {loading
                        ? <LoadingEffect />
                        : <img
                            src={project.image || placeholderImage}
                            alt="Project image"
                            className="project-image"
                        />
                    }
                </div>
                <div>
                    <h4>Description</h4>
                    <div className="description">
                        {project.description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <h4>Technologies used</h4>
                    <div className="logos">
                        {project.logos.map((logo, index) => (
                            <Logo name={logo} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}