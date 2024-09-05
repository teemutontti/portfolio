import ProjectCard from "../components/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/project-carousel.css";
import { ArrowType, ProjectCarouselType } from "../util/types";
import { lazy, Suspense } from "react";
import LoadingEffect from "../components/LoadingEffect";
import Icon from "../components/Icon";
const Slider = lazy(() => import("react-slick"));

export default function ProjectCarousel({ projects, onProjectClick }: ProjectCarouselType) {
    const PrevArrow = (props: ArrowType) => {
        const { onClick } = props;
        return (
            <span
                style={{ display: "block", position: "absolute", left: "-2rem", top: "40%" }}
                onClick={onClick}
            >
                <Icon name="chevron-left"/>
            </span>
        );
    }

    const NextArrow = (props: ArrowType) => {
        const { onClick } = props;
        return (
            <span style={{ display: "block", position: "absolute", right: "-2rem", top: "40%" }} onClick={onClick}>
                <Icon name="chevron-right" />
            </span>
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return <div className="project-carousel">
        <Suspense fallback={<LoadingEffect />}>
            <Slider {...settings}>
                {projects.map((project, index) => (
                    <ProjectCard
                    key={index}
                    project={project}
                    onClick={() => onProjectClick(project)}
                    />
                ))}
            </Slider>
        </Suspense>
    </div>;
}
