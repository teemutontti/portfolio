import WorkExperienceCard from "../components/WorkExperienceCard";
import Section from "../features/Section";
import workExperiences from "../util/work-experiences";
import "../styles/work-experience.css";
import { Fragment } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";

export default function WorkExperience() {
    const { t } = useTranslation();

    return (
        <Section name="work-experience" title={t("work.title")}>
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
