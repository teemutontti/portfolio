import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";
import projectObjArray from "../util/projects";
import { ProjectType } from "../util/types";
import ProjectView from "../features/ProjectView";

export default function Projects() {
    const [projectToView, setProjectToView] = useState<ProjectType | null>(null);

    const handleProjectClick = (project: ProjectType) => {
        setProjectToView(project);
    };

    return (
        <section className="projects" id="projects">
            <h2>Recent Projects</h2>
            {projectToView &&
                <ProjectView
                    project={projectToView}
                    onClose={() => setProjectToView(null)}
                />
            }
            <div className="project-list">
                {projectObjArray.map((project, index) => (
                    <ProjectCard
                        key={index}
                        project={project}
                        onClick={() => handleProjectClick(project)}
                    />
                ))}
            </div>
        </section>
    );
}
