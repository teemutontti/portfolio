import WorkExperienceCard from "../components/WorkExperienceCard";
import Section from "../features/Section";
import workExperiences from "../util/work-experiences";
import "../styles/work-experience.css";
import { Fragment } from "react/jsx-runtime";

export default function WorkExperience() {
    return (
        <Section name="work-experience" title="Work Experience">
            <div className="work-list">
                {workExperiences.map((work, index) => (
                    <Fragment key={index}>
                        <WorkExperienceCard work={work} />
                        {index !== workExperiences.length - 1 && <span className="separator" />}
                    </Fragment>
                ))}
            </div>
        </Section>
    );
}
