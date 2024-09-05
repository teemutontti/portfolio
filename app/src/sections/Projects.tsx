import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import "../styles/projects.css";
import projectObjArray from "../util/projects";
import { ProjectType } from "../util/types";
import ProjectView from "../features/ProjectView";
import Section from "../features/Section";
import ProjectCarousel from "../features/ProjectCarousel";
import useWindowSize from "../util/useWindowSize";
import Icon from "../components/Icon";

export default function Projects() {
    const [projectToView, setProjectToView] = useState<ProjectType | null>(null);
    const [sortType, setSortType] = useState<"rank" | "date">("rank");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
    const [projects, setProjects] = useState<ProjectType[]>(projectObjArray);
    const { width } = useWindowSize();

    useEffect(() => {
        const tempProjects = [...projects];
        const sortedProjects = tempProjects.sort((a, b) => {
            if (sortType === "date") {
                if (sortOrder === "asc") {
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                } else {
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                }
            } else {
                if (a.rank != undefined && b.rank != undefined) {
                    // Flipped the order of a.rank and b.rank because rank 1 should be at the top
                    if (sortOrder === "asc") {
                        return b.rank - a.rank;
                    } else {
                        return a.rank - b.rank;
                    }
                }
            }
            return 0;
        });
        setProjects(sortedProjects);
    }, [sortType, sortOrder]);

    const handleProjectClick = (project: ProjectType) => {
        setProjectToView(project);
    };

    const renderContent = () => {
        switch (true) {
            case (width < 650):
                return <ProjectCarousel projects={projects} onProjectClick={handleProjectClick} />;
            default:
                return <div className="project-list">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            onClick={() => handleProjectClick(project)}
                        />
                    ))}
                </div>
        }
    }

    return (
        <Section name="projects" title="Recent Projects">
            <div className="sort">
                <div className="sort-type">
                    <p>Sort by:</p>
                    <button
                        className={sortType === "rank" ? "sort-type-button selected" : "sort-type-button"}
                        onClick={() => setSortType("rank")}
                        >
                        Rank
                    </button>
                    <button
                        className={sortType === "date" ? "sort-type-button selected" : "sort-type-button"}
                        onClick={() => setSortType("date")}
                        >
                        Date
                    </button>
                </div>
                <div className="sort-order">
                    <p>Order:</p>
                    <button
                        className={sortOrder === "asc" ? "sort-order-button selected" : "sort-order-button"}
                        onClick={() => setSortOrder("asc")}
                        >
                        <Icon name="arrow-up"/>
                    </button>
                    <button
                        className={sortOrder === "desc" ? "sort-order-button selected" : "sort-order-button"}
                        onClick={() => setSortOrder("desc")}
                        >
                        <Icon name="arrow-down"/>
                    </button>
                </div>
            </div>
            {projectToView && <ProjectView project={projectToView} onClose={() => setProjectToView(null)} />}
            {renderContent()}
        </Section>
    );
}
