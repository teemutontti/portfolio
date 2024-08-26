import Section from "../features/Section";
import "../styles/about.css";

export default function About() {
    const text = [
        "Let me tell you a little bit about myself...",
        "I’m a third year programming student with  a strong passion for coding and problem solving.",
        "Over the course of my studies, I have had the opportunity to work on variety of projects that showcase my skills in software development and web design.",
        "Each project has been a valuable learning experience only fueling my passion for this industry. Here I have gathered some of my projects.",
        "I’m eager to continue learning new technologies in both front- and backend development.",
        "Thank you for visiting, and I hope you find my work as exciting as I do!"
    ];

    return (
        <Section name="about" title="About">
            <div className="text-field">
                {text.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </Section>
    );
}
