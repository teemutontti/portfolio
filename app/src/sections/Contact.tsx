import Socials from "../components/Socials";
import Section from "../features/Section";

export default function Contact() {
    return (
        <Section name="contact" title="Contact">
            <p>If you'd like to connect or have any questions about my work, feel free to reach out!</p>
            <br/>
            <p>I'm always open to discuss new opportunities, collaborations, or simply sharing ideas.</p>
            <br/>
            <p>Looking forward to hearing from you!</p>
            <Socials />
        </Section>
    );
}
