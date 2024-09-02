export type LogoType = {
    name: string;
    clickable?: boolean
}

export type TagType = {
    children: string,
    className?: string
}

export type PercentageWheelType = {
    percentage: number
}

export type LogoDumbType = {
    version?: 1 | 2
}

export type ProjectType = {
    name: string;
    date: Date;
    thumbnail: string;
    images: string[];
    logos: string[];
    description: string[];
    rank?: number;
    mainLink?: string;
    secondaryLink?: string;
}

export type ProjectCardType = {
    project: ProjectType;
    onClick: () => void;
};

export type WorkExperienceType = {
    title: string;
    subtitle: string;
    text: string[];
}

export type WorkExperienceCardType = {
    work: WorkExperienceType
}

export type ProjectViewType = {
    project: ProjectType,
    onClose: () => void
}

export type MenuType = {
    open: boolean;
    closeMenu: () => void;
}

export type SectionType = {
    name: string;
    title?: string;
    children?: React.ReactNode
}

export type SocialsType = {
    inMenu?: boolean;
}

export type ArrowType = {
    onClick?: () => void;
}

export type ProjectCarouselType = {
    projects: ProjectType[];
    onProjectClick: (project: ProjectType) => void;
}