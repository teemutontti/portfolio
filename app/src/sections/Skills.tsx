//import Logo from "../components/Logo";
import LogoDumb from "../components/LogoDumb";
//import PercentageWheel from "../components/PercentageWheel";
import Tag from "../components/Tag";
import "../styles/skills.css"

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <p>
                Here's a snapshot of the technologies and methodologies I'm proficient in, with a focus on full-stack development
                and mobile applications.
            </p>
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
            <p>Hover over the tags to show where I have used each skill</p>
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
        </section>
    );
}