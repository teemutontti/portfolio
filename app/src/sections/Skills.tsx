import Logo from "../components/Logo";
import Tag from "../components/Tag";
import "../styles/skills.css"

export default function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
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