import Logo from "../components/Logo";
import LogoDumb from "../components/LogoDumb";
import PercentageWheel from "../components/PercentageWheel";
import Tag from "../components/Tag";
import "../styles/skills.css"

export default function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <LogoDumb />
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
            <div className="logo-list">
                <Tag>Frontend</Tag>
                <Tag>Backend</Tag>
                <Tag>API</Tag>
                <Tag>Problem Solving</Tag>
                <Tag>Self-Initiative</Tag>
                <Tag>Teamwork</Tag>
                <Tag>TDD</Tag>
                <Tag>Critical Thinking</Tag>
                <Tag>Internship Experience</Tag>
            </div>
            <div className="logo-list">
                <Logo name="html" />
                <Logo name="css" />
                <Logo name="js" />
                <Logo name="ts" />
                <Logo name="java" />
                <Logo name="python" />
                <Logo name="android" />
                <Logo name="kotlin" />
                <Logo name="mysql" />
                <Logo name="react" />
                <Logo name="spring" />
                <Logo name="node" />
                <Logo name="express" />
            </div>
        </section>
    );
}