//import Logo from "../components/Logo";
import LogoDumb from "../components/LogoDumb";
//import PercentageWheel from "../components/PercentageWheel";
import Tag from "../components/Tag";
import Section from "../features/Section";
import "../styles/skills.css"

export default function Skills() {
    return (
        <Section name="skills">
            <LogoDumb version={2} />
            {/*
            <div className="logo-list">
                <div className="wheel">
                    <PercentageWheel percentage={80} />
                    <p>Frontend</p>
                </div>
                <div className="wheel">
                    <PercentageWheel percentage={75} />
                    <p>Backend</p>
                </div>
                <div className="wheel">
                    <PercentageWheel percentage={60} />
                    <p>Design</p>
                </div>
            </div>
            */}
            <div className="logo-list-container">
                <p className="hint-text">
                    Hover over the tags to show where I have used each skill
                </p>
                <div className="logo-list">
                    <Tag>Frontend</Tag>
                    <Tag>Backend</Tag>
                    <Tag>API</Tag>
                    <Tag>Problem Solving</Tag>
                    <Tag>Self-Initiative</Tag>
                    <Tag>Teamwork</Tag>
                    {/* Not sure if worth noting
                    <Tag>TDD</Tag>
                    */}
                    <Tag>Critical Thinking</Tag>
                    <Tag>Industrial Protocols</Tag>
                    <Tag>Game Development</Tag>
                    <Tag>Databases</Tag>
                    <Tag>Internship Experience</Tag>
                </div>
            </div>
        </Section>
    );
}