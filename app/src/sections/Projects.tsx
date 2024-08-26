import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";
import projectObjArray from "../util/projects";
import { ProjectType } from "../util/types";
import ProjectView from "../features/ProjectView";
import Section from "../features/Section";

export default function Projects() {
    const [projectToView, setProjectToView] = useState<ProjectType | null>(null);

    const handleProjectClick = (project: ProjectType) => {
        setProjectToView(project);
    };

    return (
        <Section name="projects" title="Recent Projects">
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
        </Section>
    );
}
