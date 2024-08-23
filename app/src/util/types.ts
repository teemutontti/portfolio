export interface LogoType {
    name: string;
}

export interface TagType {
    children: string
}

export interface PercentageWheelType {
    percentage: number
}

export interface LogoDumbType {
    version?: 1 | 2
}

export interface ProjectType {
    name: string;
    date: string;
    image: string;
    logos: string[];
    description: string[];
}

export interface ProjectCardType {
    project: ProjectType,
    onClick: () => void
}

export interface ProjectViewType {
    project: ProjectType,
    onClose: () => void
}

export interface MenuType {
    closeMenu: () => void;
}