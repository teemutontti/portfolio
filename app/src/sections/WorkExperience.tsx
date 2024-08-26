import WorkExperienceCard from "../components/WorkExperienceCard";
import Section from "../features/Section";
import workExperiences from "../util/work-experiences";
import "../styles/work-experience.css";

export default function WorkExperience() {
    return (
        <Section name="work-experience" title="Work Experience">
            <div className="work-list">
                {workExperiences.map((work, index) => (
                    <WorkExperienceCard key={index} work={work} />
                ))}
            </div>
        </Section>
    );
}
