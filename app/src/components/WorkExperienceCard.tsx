import { WorkExperienceCardType, WorkExperienceSimpleType } from "../util/types";
import "../styles/work-experience-card.css";
import { useEffect, useState } from "react";
import useWindowSize from "../util/useWindowSize";
import { useTranslation } from "react-i18next";

export default function WorkExperienceCard({ work }: WorkExperienceCardType) {
    const [open, setOpen] = useState<boolean>(false);
    const [workObj, setWorkObj] = useState<WorkExperienceSimpleType | null>(null);
    const { width } = useWindowSize();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (i18n.language === "en") {
            setWorkObj(work.en);
        } else {
            setWorkObj(work.fi);
        }
    }, [i18n.language, work]);

    useEffect(() => {
        if (width > 850) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [width]);

    const handleClick = () => {
        if (width <= 850) {
            setOpen(!open);
        }
    }

    return (
        <button className={open ? `work-experience-card open` : `work-experience-card`} onClick={handleClick}>
            <p className="work-subtitle">{workObj?.date}</p>
            {width >= 850 && <span className="title-separator" />}
            <h3 className="work-title">{workObj?.title}</h3>
            {width < 850 && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" className="arrow">
                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                </svg>
            )}
            {open && (
                <div className="text">
                    {workObj?.text.map((text, index) => (
                        <p key={index} className="work-text">
                            {text}
                        </p>
                    ))}
                </div>
            )}
        </button>
    );
}