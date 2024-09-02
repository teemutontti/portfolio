import ProjectCard from "../components/ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/project-carousel.css";
import { ArrowType, ProjectCarouselType } from "../util/types";

export default function ProjectCarousel({ projects, onProjectClick }: ProjectCarouselType) {
    const PrevArrow = (props: ArrowType) => {
        const { onClick } = props;
        return (
            <span
                className="material-symbols-outlined"
                style={{ display: "block", position: "absolute", left: "-2rem", top: "40%" }}
                onClick={onClick}
            >
                chevron_left
            </span>
        );
    }

    const NextArrow = (props: ArrowType) => {
        const { onClick } = props;
        return (
            <span
                className="material-symbols-outlined"
                style={{ display: "block", position: "absolute", right: "-2rem", top: "40%" }}
                onClick={onClick}
            >
                chevron_right
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
        <Slider {...settings}>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    project={project}
                    onClick={() => onProjectClick(project)}
                />
            ))}
        </Slider>
    </div>;
}
