import { WorkExperienceCardType } from "../util/types";
import "../styles/work-experience-card.css";
import { useEffect, useState } from "react";
import useWindowSize from "../util/useWindowSize";

export default function WorkExperienceCard({ work }: WorkExperienceCardType) {
    const [open, setOpen] = useState<boolean>(false);
    const { width } = useWindowSize();

    useEffect(() => {
        if (width > 950) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [width]);

    const handleClick = () => {
        if (width <= 950) {
            setOpen(!open);
        }
    }

    return (
        <button className={open ? `work-experience-card open` : `work-experience-card`} onClick={handleClick}>
            <h4 className="work-subtitle">{work.subtitle}</h4>
            {width > 950 && <span className="title-separator" />}
            <h3 className="work-title">{work.title}</h3>
            {open && (
                <div className="text">
                    {work.text.map((text, index) => (
                        <p key={index} className="work-text">
                            {text}
                        </p>
                    ))}
                </div>
            )}
        </button>
    );
}