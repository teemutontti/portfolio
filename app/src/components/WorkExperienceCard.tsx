import { WorkExperienceCardType } from "../util/types";
import "../styles/work-experience-card.css";

export default function WorkExperienceCard({ work }: WorkExperienceCardType) {
    return (
        <div className="work-experience-card">
            <h4 className="work-subtitle">{work.subtitle}</h4>
            <h3 className="work-title">{work.title}</h3>
            <div className="text">
                {work.text.map((text, index) => (
                    <p key={index} className="work-text">{text}</p>
                ))}
            </div>
        </div>
    );
}