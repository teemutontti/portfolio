import { ProjectType } from "./types";

export default function sortProjectsBy(projects: ProjectType[], type: string, order: "asc" | "desc"): ProjectType[] {
    return projects.sort((a, b) => {
        if (type === "date") {
            if (order === "asc") {
                return new Date(a.date).getTime() - new Date(b.date).getTime();
            } else {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
            }
        } else {
            if (a.rank != undefined && b.rank != undefined) {
                if (order === "asc") {
                    return a.rank - b.rank;
                } else {
                    return b.rank - a.rank;
                }
            }
        }
        return 0;
    });
}