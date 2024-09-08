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
import { useTranslation } from "react-i18next";
import Dropdown from "../components/Dropdown";

export default function Projects() {
    const [projectToView, setProjectToView] = useState<ProjectType | null>(null);
    const [sortType, setSortType] = useState<string>("rank");
    const [sortOrder, setSortOrder] = useState<string>("desc");
    const [projects, setProjects] = useState<ProjectType[]>(projectObjArray);
    const { width } = useWindowSize();
    const { t } = useTranslation();

    useEffect(() => {
        const tempProjects = [...projects];
        const sortedProjects = tempProjects.sort((a, b) => {
            if (sortType === t("projects.date")) {
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
            case (width < 950):
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

    const sortTypes = [t("projects.rank"), t("projects.date")];

    return (
        <Section name="projects" title={t("projects.title")}>
            <div className="sort">
                <p className="hint-text">{t("projects.sort")}</p>
                <div className="sort-actions">
                    <Dropdown className="sort-type" list={sortTypes} onClick={(type) => setSortType(type)} />
                    {sortOrder === "desc" && (
                        <button onClick={() => setSortOrder("asc")} className="sort-order-button">
                            <Icon name="arrow-down" />
                        </button>
                    )}
                    {sortOrder === "asc" && (
                        <button onClick={() => setSortOrder("desc")} className="sort-order-button">
                            <Icon name="arrow-up" />
                        </button>
                    )}
                </div>
            </div>
            {projectToView && <ProjectView project={projectToView} onClose={() => setProjectToView(null)} />}
            {renderContent()}
        </Section>
    );
}
