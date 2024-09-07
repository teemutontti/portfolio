import ProjectCard from "../components/ProjectCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/project-carousel.css";
import { ArrowType, ProjectCarouselType } from "../util/types";
import { lazy, Suspense, useEffect, useState } from "react";
import LoadingEffect from "../components/LoadingEffect";
import Icon from "../components/Icon";
import useWindowSize from "../util/useWindowSize";
const Slider = lazy(() => import("react-slick"));

type SliderSettingsType = {
    dots: boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
    prevArrow: JSX.Element;
    nextArrow: JSX.Element;
}

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

    const narrowSettings = {
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

    const wideSettings = {
        ...narrowSettings,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    const { width } = useWindowSize();
    const [sliderSettings, setSliderSettings] = useState<SliderSettingsType>(narrowSettings);

    useEffect(() => {
        if (width > 650) {
            setSliderSettings(wideSettings);
        } else {
            setSliderSettings(narrowSettings);
        }
    }, [width]);

    return (
        <div className="project-carousel">
            <Suspense fallback={<LoadingEffect />}>
                <Slider {...sliderSettings}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} onClick={() => onProjectClick(project)} />
                    ))}
                </Slider>
            </Suspense>
        </div>
    );
}
