import { ProjectViewType } from "../util/types";
import placeholderImage from "../assets/project-images/placeholder.webp";
import "../styles/project-view.css";
import Logo from "../components/Logo";
import { useEffect, useState } from "react";
import LoadingEffect from "../components/LoadingEffect";
import convertDate from "../util/convertDate";
import renderCustomText from "../util/renderCustomText";

export default function ProjectView({ project, onClose }: ProjectViewType) {
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedImage, setSelectedImage] = useState<number>(0);

    useEffect(() => {
        const img = new Image();

        if (!project.thumbnail) {
            return;
        }

        img.src = project.thumbnail;
        img.onload = () => {
            setTimeout(() => {
                setLoading(false);
            }, 500);
        };

    }, [project.thumbnail]);

    const handleImageClick = (index: number) => {
        setSelectedImage(index);
    }

    return (
        <div className="project-view">
            <div className="panel">
                <button className="close" onClick={onClose}>
                    <span className="material-symbols-outlined">close</span>
                </button>
                <div>
                    <h3>{project.name}</h3>
                    <p className="subtitle">{convertDate(project.date)}</p>
                </div>
                <div className="content-container">
                    {loading ? (
                        <LoadingEffect />
                    ) : (
                        <div className="image-container">
                            <img
                                src={project.images[selectedImage] || placeholderImage}
                                alt="Project image"
                                className="project-image"
                            />
                            <div className="image-gallery">
                                {project.images.map((image, index) => (
                                    <button
                                        onClick={() => handleImageClick(index)}
                                        className={selectedImage === index ? "img-button selected" : "img-button"}
                                        key={index}
                                    >
                                        <img src={image} alt="Project image" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="text">
                        <h4>Description</h4>
                        <div className="description">{renderCustomText(project.description)}</div>
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
        </div>
    );
}